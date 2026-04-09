import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  let data: ContactFormData;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = data;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  // Send via AWS SES
  // Requires AWS_REGION and AWS_SES_FROM_EMAIL environment variables.
  // In Amplify WEB_COMPUTE, the execution role provides IAM credentials automatically.
  const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION;
  const fromEmail =
    process.env.AWS_SES_FROM_EMAIL || "noreply@gevdynamics.com";
  const toEmail = "info@gevdynamics.com";

  if (!region) {
    console.error("AWS_REGION not configured — cannot send contact form email");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  try {
    // Use AWS SDK v3 SES client
    const { SESClient, SendEmailCommand } = await import(
      "@aws-sdk/client-ses"
    );

    const ses = new SESClient({ region });

    await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: {
          ToAddresses: [toEmail],
        },
        Message: {
          Subject: {
            Data: `[GEV Dynamics Contact] ${subject}`,
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
              Charset: "UTF-8",
            },
          },
        },
        ReplyToAddresses: [email],
      })
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SES send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
