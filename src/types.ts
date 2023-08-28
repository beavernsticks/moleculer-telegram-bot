import { type Bot } from "grammy";
import { type InputMessageContent } from "grammy/types";
import type { Service, ServiceSchema, ServiceSettingSchema } from "moleculer";

export interface TelegramBotSettings {
  telegram: {
    /**
     * Bot token from @BotFather.
     */
    token: string;
  };
}

type _TelegramBotServiceSchema = ServiceSchema<TelegramBotSettings> &
  ServiceSchema<ServiceSettingSchema>;

type _TelegramBotServiceMethods = {
  sendMessage: (message: string, props: InputMessageContent) => Promise<void>;
};

type _TelegramBotLocalVariables = {
  bot: Bot;
};

export type TelegramBotThis = Service<TelegramBotSettings> &
  _TelegramBotServiceMethods &
  _TelegramBotLocalVariables;

export type ServiceMethods = ThisType<
  _TelegramBotServiceSchema &
    _TelegramBotServiceMethods &
    _TelegramBotLocalVariables
>;

export type TelegramBotServiceSchema = {
  name: "TelegramBotMixin";
  methods: ServiceMethods;
} & _TelegramBotServiceSchema;
