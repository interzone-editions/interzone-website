import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom"
import { useState, useEffect } from "react"

import MainLayout from "./components/MainLayout"
import Loading from "./components/Loading"
import Home from "./pages/Home"
import Releases from "./pages/Releases"
import SingleRelease from "./pages/SingleRelease"
import Events from "./pages/Events"
import SingleEvent from "./pages/SingleEvent"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Radios from "./pages/Radios"
import SingleRadio from "./pages/SingleRadio"
import { useImagesLoaded } from "./hooks/useImagesLoaded"

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const imagesLoaded = useImagesLoaded(3000)

  useEffect(() => {
    if (imagesLoaded) {
      setIsInitialLoad(false)
    }
  }, [imagesLoaded])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} 
        errorElement={<NotFound />}
      />  
      <Route path="about" element={<About/>} 
        errorElement={<NotFound />}
      />    
      <Route path="releases" element={<Releases />} 
        errorElement={<NotFound />}
      />
      <Route path="releases/:id" element={<SingleRelease />} 
        errorElement={<NotFound />}
      />
      <Route path="events" element={<Events/>} 
        errorElement={<NotFound />}
      />    
      <Route path="events/:id" element={<SingleEvent />} 
        errorElement={<NotFound />}
      />  
      
      {/* TODO: Implement radios and radio pages */}
      <Route path="radios" 
        element={<Radios/>} 
        errorElement={<NotFound />}
      />  
      <Route path="radios/:id" element={<SingleRadio />} /> 
      
      <Route path="*" element={<NotFound />} />
    </Route>  
  ))
  
  // return (
  //   <>
  //     {isInitialLoad && <Loading />}
  //     <RouterProvider router={router} />
  //   </>
  // )
  return <RouterProvider router={router} />
}

export default App
