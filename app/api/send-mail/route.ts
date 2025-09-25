import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true,
      auth: {
        user: "apikey", // literally the string "apikey"
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    // Branded HTML template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          
          <!-- Logo Header -->
          <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0;">New Contact Us Submission</h2>
          </div>

          <!-- Content -->
          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="font-weight: bold; padding: 8px; width: 150px;">Name:</td>
                <td style="padding: 8px;">${data.name}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="font-weight: bold; padding: 8px;">Email:</td>
                <td style="padding: 8px;">${data.email}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px;">Mobile:</td>
                <td style="padding: 8px;">${data.mobile}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="font-weight: bold; padding: 8px;">Company:</td>
                <td style="padding: 8px;">${data.company}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px;">Country:</td>
                <td style="padding: 8px;">${data.country}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="font-weight: bold; padding: 8px;">Portal:</td>
                <td style="padding: 8px;">${data.portal || data.portalOther}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px;">Document Type:</td>
                <td style="padding: 8px;">${data.documentType || data.documentTypeOther}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="font-weight: bold; padding: 8px;">Volume:</td>
                <td style="padding: 8px;">${data.volume || "N/A"}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px;">Best Time:</td>
                <td style="padding: 8px;">${data.bestTime}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="font-weight: bold; padding: 8px;">Message:</td>
                <td style="padding: 8px;">${data.message}</td>
              </tr>
            </table>

            <p style="margin-top: 20px; font-size: 0.9rem; color: #555;">
              This message was sent via the Contact Us form on your website.
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f3f3f3; padding: 15px; text-align: center; font-size: 0.8rem; color: #555;">
            <p>APPortaluploads Software, Inc.</p>
            <p><a href="https://apportaluploads.com" style="color: #4f46e5; text-decoration: none;">www.apportaluploads.com</a></p>
            <p>Please do not reply directly to this automated email.</p>
          </div>

        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "info@apportaluploads.com",
      replyTo: data.email,
      subject: data.subject || "New Contact Us Message",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("SendGrid email error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
