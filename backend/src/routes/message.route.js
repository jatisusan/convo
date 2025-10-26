import express from "express";
import {
  getChatPartners,
  getContacts,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection, authenticate);

// fetch all users except the logged-in user
router.get("/contacts", getContacts);

// fetch all users that the logged-in user has chatted with
router.get("/chats", getChatPartners);

// fetch all messages between the logged-in user and a specific user
router.get("/:id", getMessagesByUserId);

router.post("/send/:id", sendMessage);

export default router;
