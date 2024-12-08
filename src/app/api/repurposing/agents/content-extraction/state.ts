import { Annotation } from "@langchain/langgraph";

export interface Analyst {
  affiliation: string;
  name: string;
  role: string;
  description: string;
  persona: string;
}

export const RepurposeContentState = Annotation.Root({
  videoId: Annotation<string>,
  youtube_transcript: Annotation<string>,
  linkedin_post: Annotation<string>,
  x_post: Annotation<string>,
  medium_post: Annotation<string>,
});
