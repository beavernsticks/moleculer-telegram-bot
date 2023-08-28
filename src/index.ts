import type { TelegramBotServiceSchema } from "./types";

export const TelegramBotMixin: TelegramBotServiceSchema = {
  name: "TelegramBotMixin",

  settings: {
    telegram: {
      token: process.env.TELEGRAM_BOT_TOKEN || "",
    },
  },

  methods: {},

  async started() {},
};
