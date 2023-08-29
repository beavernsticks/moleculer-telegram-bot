import { Errors, ServiceSchema } from "moleculer";
import { Bot, RawApi } from "grammy";
import { Other } from "grammy/out/core/api";
import { TelegramBotServiceSchema } from "./types";

export const TelegramBotMixin: Partial<
  ServiceSchema & TelegramBotServiceSchema
> = {
  name: "TelegramBotMixin",

  settings: {
    telegram: {
      token: "",
    },
  },

  methods: {
    initBot() {
      this.logger.warn('`initBot()` not implemented. Please, define this method inside your service to suppress this warning.')
    },

    async sendMessage(
      tgId: number,
      message: string,
      props: Other<RawApi, "sendMessage">
    ) {
      this.bot.api.sendMessage(tgId, message, props);
    },
  },

  created() {
    if (!this.settings.telegram.token) {
      throw new Errors.ServiceSchemaError("'telegram.token' is required.", {});
    }
    this.bot = new Bot(this.settings.telegram.token);
    this.logger.info("Bot created.");
  },

  async started() {
    if (typeof this.initBot === 'function') {
      this.initBot();
    }
    const bot = this.bot as Bot;
    await bot.start();
    this.logger.info("Bot started.");
  },

  async stopped() {
    const bot = this.bot as Bot;
    await bot.stop();
    this.logger.info("Bot stopped.");
  },
};
