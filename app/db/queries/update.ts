import { eq, not } from 'drizzle-orm';
import { db } from '../db';
import { SelectItem, todoItemsTable } from '../schema/todoItem';

export async function updateItem(id: SelectItem['id'], data: Partial<Omit<SelectItem, 'id'>>) {
  await db.update(todoItemsTable).set(data).where(eq(todoItemsTable.id, id));
}

export async function toggleItem(id: SelectItem['id']) {
  await db.update(todoItemsTable).set({
    completed:not(todoItemsTable.completed)
  }).where(eq(todoItemsTable.id,id))
}