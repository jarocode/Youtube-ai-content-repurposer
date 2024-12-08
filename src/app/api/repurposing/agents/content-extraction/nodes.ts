import { PromptTemplate } from "@langchain/core/prompts";
import { TranscriptService } from "./services";
import { LLM } from "@/app/api/llms";
import {
  createEmailNewsLetterPrompt,
  createLinkedPostPrompt,
  createMediumPostPrompt,
  createTwitterPostPrompt,
} from "./prompt";
import { RepurposeContentState } from "./state";

const model = LLM.chatOpenAI;

export const getTranscript = async (
  state: typeof RepurposeContentState.State
) => {
  const { videoId } = state;
  const transcript = await TranscriptService.getTranscript(videoId);
  return transcript;
};

export const createLinkedinPostNode = async (
  state: typeof RepurposeContentState.State
) => {
  console.log("--Create linkedin post node--");

  const { youtube_transcript } = state;

  const prompt = PromptTemplate.fromTemplate(createLinkedPostPrompt);
  const chain = prompt.pipe(model);
  const result = await chain.invoke({ transcript: youtube_transcript });
  console.log("linkedin post:", result.content);
};

export const createTwitterPostNode = async (
  state: typeof RepurposeContentState.State
) => {
  console.log("--Create twitter (x) post node--");

  const { youtube_transcript } = state;

  const prompt = PromptTemplate.fromTemplate(createTwitterPostPrompt);
  const chain = prompt.pipe(model);
  const result = await chain.invoke({ transcript: youtube_transcript });
  console.log(" twitter (x) post:", result.content);
};

export const createMediumPostNode = async (
  state: typeof RepurposeContentState.State
) => {
  console.log("--Create medium post node--");

  const { youtube_transcript } = state;

  const prompt = PromptTemplate.fromTemplate(createMediumPostPrompt);
  const chain = prompt.pipe(model);
  const result = await chain.invoke({ transcript: youtube_transcript });
  console.log(" medium post:", result.content);
};

export const createEmailNewsLetterNode = async (
  state: typeof RepurposeContentState.State
) => {
  console.log("--Create email newsletter node--");

  const { youtube_transcript } = state;

  const prompt = PromptTemplate.fromTemplate(createEmailNewsLetterPrompt);
  const chain = prompt.pipe(model);
  const result = await chain.invoke({ transcript: youtube_transcript });
  console.log(" email newsletter:", result.content);
};
