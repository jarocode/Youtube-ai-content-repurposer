import { TranscriptService } from "./services";

export const getTranscript = async (videoId: string) => {
  const transcript = await TranscriptService.getTranscript(videoId);
  return transcript;
};
