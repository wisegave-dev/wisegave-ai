import { NextRequest, NextResponse } from "next/server";
import { Polar } from "@polar-sh/sdk";

// Initialize Polar SDK
const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: (process.env.POLAR_MODE as "sandbox" | "production") || "sandbox", // sandbox or production
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, customerEmail } = body;

    // Get product ID from environment variable or use the provided one
    const finalProductId = productId || process.env.POLAR_PRODUCT_ID;

    if (!finalProductId) {
      return NextResponse.json(
        {
          error: "Product ID is required",
          message:
            "Please configure POLAR_PRODUCT_ID in your environment variables",
        },
        { status: 400 }
      );
    }

    // Verify Polar access token is configured
    if (!process.env.POLAR_ACCESS_TOKEN) {
      return NextResponse.json(
        {
          error: "Polar access token not configured",
          message:
            "Please set POLAR_ACCESS_TOKEN in your environment variables",
        },
        { status: 500 }
      );
    }

    // Create a checkout session
    const checkout = await polar.checkouts.create({
      products: [finalProductId], // products is an array
      successUrl: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/checkout/success`,
      customerEmail: customerEmail || undefined,
      discountId: process.env.DISCOUNT_ID || undefined,
    });

    return NextResponse.json({
      checkoutUrl: checkout.url,
      checkoutId: checkout.id,
    });
  } catch (error: any) {
    console.error("Error creating Polar checkout:", error);
    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        message: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
