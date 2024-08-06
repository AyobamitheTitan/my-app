"use client"

import Todos from './Todos'
import AddItem from './AddItem'

import useStore from '../stores/background'

export default function Body(){
    
    const blur = useStore((state)=> state.blur)
    return (
        <>
        <div className={`flex flex-col ${blur}`}>
            Todo List
            <AddItem />
            <Todos/>
        </div>
        
        </>
    )
}