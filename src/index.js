import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

config();

const token = process.env.DISCORD_TOKEN;
const client = new Client({ intents: ['Guilds', 'GuildMessages'] });

client.login(token);