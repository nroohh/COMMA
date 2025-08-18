import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
 
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'], // allowed content types for upload
          addRandomSuffix: true, // add suffix to file name to avoid conflicts
          tokenPayload: '{}', // additional payload for the token
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        try {
            // optional logic after upload
        } catch (error) {
          throw new Error('upload failed');
        }
      },
    });
    return NextResponse.json(jsonResponse); // return json response
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}