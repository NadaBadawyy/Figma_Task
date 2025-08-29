
import { useLeadStore } from "@/store/useLeadStore"
import { Bell, Circle, Search } from "lucide-react"
import { useState } from "react"

function SearchSection() {
      const {  searchQuery } = useLeadStore()
    const [isclicked, setisclicked] = useState<Boolean>(false)
  return (
    <section>
        <div className=" absolute top-0 right-5 flex items-center gap-x-7">
            {isclicked&&<input
                    type="text"
                    placeholder="Search leads..."
                    className="border border-[#5C5C5C] py-1 px-2  rounded-xl "
                    value={searchQuery}
                    onChange={(e) => useLeadStore.getState().setSearchQuery(e.target.value)}
                  />}
             
          <Search className="text-[#5C5C5C] size-5 cursor-pointer" onClick={()=>setisclicked(!isclicked)}/>
            <div className=" relative"><Bell className="text-[#5C5C5C] size-5 "/>
            <Circle className="size-2 text-white fill-[#FB3748] top-0 right-0.5 absolute"/>
            </div>
          
          
        </div>
      
    </section>
  )
}

export default SearchSection
