import { treaty } from '@elysiajs/eden';
import type { App } from '@/app/api/[[...slugs]]/route';

export const client = treaty<App>('https://anon-chat-kkw2wfhl4-yaroslavs-projects-9073d2e5.vercel.app').api;
