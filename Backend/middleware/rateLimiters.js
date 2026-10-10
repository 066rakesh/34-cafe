import rateLimit from "express-rate-limit";

const buildLimiter = ({ windowMs, max, message }) =>
  rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message },
  });

export const chatbotLimiter = buildLimiter({
  windowMs: 60 * 1000,
  max: 10,
  message: "You're sending messages too fast. Please wait a minute.",
});

export const deliveryLimiter = buildLimiter({
  windowMs: 60 * 1000,
  max: 20,
  message: "Too many location checks. Please wait a minute.",
});
