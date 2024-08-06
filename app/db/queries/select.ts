"use server"
import { eq } from "drizzle-orm";
import { db } from "../db";
import { SelectItem, todoItemsTable } from "../schema/todoItem";

export async function getTodoItems(): Promise<
    Array<{
        id: number;
        label: string;
        overview: string| null;
        addedAt: Date;
        updatedAt: Date
        completed: boolean;
        
    }>
>{
    return db.select().from(todoItemsTable);
}


export async function getTodoItem(id: SelectItem['id']): Promise<
    Array<{
        id: number;
        label: string;
        overview: string| null;
        addedAt: Date;
        updatedAt: Date
    }>
>{
    return db.select().from(todoItemsTable).where(eq(todoItemsTable.id, id))
}