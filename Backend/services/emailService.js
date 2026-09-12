import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

export const sendOtpEmail = async (email, otp) => {
  try {
    await brevo.transactionalEmails.sendTransacEmail({
      subject: "Your Login OTP - 34 Paapi Pet Cafe",
      textContent: `Your OTP is ${otp}. It is valid for 5 minutes.`,
      sender: {
        name: "34 Paapi Pet Cafe",
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email }],
    });
  } catch (error) {
    console.error("Brevo error", error);
    throw error;
  }
};

export const sendOtpConfirmationEmail = async (email, order) => {
  try {
    const itemList = order.items
      .map(
        (item) =>
          `- ${item.product.title} x${item.quantity} - Rs.${item.price * item.quantity}`
      )
      .join("\n");

    await brevo.transactionalEmails.sendTransacEmail({
      subject: "Order confirmed - 34 Paapi Pet Cafe",
      textContent: `Your order has been confirmed!\n\nOrder ID: ${order._id}\n\nItems:\n${itemList}\n\nTotal: Rs.${order.totalAmount}\n\nThank you for ordering with us!`,
      sender: {
        name: "34 Paapi Pet Cafe",
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email }],
    });
  } catch (error) {
    console.error("Brevo error (order confirmation)", error);
  }
};
