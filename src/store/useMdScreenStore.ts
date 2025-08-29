import create from "zustand"

interface screenState{
isMdSreen:boolean,
setIsMdScreen:(val:boolean)=>void
}
export const useMdScreenStore=create<screenState>((set)=>({
    isMdSreen:window.innerWidth>=992,
    setIsMdScreen:(val)=>set({isMdSreen:val})
}))