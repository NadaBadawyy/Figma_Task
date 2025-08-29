import FilterSection from "@/components/FilterSection";
import LeadsTable from "@/components/LeadsTable";
import ProfileDashboard from "@/components/ProfileDashboard";
import SearchSection from "@/components/SearchSection";
import { useMdScreenStore } from "@/store/useMdScreenStore";

function LeadDashboard() {
    const isMdScreen= useMdScreenStore((state)=>state.isMdSreen)
  
 
  return (
    <main className={`min-h-screen p-3 max-w-screen   ${!isMdScreen&&'mt-14'} `}>
      <ProfileDashboard/>
      <div className="relative py-5 ">
        <FilterSection/>
        <SearchSection/>
      
    <LeadsTable />

      </div>
      
      
    </main>
  );
}

export default LeadDashboard;
