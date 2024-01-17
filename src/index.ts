import { Telegraf, Markup, session } from "telegraf";
import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import { IBotContext } from "./context/context.interface";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import Database from "./database/database.connect";
import express, { Application } from "express";
import Server from "./server";

class Bot {
  app: Application = express();
  server: Server = new Server(this.app);
  PORT: string = this.configService.get("PORT");
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];
  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get("TOKEN"));
    this.bot.use(session());
  }
  async init() {
    const db = new Database(this.configService.get("MONGODB_URI"));
    try {
      await db.connect();
      console.log("database successfully connected");
    } catch (error) {
      console.log(error);
    }
    this.app.listen(this.PORT, () => {
      console.log(`Server running at port ${this.PORT}`);
    });
    this.commands = [new StartCommand(this.bot, this.configService)];
    for (const command of this.commands) {
      command.handle();
    }
    this.bot.launch();
  }
}

const bot = new Bot(new ConfigService());
bot.init();
