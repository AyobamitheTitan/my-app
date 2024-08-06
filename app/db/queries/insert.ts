import { db } from "../db";
import { InsertItem, todoItemsTable } from "../schema/todoItem";

export default async function insert(data: InsertItem) {
    await db.insert(todoItemsTable).values(data)
}