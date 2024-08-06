"use server"

import {z} from "zod"
import insert from "../db/queries/insert"

const schema = z.object({
    item: z.string({
        invalid_type_error: "Invalid string"
    })
})

export default async function storeItem(formData: FormData) {
    const validatedFields = schema.safeParse({
        item: formData.get("item")
    })
    console.log("todo item",validatedFields.data?.item);
    
    if (!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }else{
        await insert({
            label: validatedFields.data.item,
        })
    }
}