import {   CreditCard, HomeIcon, IdCardIcon,  ListCheck,  LucideGroup,  Settings, SlidersHorizontal, TableOfContents, Tag,Users,WandSparkles} from "lucide-react";

import { NavItem } from "./NavItem";
function SidebarGroups() {
  return (
    <>
           <div className="my-5">
       <NavItem label="Home" icon={HomeIcon} active/> 
     </div>
     <p className="text-[#ADADAD] text-xs uppercase my-3">Team Managment</p>
    <NavItem label="Members" icon={Users}/>
    <NavItem label="Departments" icon={LucideGroup}/>
    <NavItem label="Bulk Adjustments" icon={ListCheck}/>
     <p className="text-[#ADADAD] text-xs uppercase my-3">Leads Managment</p>
    <NavItem label="Leads" icon={IdCardIcon}/>
    <NavItem label="Tags" icon={Tag}/>

     <p className="text-[#ADADAD] text-xs uppercase my-3">Brands & products</p>
    <NavItem label="Customization" icon={WandSparkles}/>
    <NavItem label="Products" icon={CreditCard}/>
     <p className="text-[#ADADAD] text-xs uppercase my-3">Configuaration</p>
    <NavItem label="Customization" icon={SlidersHorizontal}/>
    <NavItem label="Products" icon={Settings}/>
     <p className="text-[#ADADAD] text-xs uppercase my-3">support</p>
    <NavItem label="FAQs" icon={TableOfContents}/>
    </>
  )
}

export default SidebarGroups
