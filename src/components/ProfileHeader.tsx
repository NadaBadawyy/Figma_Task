import profile from '@/assets/onboard2.png'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { BadgeCheck } from 'lucide-react'

function ProfileHeader() {
  return (
    <div className="border-t p-4 border-t-[#DFDFDF] flex items-center gap-x-2">
         <Avatar className="size-12">
                <AvatarImage  src={profile} className="bg-[#FFECC0]" />
                <AvatarFallback>2</AvatarFallback>
            </Avatar>
            <div className="">
               <p className='flex items-center gap-x-1.5'>
                <span className=' '>Sophia Williams</span>
                <BadgeCheck className='size-5 text-white fill-[#47C2FF]' fill=''/>
            </p>
            <p className=' text-[#676767] text-xs'>sophia@alignui.com</p> 
            </div>
            
      
    </div>
  )
}

export default ProfileHeader
