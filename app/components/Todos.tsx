import { getTodoItems } from "../db/queries/select";
import TodoItem from "./TodoItem";

export default async function FetchTodos(){
    const items = await getTodoItems()
    return <Todos items={items}/>

}

export  function Todos({items}) {
    return (
        <>
            <div className="w-4/5 bg-red-200 flex flex-col p-4 px-6 my-28 mx-auto">
                {items.map((item,key)=><TodoItem key={key} id={item.id} addedAt={item.addedAt} label={item.label} overview={item.overview} completed={item.completed}/>)}
            </div>
        </>
    );
}
