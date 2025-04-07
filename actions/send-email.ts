'use server'

import nodemailer from 'nodemailer';
import { emailFormType } from "@/types/types";
import { revalidatePath } from "next/cache";
import Mail from 'nodemailer/lib/mailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_APP_HOST,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 10
});

const sendEmail = async (prevState: emailFormType, formData: FormData) => {
  const recipient = process.env.EMAIL_APP_HOST
  const password = process.env.EMAIL_APP_PASSWORD
  if (!recipient || !password) {
    throw new Error('Recipient data is not set in environment variables.')
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // Extract form data
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Validate form data
  if (!name) {
    return {
      error: {
        name: 'Please provide your name. It is a required field.'
      },
      success: false
    }
  }
  if (!email) {
    return {
      error: {
        email: 'Please provide your email address. It is a required field.'
      },
      success: false
    }
  }
  if (typeof email !== 'string' || !emailRegex.test(email)) {
    return {
      error: {
        email: 'The provided email address is invalid. Please check and try again.'
      },
      success: false
    }
  }
  if (!subject) {
    return {
      error: {
        subject: 'Please provide a subject for your message. It is a required field.'
      },
      success: false
    }
  }
  if (!message) {
    return {
      error: {
        message: 'Please provide a message. It is a required field and cannot be left empty.'
      },
      success: false
    }
  }
  // Simulate sending email
  const receiverMail: Mail.Options = {
    from: recipient,
    to: recipient,
    subject: `Contact Request from ${name} — ${subject}`, // Subject line
    html: `
    <p>You have received a new message from the website.</p>
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br>${(message as string).replace(/\n/g, '<br>')}</p>
    <p>—<br>Quobotic Consulting Pvt. Ltd.</p>
    `,
    replyTo: email as string
  }
  const info = await transporter.sendMail(receiverMail);
  console.log(`Message sent: ${info.messageId}`);
  if (!info) {
    console.error('Email not sent')
    return {
      error: {
        other: 'Email not sent'
      },
      success: false
    }
  }
  else {
    revalidatePath('/')
    return {
      success: true
    }
  }
}

export default sendEmail