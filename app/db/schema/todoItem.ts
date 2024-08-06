import { pgTable, serial, text, timestamp, varchar, boolean } from 'drizzle-orm/pg-core';

export const todoItemsTable = pgTable('todoItems', {
  id: serial('id').primaryKey(),
  label: varchar('label').notNull(),
  overview: text('overview').default(''),
  addedAt: timestamp('added_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
  .notNull()
  .$onUpdate(() => new Date()),
  completed: boolean('completed').default(false).notNull()

});

export type InsertItem = typeof todoItemsTable.$inferInsert;
export type SelectItem = typeof todoItemsTable.$inferSelect;