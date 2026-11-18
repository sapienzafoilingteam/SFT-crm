import { createBrumothHandler } from '@/lib/brumoth-server';
export const runtime = 'nodejs';
export const maxDuration = 45;
export const POST = createBrumothHandler();
