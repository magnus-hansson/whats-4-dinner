import { db } from '$lib/server/db';
import { dinners } from '$lib/server/db/schema';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const ingredients = data.get('ingredients');

        if (!name || !ingredients) {
            return {
                success: false,
                error: 'Name and ingredients are required'
            };
        }

        await db.insert(dinners).values({
            name: name.toString(),
            ingredients: ingredients.toString(),
            createdAt: new Date() // Changed from Date.now() to new Date()
        });

        return { success: true };
    }
}