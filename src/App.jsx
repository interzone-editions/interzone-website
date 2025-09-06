import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom"

import MainLayout from "./components/MainLayout"
import Home from "./pages/Home"
import ReleaseDetails from "./pages/ReleaseDetails"
import EventDetails from "./pages/EventDetails"
import Grid from "./pages/Grid"

import NotFound from "./pages/NotFound"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>

      <Route index element={<Home />} />
      <Route path="releases" element={<Grid/>} />
      <Route path="releases/:id" element={<ReleaseDetails />} />
      
      <Route path="events" element={<Grid/>} />  
      <Route path="events/:id" element={<EventDetails />} />
      
      {/* <Route path="radio" element={<Grid/>}/>   */}
      {/* <Route path="radio/:id" element={<h1>Radio shows here</h1>} /> */}
          
      <Route path="*" element={<NotFound />} />
    </Route>  
  ))
  
  return <RouterProvider router={router} />
}

export default App
