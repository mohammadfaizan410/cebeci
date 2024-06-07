import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: SMTP_EMAIL,
                pass: SMTP_PASSWORD,
            },
        });

        await transporter.verify();

        const info = await transporter.sendMail({
            from: `"${name}" <${SMTP_EMAIL}>`,
            to: "mohammadfaizan410@gmail.com",
            subject: `New Inquiry from ${name}`,
            text: message,
            replyTo: email,
        });

        console.log(info);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
