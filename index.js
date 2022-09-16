import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { getJoke } from "./api.js";

dotenv.config();

const TELEGRAM_BOT_API_KEY = process.env.TELEGRAM_BOT_API_KEY;
const telegramBot = new TelegramBot(TELEGRAM_BOT_API_KEY, { polling: true });

telegramBot.onText(/\/start/, (msg) => {
  telegramBot.sendMessage(msg.chat.id, `Welcome ${msg.chat.first_name}`);
});

telegramBot.onText(/\/joke/, async (msg) => {
  const joke = await getJoke();
  telegramBot.sendMessage(msg.chat.id, joke);
});
