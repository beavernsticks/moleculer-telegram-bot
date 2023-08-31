import type {
  ServiceMethods,
  ServiceSchema,
  ServiceSettingSchema,
} from "moleculer";
import type { Bot, RawApi } from "grammy";
import { Other } from "grammy/out/core/api";

// Mixin settings.
export interface TelegramBotSettingsSchema extends ServiceSettingSchema {
  telegram: {
    /**
     * Bot token from BotFather.
     */
    token: string;
  };
}

// Mixin methods.
type SendMessageFunction = (
  tgId: number,
  message: string,
  props: Other<RawApi, "sendMessage">
) => Promise<void>;

type InitBotFunction = () => void;

export interface TelegramBotServiceMethods extends ServiceMethods {
  sendMessage: SendMessageFunction;
  initBot: InitBotFunction;
}

type TelegramBotLocalVariables = {
  bot: Bot;
};

// Mixin schema.
export interface TelegramBotServiceSchema
  extends ServiceSchema<TelegramBotSettingsSchema>,
    TelegramBotLocalVariables {
  methods: TelegramBotServiceMethods & ThisType<TelegramBotServiceSchema>;
}

// Mixin 'this' context.
export type TelegramBotThis = ThisType<TelegramBotServiceSchema> &
  TelegramBotServiceMethods &
  TelegramBotLocalVariables;
