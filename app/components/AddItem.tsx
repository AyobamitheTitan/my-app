"use client"
import { useState } from "react";
import storeItem from "../actions/storeItem";
import useStore from "../stores/background";

export default function AddItem() {
    const [item, setItem] = useState<string>("")
    const [display, setDisplay] = useState<string>("hidden")
    const activateBlur = useStore((state)=> state.update)

    function displayModal(){
        activateBlur()
        setDisplay("block")
    }

    return (
        <>
            <button className="bg-rose-500 w-1/6 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={displayModal}>
                Add Todo Item
            </button>
            <div className={`bg-white rounded-lg w-3/6 p-6 pt-0 ${display} text-center align-center mx-auto flex flex-col`}>
            <form className="flex flex-col" action={storeItem}>
                <h3 className="text-xl font-normal mt-5 mb-6">New Todo Item</h3>
                <input
                    type="text"
                    name="item"
                    placeholder="I would like to..."
                    value={item}
                    className="text-center"
                    onChange={(e) => setItem(e.target.value)} />
                <button className="bg-red-400 w-3/6 mx-auto px-4 py-1" type="submit">Add</button>
            </form>
            </div>
        </>
    );
}