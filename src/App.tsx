
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import LeadDashboard from './pages/LeadDashboard'
import { useScreenListener } from './hooks/useMdScreen'

function App() {
const routes=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {path:"",element:<LeadDashboard/>}
  ]}
])
useScreenListener()
  return (
    <RouterProvider router={routes}>
      
    </RouterProvider>
  )
}

export default App
