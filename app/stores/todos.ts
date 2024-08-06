import {create} from 'zustand'

type StateType = {
    items : Array<any>
    update: (item: any) => void;
    remove: (item: any) => void;
}


export  const useTodoItemsStore = create<StateType>((set)=>({
    items: [],
    update:(Items)=> set((state: StateType)=>({items:Items})),
    remove:()=> set((state: StateType)=>({}))
}))