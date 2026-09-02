import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

export const sendOtpEmail = async (email, otp) => {
  try {
    await brevo.transactionalEmails.sendOtpEmail({
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
