import { db } from '$lib/server/db';
import { dinners } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
    try {
        const [dinner] = await db.select()
            .from(dinners)
            .where(eq(dinners.id, parseInt(params.id)))
            .limit(1);
        
        if (!dinner) {
            return {
                status: 404,
                error: 'Dinner not found'
            };
        }

        return { dinner };
    } catch (error) {
        console.error('Database error:', error);
        return {
            status: 500,
            error: 'Failed to load dinner'
        };
    }
}

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const name = data.get('name');
        const ingredients = data.get('ingredients');

        if (!name || !ingredients) {
            return {
                success: false,
                error: 'Name and ingredients are required'
            };
        }

        try {
            await db.update(dinners)
                .set({
                    name: name.toString(),
                    ingredients: ingredients.toString()
                })
                .where(eq(dinners.id, parseInt(params.id)));

            return { success: true };
        } catch (error) {
            console.error('Update error:', error);
            return {
                success: false,
                error: 'Failed to update dinner'
            };
        }
    }
}