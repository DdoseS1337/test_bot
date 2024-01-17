import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
  private config: NodeJS.ProcessEnv;

  constructor() {
    this.config = process.env;
    if (!this.config) {
      throw new Error("Environment variables not found");
    }
  }

  get(key: string): string {
    const value = this.config[key];
    if (!value) {
      throw new Error(`Key '${key}' not found in environment variables`);
    }
    return value;
  }
}
