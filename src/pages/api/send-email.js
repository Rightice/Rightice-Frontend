import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userEmail, userName, bookingDetails } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASS,
    },
  });

  const clientMailOptions = {
    from: process.env.EMAIL_FROM,
    to: userEmail,
    subject: "Your Booking Confirmation",
    html: `
      <h2>Hi ${userName},</h2>
      <p>Thank you for booking a consultation. Here are your booking details:</p>
      <ul>
        <li><strong>Date:</strong> ${bookingDetails.date}</li>
        <li><strong>Time:</strong> ${bookingDetails.time}</li>
        <li><strong>Lawyer:</strong> ${bookingDetails.lawyer}</li>
        <li><strong>Case Details:</strong> ${bookingDetails.caseDetails}</li>
      </ul>
    `,
  };

  const officeMailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.LEGAL_OFFICE_EMAIL,
    subject: "New Booking Notification",
    html: `
      <h2>New Booking Received</h2>
      <ul>
        <li><strong>Client Name:</strong> ${userName}</li>
        <li><strong>Email:</strong> ${userEmail}</li>
        <li><strong>Date:</strong> ${bookingDetails.date}</li>
        <li><strong>Time:</strong> ${bookingDetails.time}</li>
        <li><strong>Lawyer:</strong> ${bookingDetails.lawyer}</li>
        <li><strong>Case Details:</strong> ${bookingDetails.caseDetails}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(officeMailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email sending failed" });
  }
}
