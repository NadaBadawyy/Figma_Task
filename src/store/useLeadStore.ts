import type { Lead } from "@/lib/types"
import  create  from "zustand"

interface LeadStore {
  leads: Lead[]
  searchQuery: string
  selectedTag: string | null
  setLeads: (leads: Lead[]) => void
  setSearchQuery: (q: string) => void
  setSelectedTag: (tag: string | null) => void
}
export const useLeadStore=create<LeadStore>((set)=>({
  leads:[],
  searchQuery:'',
  selectedTag:null,
  setLeads:(leads)=>set({leads}),
  setSearchQuery:(q)=>set({searchQuery:q}),
  setSelectedTag:(tag)=>set({selectedTag:tag})
}))


