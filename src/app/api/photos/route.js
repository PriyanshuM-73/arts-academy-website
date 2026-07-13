import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// 1. Configure the connection to your Cloudflare R2 Bucket
const s3Client = new S3Client({
  region: "auto", // Cloudflare R2 always uses "auto"
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export async function GET() {
  // 2. THE KILL SWITCH
  // If this is false, it safely returns an empty array to your gallery so it doesn't crash while you test other pages.
  if (process.env.ENABLE_CLOUDFLARE !== "true") {
    console.log("Cloudflare fetch paused to save resources.");
    return NextResponse.json({ photos: [] }); 
  }

  try {
    // 3. ASK R2 FOR THE FILES
    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME,
      // Since you named your bucket "annual-function", your photos are likely sitting right at the root. 
      // Leave Prefix empty.
      Prefix: "", 
    });

    const response = await s3Client.send(command);
    
    // 4. FORMAT THE URLS
    // We map over the files inside the bucket and combine your public R2 URL with the file names.
    // The filter prevents it from accidentally sending a blank folder path as an image.
    const imageUrls = (response.Contents || [])
      .filter((item) => item.Key && !item.Key.endsWith('/')) 
      .map((item) => `${process.env.R2_PUBLIC_URL}/${item.Key}`);

    // 5. SEND TO THE FRONTEND
    // This outputs the exact `{ photos: [...] }` structure your UI is already expecting.
    return NextResponse.json({ photos: imageUrls });
    
  } catch (error) {
    console.error("Cloudflare Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 });
  }
}