import logo from "@/assets/Vector.png";
import { ChevronsUpDown } from "lucide-react";

function LogoHeader() {
  return (
    <>
       <div className=" py-3 flex items-center gap-x-2">
        <div className="bg-[#7D52F4] w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <img src={logo} alt="logo" />
        </div>
        <div className="p-1   rounded-md border-2 border-[#EBEBEB]">
          <ChevronsUpDown className="text-[#676767] size-4" />
        </div>
      </div>
    </>
  )
}

export default LogoHeader
