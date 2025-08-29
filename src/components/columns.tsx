"use client"

import type { Lead } from "@/lib/types"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "./ui/checkbox"
import image from '@/assets/table.png'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ExternalLink } from "lucide-react"




export const columns: ColumnDef<Lead>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Lead</div>,
    cell: ({ row }) => {
      const lead = row.original
      
      const [firstName, lastName] = lead.name.split(" ")
      const initials =
        (firstName?.[0] ?? "").toUpperCase() + (lastName?.[0] ?? "").toUpperCase()
      return (
         <div className="flex items-center gap-x-3">
          <Avatar className="size-8 bg-[#FFC0C5] text-[#681219]">
            <AvatarFallback>{initials || "?"}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{lead.name}</div>
            <div className="text-sm text-[#5C5C5C]">{lead.email}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "tags",
    header: () => <div className="text-left">Tags</div>,
    cell: ({ row }) => {
      const tags = row.original.tags
      if (tags.length === 0) {
        return <span className="bg-[#F5F5F5] text-[#7B7B7B] text-xs p-1 px-2 rounded-full">No tags added</span>
      }
      return (
        <div className="flex gap-2 flex-wrap text-xs">
          {tags.map((tag, i) => (
            <><span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-[#EBF1FF] text-[#335CFF]"
            >
             
              {tag}
            </span>
             <span className="px-2 py-1 rounded-full bg-[#F5F5F5] text-[#7B7B7B] text-xs">+4</span>
            </>
            
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "connectedWith",
    header: () => <div className="text-left">Connected With</div>,
    cell: ({ row }) => {
      const connected = row.original.connectedWith
      return (
        <div className="flex items-center gap-x-2">
          <Avatar className="size-8 ">
          <AvatarImage src={image} className="" />
          <AvatarFallback>profile</AvatarFallback>
        </Avatar>
          <div className=""><span className="font-medium">{connected.name}</span><div className="text-sm text-[#5C5C5C]">
            {connected.email}
          </div></div>
          
        </div>
      )
    },
  },
  {
  accessorKey: "date",
  header: () => <div className="text-left">Date</div>,
  cell: ({ row }) => {
    const dateStr = row.getValue("date") as string
    // Example: "Tuesday Aug 04 - 2025"
    const [day, ...rest] = dateStr.split(" ")
    const restDate = rest.join(" ")

    return (
      <div className="flex flex-col">
        <span className="">{day}</span>
        <span className="text-sm text-[#5C5C5C]">{restDate}</span>
      </div>
    )
  },
},
{
    id: "actions",
    header: () => <div className="text-center">Export</div>,
    cell: ({ row }) => {
      const exportValue = row.original.export

      if (!exportValue) {
        return (
          <div className="">
           <div className="flex items-center gap-x-1 w-fit p-2 rounded-xl  border border-[#EBEBEB] text-xs text-[#5C5C5C]">
            <span className="  hover:underline ">
              Export
            </span>
            <ExternalLink className="size-4"/>
          </div> 
          </div> 
          
        )
      }

      const urls = Array.isArray(exportValue) ? exportValue : [exportValue]

      return (
        <div className="flex justify-center -space-x-2">
          {urls.map((url, idx) => (
            <Avatar key={idx} className="size-8 border border-[#EBEBEB] p-1">
              <AvatarImage src={url} alt="export" />
              <AvatarFallback>EX</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )
    },
  },
]
