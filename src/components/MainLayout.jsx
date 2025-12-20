import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import { useLayoutEffect } from "react";
import releases from "/src/assets/release-database.json"
import events from "/src/assets/event-database.json"
import about from "/src/assets/about.json"
import recent from "/src/assets/recent-activities.json"

export default function MainLayout() {
    const location = useLocation();
    
    const context = {
        recent: recent, 
        releases: releases.reverse(), 
        events: events.reverse(), 
        about: about
    }
    
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);    

    return (
        <>
            <Navbar />
            <Outlet context={context}/>
            {/* <Footer /> */}
        </>
    )
}

export function useEvent(id) {
    const event = events.find(event => event.id === id)
    if (!event) {
        throw {
            message: "no such event"        
        }
    }
    else {
      return event  
    } 
}

export function useRelease(id) {
    const release = releases.find(release => release.id === id)
    if (!release) {
        throw {
            message: "no such release"
        }
    }
    else {
      return release  
    } 

}