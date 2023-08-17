import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

export async function POST(request: Request) {
  const { email, phone, message, name } = (await request.json()) as any;

  const msg = {
    to: "oliver.emanuel.nagy@gmail.com",
    from: "info@jelvenydepo.hu",
    replyTo: email,
    templateId: "d-db8eee4afad241358559b1a059ec7dfc",
    customArgs: { name: name, email: email, pgone: phone, message: message },
  } as MailDataRequired;

  try {
    await sgMail.send(msg);
    return NextResponse.json(
      { message: `Email has been sent` },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    console.error(error?.response?.body);
    console.error(error?.response?.body?.errors);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
