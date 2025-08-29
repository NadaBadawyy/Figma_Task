import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Toggle } from "./ui/toggle"
import { ChartNoAxesGantt } from "lucide-react"
import { useMdScreenStore } from "@/store/useMdScreenStore"
import { useState } from "react"

function Layout() {
  const isMdScreen= useMdScreenStore((state)=>state.isMdSreen);
  const [toggleClicked, settoggleClicked] = useState<boolean>(false)
  return (
     <div className="font-inter flex gap-x-1 relative">
      {isMdScreen ? (
        <div className="relative z-40">
          <Navbar />
        </div>
      ) : toggleClicked ? (
        <div
          className="bg-[#80808082] fixed z-40 inset-0"
          onClick={() => settoggleClicked(false)}
        >
          <Navbar />
        </div>
      ) : (
        <Toggle
          onClick={() => settoggleClicked(true)}
          className="absolute top-1 left-0 m-2 cursor-pointer z-50"
        >
          <span className="flex justify-center rounded-full items-center border border-[#7D52F4] text-[#7D52F4]">
            <ChartNoAxesGantt className="size-10" />
          </span>
        </Toggle>
      )}

      {/* Main Content */}
      <div className="flex-1 relative">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
