import { db } from '$lib/server/db';
import { dinners } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
    try {
        const allDinners = await db.select().from(dinners).orderBy(desc(dinners.createdAt));
        return { 
            dinners: allDinners,
            debug: {
                databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set',
                postgresUrl: process.env.POSTGRES_URL ? 'Set' : 'Not set'
            }
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            dinners: [],
            error: error.message,
            debug: {
                databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set',
                postgresUrl: process.env.POSTGRES_URL ? 'Set' : 'Not set'
            }
        };
    }
}