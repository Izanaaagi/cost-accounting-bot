import 'dotenv/config';
import { Telegraf } from 'telegraf';

const botToken = process.env.TELEGRAM_TOKEN;

const bot = new Telegraf(botToken);

bot.start((ctx) => ctx.reply('Welcome'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
