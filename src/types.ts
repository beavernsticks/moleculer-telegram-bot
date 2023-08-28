import { Bot } from "grammy";
import type { ServiceSchema, ServiceSettingSchema } from "moleculer";

export interface TelegramBotSettings {
  /**
   * Bot token from @BotFather.
   */
  token: string;
}

type _TelegramBotServiceSchema = ServiceSchema<{
  telegram: TelegramBotSettings;
}> &
  ServiceSchema<ServiceSettingSchema>;

export type ServiceMethods = {} & ThisType<_TelegramBotServiceSchema>;

export type TelegramBotServiceSchema = {
  name: "TelegramBotMixin";
  methods: ServiceMethods;
} & _TelegramBotServiceSchema;
