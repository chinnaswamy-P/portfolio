import { Resend } from "resend";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (
      typeof name !== "string" || name.trim().length < 2 || name.length > 100 ||
      typeof email !== "string" || email.length > 254 || !emailPattern.test(email) ||
      typeof message !== "string" || message.trim().length < 10 || message.length > 5000
    ) {
      return Response.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !from || !to) {
      return Response.json({ error: "The contact form is not configured yet. Please use the email link instead." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email.trim(),
      subject: "Portfolio contact form message",
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });
    if (error) {
      console.error("Contact form email provider error:", error);
      return Response.json({ error: "Message could not be sent. Please use the email link instead." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Unable to process this message. Please use the email link instead." }, { status: 400 });
  }
}
