import { ENV } from "../lib/env.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const socketAuthMiddleware = async (socket, next) => {
  try {
    const token = socket.handshake.headers.cookie
      ?.split("; ")
      .find((cookie) => cookie.startsWith("jwt="))
      ?.split("=")[1];

    if (!token) {
      console.log("Socket Unauthorized - No token");
      return next(new Error("Unauthorized - No token"));
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded) {
      console.log("Socket Unauthorized - Invalid token");
      return next(new Error("Unauthorized - Invalid token"));
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      console.log("Socket Unauthorized - User not found");
      return next(new Error("Unauthorized - User not found"));
    }

    socket.user = user;
    socket.userId = user._id.toString();
    next();
  } catch (error) {
    console.log("Error in socket auth middleware", error);
    next(new Error("Unauthorized - Socket authentication failed"));
  }
};
