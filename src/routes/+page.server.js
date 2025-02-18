import { db } from '$lib/server/db';
import { dinners } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
    const allDinners = await db.select().from(dinners).orderBy(desc(dinners.createdAt));
    return { dinners: allDinners };
}