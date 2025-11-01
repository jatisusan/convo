import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middlewares/socket.auth.middleware.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [ENV.CLIENT_URL],
    credentials: true,
  },
});

io.use(socketAuthMiddleware);

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected: ", socket.user.fullName);
  const userId = socket.userId;
  userSocketMap[userId] = socket.id;

  io.emit("online-users", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected: ", socket.user.fullName);
    delete userSocketMap[userId];
    io.emit("online-users", Object.keys(userSocketMap));
  });
});

export { io, app, server };


