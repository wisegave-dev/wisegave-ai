import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
import { z } from "zod";

// Form validation schema
const FormSchema = z.object({
  industry: z.string().optional(),
  businessIdea: z.string().optional(),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(1, "Business name is required"),
  website: z.string().url().optional().or(z.literal("")),
  country: z.string().min(1, "Country is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();

    // Get client info
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "";
    const userAgent = request.headers.get("user-agent") || "";

    // Validate form data
    const validatedData = FormSchema.parse(body);

    // Prepare data for Google Sheets
    const sheetData = {
      Industry: validatedData.industry || "Other",
      BusinessIdea: validatedData.businessIdea || "",
      Email: validatedData.email,
      BusinessName: validatedData.businessName,
      Website: validatedData.website || "",
      Country: validatedData.country,
      ip,
      userAgent,
    };

    // Save to Google Sheets
    await appendToSheet(sheetData);

    // Also send notification email (optional)
    await sendNotificationEmail(sheetData);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Optional: Send notification email
async function sendNotificationEmail(data: Record<string, any>) {
  // You can integrate with any email service here
  // Example: SendGrid, AWS SES, Resend, etc.
  console.log("New form submission:", data);

  // Example with Resend (if you want to use it)
  /*
  if (process.env.RESEND_API_KEY) {
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'noreply@wisegave.ai',
      to: 'info@wisegave.ai',
      subject: `New Demo Request - ${data.BusinessName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Industry:</strong> ${data.Industry}</p>
        <p><strong>Business:</strong> ${data.BusinessName}</p>
        <p><strong>Email:</strong> ${data.Email}</p>
        <p><strong>Country:</strong> ${data.Country}</p>
        <p><strong>Website:</strong> ${data.Website}</p>
        <p><strong>Business Idea:</strong> ${data.BusinessIdea}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
  }
  */
}
