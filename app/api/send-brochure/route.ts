// app/api/send-brochure/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { fullName, contactNo, email, courseName, source1 } = await request.json();

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'primepointmarketing11@gmail.com',
    subject: 'Download Brochure Form Details Received',
    text: `
      Date: ${new Date().toLocaleDateString()}
      Time: ${new Date().toLocaleTimeString()}
      Source 1: ${source1}
      Source 2: Download Brochure
      Course Name: ${courseName}
      
      Full Name: ${fullName}
      Contact No: ${contactNo}
      Email: ${email}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
