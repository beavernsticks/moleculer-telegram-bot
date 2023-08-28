[![Moleculer logo](http://moleculer.services/images/banner.png)](https://github.com/moleculerjs/moleculer)

<br>

Telegram bot support for [Moleculer](https://moleculer.services/) microservices framework based on [GrammY](https://www.npmjs.com/package/grammy). [![NPM version](https://img.shields.io/npm/v/@beavernsticks/moleculer-telegram-bot.svg)](https://www.npmjs.com/package/@beavernsticks/moleculer-telegram-bot)



<br>

# Install

```bash
$ npm install @beavernsticks/moleculer-telegram-bot --save
```

<br>

# Usage

## Add TelegramBotMixin to your service

```js
import { TelegramBotMixin } from '@beavernsticks/moleculer-telegram-bot'

broker.createService({
  name: 'greeter',
  mixins: [TelegramBotMixin],
  settings: {
    telegram: {
      token: '<BOT TOKEN>',
    },
  },
  actions: {
    welcome: {
      handler(ctx) {
        return this.sendMessage(ctx, 'Hello!', { tgId: 12345 })
      },
    },
  },
})
```

<br>

## Configurations

### Setting fields
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `token` | `string` | **required** | Bot token from `@BotFather`. |

<br>

# License

The project is available under the [MIT license](./LICENSE).

# Contact

Copyright (c) 2023 Beaver'n'Sticks
