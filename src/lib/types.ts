
export type Lead = {
  id: number
  name: string
  email: string
  tags: string[]
  connectedWith: { name: string; email: string }
  date: string
  export:string[] |null
  
}