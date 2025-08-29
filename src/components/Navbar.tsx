import LogoHeader from "./LogoHeader";
import OnboardTeams from "./OnboardTeams";
import ProfileHeader from "./ProfileHeader";
import SidebarGroups from "./SidebarGroups";
function Navbar() {
  return (
 <header
  className="absolute md:relative w-[272px] h-screen border-r border-[#DFDFDF] bg-white"
>
  <div className="p-2 overflow-y-auto h-full">
    <LogoHeader />
    <SidebarGroups />
    <OnboardTeams />
    <ProfileHeader />
  </div>
</header>

  );
}

export default Navbar;
