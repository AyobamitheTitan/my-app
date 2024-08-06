import {create} from 'zustand'

type StateType = {
    blur: string;
    update: () => void;
    reset:() => void;
}

const useStore = create<StateType>((set)=>({
    blur: "blur-none",
    update: ()=> set((state: StateType) => ({blur:"fixed inset-0 bg-black/50"})),
    reset:()=> set((state: StateType) => ({blur:"blur-none"}))
}))

export default useStore