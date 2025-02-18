import { pgTable, text, serial, timestamp, integer } from 'drizzle-orm/pg-core';

export const dinners = pgTable('dinners', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    ingredients: text('ingredients').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow()
});
