import {getTodoItems} from '../db/queries/select'

export default async function getItems(){
    const items = await getTodoItems()
    return items
}
