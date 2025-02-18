import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age')
});

export const dinners = sqliteTable('dinners', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    ingredients: text('ingredients').notNull(),
    createdAt: integer('created_at').notNull()
});
