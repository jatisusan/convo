import { isSpoofedBot } from "@arcjet/inspect";
import aj from "../lib/arcjet.js";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ error: "Rate limit exceeded" });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ error: "Bot detected" });
      } else {
        res.status(403).json({ error: "Access denied by security policy" });
      }
    }

    if (decision.results.some(isSpoofedBot)) {
      res.status(403).json({ error: "Spoofed bot detected" });
    }

    next();
  } catch (error) {
    console.error("Arcjet middleware error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
