import { Context } from "telegraf";

export interface SessionData {
  client: string;
}

export interface IBotContext extends Context {
  session: SessionData;
}
