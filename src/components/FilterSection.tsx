import { Button } from "./ui/button"
import {  ListFilter, MoveUpRight } from "lucide-react";
import { useState } from "react";
function FilterSection() {
     const [LeadActive, setLeadActive] = useState<boolean>(true);
  const [LeadQualityActive, setLeadQualityActive] = useState<boolean>(false);
  const [LeaderActive, setLeaderActive] = useState<boolean>(false);
  return (
    <section className="my-5 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-y-0 flex-wrap gap-y-2 justify-center items-center">
        <div className="bg-[#F7F7F7]  p-1 flex items-center gap-x-1">
          <span
            className={`${
              LeadActive
                ? "bg-white rounded-lg text-[#171717]"
                : "text-[#A3A3A3]"
            } hover:text-[#171717] px-6 text-xs md:text-sm py-1 `}
            onClick={() => setLeadActive(!LeadActive)}
          >
            Leads
          </span>
          <span
            className={`${
              LeadQualityActive
                ? "bg-white rounded-lg text-[#171717]"
                : "text-[#A3A3A3]"
            } hover:text-[#171717] px-6 text-xs md:text-sm py-1 `}
            onClick={() => setLeadQualityActive(!LeadQualityActive)}
          >
            Lead Quality Score
          </span>
          <span
            className={`${
              LeaderActive
                ? "bg-white rounded-lg text-[#171717]"
                : "text-[#A3A3A3]"
            } hover:text-[#171717] px-6 text-xs md:text-sm py-1 `}
            onClick={() => setLeaderActive(!LeaderActive)}
          >
            Leaderboard
          </span>
        </div>
        <div className="flex gap-x-2 items-center">
          <Button className="shadow-md text-[#5C5C5C] hover:text-black hover:bg-[#F7F7F7]">
            <ListFilter /> Filter
          </Button>
          <Button className="shadow-md text-[#5C5C5C]">
            {" "}
            Export <MoveUpRight />
          </Button>


         
        </div>
      </div>
      
    </section>
  )
}

export default FilterSection
