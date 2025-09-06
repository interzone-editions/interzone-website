import { createContext, useContext } from "react"
import releases from "/src/assets/release-database.json"
import events from "/src/assets/event-database.json"

export const ReleasesContext = createContext(releases.reverse())

export const EventsContext = createContext(events.reverse())

export function getLastRoute(location) {
    const currentPath = location.pathname
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment
}

export function getContext(location) {
    const route = getLastRoute(location)
    
    switch (route) {
        case "releases":
            return useContext(ReleasesContext)
        case "events":
            return useContext(EventsContext)
        default:
            return undefined
    }
}
