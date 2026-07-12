import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Configure Cloudinary with your secure environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Search the "annual-function" folder and grab up to 100 images
    const result = await cloudinary.search
      .expression("folder:annual-function")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    // Extract only the secure image URLs into a simple array
    const imageUrls = result.resources.map((file) => file.secure_url);

    // Send the array to your frontend
    return NextResponse.json({ photos: imageUrls });
    
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 });
  }
}