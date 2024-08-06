"use client"
import Image from 'next/image'

import trashCan from '../../public/trash_can.svg'
import write from '../../public/write.svg'

type DisplayTodoItem = {
    id: number
    label: string
    overview: string | null
    addedAt: Date
    completed: boolean
}


export default function TodoItem(todoItem: DisplayTodoItem) {
    return (
        <form className="bg-red-100 w-5/6 p-1 mx-auto flex mb-2">
            <input type="checkbox" checked={todoItem.completed} />
            <div className="mx-5 flex">
                <div>
                    <p className="text-xl">{todoItem.label}</p>
                    <p className="text-xs">{todoItem.addedAt.toDateString()}</p>
                </div>
                <div className='w-[15px] h-[50px] flex'>
                    <Image src={trashCan} alt='Trash can' className='mr-2'/>
                    <Image src={write} alt='Writing Image'/>
                </div>
            </div>
        </form>
    );
}