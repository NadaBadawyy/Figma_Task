'use client'
import { mockLeads } from "@/data/leads"
import { useLeadStore } from "@/store/useLeadStore"
import { useEffect } from "react"
import { DataTable } from "./DataTable"
import { columns } from "./columns"

function LeadsTable() {
    const { leads, setLeads, searchQuery } = useLeadStore()

  useEffect(() => {
    setLeads(mockLeads)
  }, [setLeads])

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <>
          

      <DataTable columns={columns} data={filteredLeads} />

    </>
  )
}

export default LeadsTable
