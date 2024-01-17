import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { IConfigService } from "../config/config.interface";

export class StartCommand extends Command {
  constructor(
    bot: Telegraf<IBotContext>,
    private readonly configService: IConfigService
  ) {
    super(bot);
  }
  handle(): void {
    this.bot.start((ctx) => {
      ctx.reply(
        "Welcome! Press the button below to enter the app",
        Markup.inlineKeyboard([
          Markup.button.webApp("Enter the app", this.configService.get("URL")),
        ])
      );
    });
  }
}
