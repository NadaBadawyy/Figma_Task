import { ChevronRight, X } from "lucide-react"
import { Progress } from "./ui/progress"
import { Avatar, AvatarImage } from "./ui/avatar"
import onboard1 from '@/assets/onboard1.png'
import onboard2 from '@/assets/onboard2.png'
import onboard3 from '@/assets/onboard3.png'
import { AvatarFallback } from "@radix-ui/react-avatar"
function OnboardTeams() {
  return (
    <div className="my-5 border border-[#DFDFDF] p-4 rounded-xl relative">
        <div className="flex items-center   gap-x-2 px-2 w-fit rounded-full border border-[#DFDFDF] my-2 ">
<div className=" flex items-center py-0.5 -space-x-2">
            <Avatar className="size-7">
                <AvatarImage  src={onboard1} className="bg-gray-300" />
                <AvatarFallback>1</AvatarFallback>
            </Avatar>
            <Avatar className="size-7">
                <AvatarImage  src={onboard2} className="bg-[#FFECC0]" />
                <AvatarFallback>2</AvatarFallback>
            </Avatar>
            <Avatar className="size-7">
                <AvatarImage  src={onboard3} className="bg-[#C0D5FF]" />
                <AvatarFallback>3</AvatarFallback>
            </Avatar>

        </div>
        <span className="text-[#363636] text-xs ">+4</span>
        </div>
        <p className="mb-1  text-[#363636]">Onboard your team members</p>
        
      <div className="bg-[#EBEBEB] rounded-sm w-full text-[#363636] ">
        <Progress value={40} className="  [&>div]:bg-[#1FC16B] "/>
      </div>
      <p className="font-light text-xs mt-1">Upload your team via CSV</p>
      <div className=" flex items-center  gap-2 mt-3">
        <p className=" underline ">Onboard your team </p> 
        <ChevronRight className="size-5 mt-0.5"/>
      </div>
      
      <X className="size-4 absolute top-4 right-4"/>
    </div>
  )
}

export default OnboardTeams
