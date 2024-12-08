import { StateGraph, START, MemorySaver } from "@langchain/langgraph";

import { RepurposeContentState } from "./state";

import {
  createEmailNewsLetterNode,
  createLinkedinPostNode,
  createMediumPostNode,
  createTwitterPostNode,
  getTranscript,
} from "./nodes";

export const builder = new StateGraph(RepurposeContentState)
  .addNode("get_transcript", getTranscript)
  .addNode("create_linkedin_post", createLinkedinPostNode)
  .addNode("create_twitter_post", createTwitterPostNode)
  .addNode("create_medium_post", createMediumPostNode)
  .addNode("create_email_newsletter", createEmailNewsLetterNode)
  .addEdge(START, "get_transcript")
  .addEdge("get_transcript", "create_linkedin_post")
  .addEdge("get_transcript", "create_twitter_post")
  .addEdge("get_transcript", "create_medium_post")
  .addEdge("get_transcript", "create_email_newsletter");

// Set up memory
const memory = new MemorySaver();

// compile
export const repurposeContentGraph = builder.compile({
  checkpointer: memory,
});
