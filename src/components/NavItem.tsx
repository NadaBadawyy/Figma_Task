import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface NavItemProps {
  label: string
  icon: LucideIcon
  to?:string
  active?: boolean
}

export function NavItem({ label, icon: Icon, to='/',  active = false }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 p-2 rounded-md text-sm 
      ${active ? "bg-[rgba(104,40,238,0.1)] " : "text-[#363636] hover:bg-gray-100"}`}
    >
      <Icon className={`size-5 ${active&&'text-[#6828EE] '} `}/>
      <span className={`rounded-xs ${active&&'bg-white w-full text-[#6828EE]'}`}>{label}</span>
    </Link>
  )
}
