import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
import { menu } from "../data/menu.js";

export const chatbot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const trimmedMenu = menu.map((item) => ({
      title: item.title,
      description: item.description,
      price: item.price,
      category: item.category,
      subCategory: item.subCategory,
      isVeg: item.isVeg,
      isChefSpecial: item.isChefSpecial,
      isPopular: item.isPopular,
      prepTime: item.prepTime,
    }));

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `You are a friendly food assistant for "34 Cafe".
    Only recommend items from this menu list: ${JSON.stringify(trimmedMenu)}
    If the user asks for something not in the menu, politely say it's not available.
    Keep replies short (2-3 sentences) and conversational. Mention price when relevant.

    User: ${message}`;

    const result = await model.generateContent(prompt);
    const aiReply = result.response.text();

    return res.status(200).json({
      success: true,
      reply: aiReply,
    });
  } catch (error) {
    console.error("Chatbot error", error);

    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        message: "AI is a bit busy right now, please try again in a minute!",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to get the response",
    });
  }
};
