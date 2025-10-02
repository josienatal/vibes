import { AIModels } from "../agents/inferutils/config.types";

export interface GlobalConfigurableSettings {
  defaultModel: AIModels;
  enableLogging: boolean;
  maxRetries: number;
  timeoutMs: number;
}

export const GLOBAL_CONFIG: GlobalConfigurableSettings = {
  defaultModel: AIModels.GEMINI_2_5_PRO,
  enableLogging: true,
  maxRetries: 3,
  timeoutMs: 30000, // 30s
};
