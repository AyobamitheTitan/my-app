import { db } from '../db';
import { eq } from 'drizzle-orm';
import { SelectItem, todoItemsTable } from '../schema/todoItem';

export default async function deleteItem(id: SelectItem['id']) {
  await db.delete(todoItemsTable).where(eq(todoItemsTable.id, id));
}