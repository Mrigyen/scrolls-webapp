// always use a random websocket generated by UUID
import uuid from "uuid/v4";

// unused
export const GPT2_SMALL_MODEL_NAME = "gpt2";
export const GPT2_SMALL_LEGAL_MODEL_NAME = "gpt2-small-legal";
export const GPT2_MEDIUM_MODEL_NAME = "gpt2-medium";
export const GPT2_MEDIUM_GOT_MODEL_NAME = "gpt2-medium-got";
export const GPT2_MEDIUM_LYRICS_MODEL_NAME = "gpt2-medium-lyrics";

// used
export const GPT2_MEDIUM_LEGAL_MODEL_NAME = "gpt2-medium-legal";
export const GPT2_MEDIUM_HP_MODEL_NAME = "gpt2-medium-hp";
export const GPT2_MEDIUM_RESEARCH_MODEL_NAME = "gpt2-medium-research";
export const GPT2_MEDIUM_COMPANIES_MODEL_NAME = "gpt2-medium-companies";

export const GPT2_LARGE_MODEL_NAME = "gpt2-large";

export const XLNET_BASE_CASED_MODEL_NAME = "xlnet-base-cased";
export const XLNET_LARGE_CASED_MODEL_NAME = "xlnet-large-cased";

export const WebSocketURL = "ws://45.76.191.30:8008/";

export const PROMPTS_TO_USE = [
  "The software innovations in the 20th century ",
  "Climate change has ",
  "The breakthrough in "
];

export const LEGAL_PROMPTS_TO_USE = [
  "The defendant has claimed ",
  "This court is here to ",
  "The jury has decided "
];

export const HP_PROMPTS_TO_USE = [
  "The wand begin shaking ",
  "His scar began to sense ",
  "Ron, stop! ",
  "Voldemort was near. ",
  "The Golden Snitch flew ",
  "They began to duel. "
];

export const GOT_PROMPTS_TO_USE = [
  "The dragon stared ",
  "The army converged ",
  "Missandei was angry. ",
  "They began the attack at dawn. ",
  "The poison seeped ",
  "Tyrion joked ",
  "Forged from ",
  "The white walkers began "
];

export const RESEARCH_PROMPTS_TO_USE = [
  "Observations that the chemical ",
  "The research in ",
  "Neural networks have ",
  "We have discovered ",
  "In this paper ",
  "We propose ",
  "Our thesis ",
  "In recent years ",
  "This paper presents ",
  "We describe a method ",
  "Significant enhancement in ",
  "In order to improve the  "
];

export const COMPANY_PROMPTS_TO_USE = [
  "Ferocious Caterpillar's founder vision was ",
  "WaterFaucet.AI's mission is to ",
  "Decaffeinated Water aims to ",
  "RoundSquare innovates ",
  "Invisible Mirror demonstrates ",
  "Sturdy Knockoff has patented the ",
  "Zapdos is the award-winning electric ",
  "Articuno's team has ",
  "Bulbausaur AI is a plant-based ",
  "BoringPotatos is disrupting the "
];
// use this as a way to back slatejs back to focus on where to add the comment
export const SPECIAL_CHARACTERS = [",", "!", ".", '"', "-", "'", "”"];
