import { Errors } from 'moleculer'
import type { TelegramBotServiceSchema } from "./types";
import { Bot } from "grammy";

export const TelegramBotMixin: TelegramBotServiceSchema = {
  name: "TelegramBotMixin",

  settings: {
    telegram: {
      token: process.env.TELEGRAM_BOT_TOKEN || "",
    },
  },

  methods: {},

  created() {
    if (!this.settings.telegram.token) {
      throw new Errors.ServiceSchemaError("'telegram.token' is required.", {})
    }
    this.bot = new Bot(this.settings.telegram.token);
    this.logger.info("Bot created.");
  },

  async started() {
    await this.bot.start()
    this.logger.info("Bot started.");
  },

  async stopped() {
    await this.bot.stop()
    this.logger.info("Bot stopped.");
  }
};
