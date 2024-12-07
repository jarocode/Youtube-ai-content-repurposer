import { getTranscript } from "./agents/content-extraction/nodes";

export async function POST(request: Request) {
  try {
    const { youtube_url } = await request.json();

    console.log("response:", youtube_url);

    const transcript = await getTranscript(youtube_url);

    return Response.json(
      {
        success: true,
        data: transcript,
        message: "youtube transcript extracted successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error:", error);
    return Response.json(
      { success: false, message: error },
      {
        status: 500,
      }
    );
  }
}
