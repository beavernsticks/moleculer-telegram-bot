import { Errors } from 'moleculer'
import type { TelegramBotServiceSchema, TelegramBotThis } from "./types";
import { Bot, RawApi } from "grammy";
import { Other } from 'grammy/out/core/api';

export const TelegramBotMixin: TelegramBotServiceSchema = {
  name: "TelegramBotMixin",

  settings: {
    telegram: {
      token: "",
    },
  },

  methods: {
    async sendMessage(tgId: number, message: string, props: Other<RawApi, "sendMessage">) {
      this.bot.api.sendMessage(tgId, message, props)
    }
  },

  created() {
    const _this = this as unknown as TelegramBotThis;
    if (!_this.settings.telegram.token) {
      throw new Errors.ServiceSchemaError("'telegram.token' is required.", {});
    }
    _this.bot = new Bot(_this.settings.telegram.token);
    _this.logger.info("Bot created.");
  },

  async started() {
    const _this = this as unknown as TelegramBotThis;
    await _this.bot.start();
    _this.logger.info("Bot started.");
  },

  async stopped() {
    const _this = this as unknown as TelegramBotThis;
    await _this.bot.stop();
    _this.logger.info("Bot stopped.");
  }
};
