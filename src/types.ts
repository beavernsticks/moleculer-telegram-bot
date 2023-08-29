import type {
  ServiceMethods,
  ServiceSchema,
  ServiceSettingSchema,
} from "moleculer";
import type { Bot, RawApi } from 'grammy'
import { Other } from "grammy/out/core/api";

export interface TelegramBotSettingsSchema extends ServiceSettingSchema {
  telegram: {
    /**
     * Bot token from BotFather.
     */
    token: string;
  };
}

type SendMessageFunction = (
  tgId: number,
  message: string,
  props: Other<RawApi, "sendMessage">
) => Promise<void>;

export interface TelegramBotServiceMethods extends ServiceMethods {
  sendMessage: SendMessageFunction;
}

export interface TelegramBotServiceSchema
  extends ServiceSchema<TelegramBotSettingsSchema> {
  methods: TelegramBotServiceMethods & ThisType<TelegramBotServiceSchema>;
  bot: Bot;
}
