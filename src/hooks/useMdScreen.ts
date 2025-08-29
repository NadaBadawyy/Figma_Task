import { useMdScreenStore } from "@/store/useMdScreenStore"
import { useEffect } from "react"


export function useScreenListener() {
  const setIsMdScreen = useMdScreenStore((state) => state.setIsMdScreen)

  useEffect(() => {
    const checkScreen = () => {
      setIsMdScreen(window.innerWidth >= 992) 
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [setIsMdScreen])
}
