import { Circle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import profile from "@/assets/image.png";

function ProfileDashboard() {
  return (
    <section>
          <div className="flex items-center gap-x-2">
        <div className="relative  ">
          <Avatar className="size-10 ">
          <AvatarImage src={profile} className="bg-gray-300" />
          <AvatarFallback>profile</AvatarFallback>
        </Avatar>
          <Circle className=" absolute bottom-0  text-white right-0 fill-[#1FC16B]  size-3" />

        </div>
        

        <div className="">
          <span className=" ">Sophia Williams</span>

          <p className=" text-[#676767] text-xs">Welcome back to Synergy 👋🏻</p>
        </div>
      </div>
      
    </section>
  )
}

export default ProfileDashboard
