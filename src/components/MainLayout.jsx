import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer"
import { useLayoutEffect } from "react";
import { useAbout, useEvents, useReleases, useRecent } from "../services/api";

export async function loader() {
    const [about, events, releases, recent] = await Promise.all([
        useAbout(),
        useEvents(),
        useReleases(),
        useRecent()
    ])
    return {
        about: about,
        events: events.sort((a, b) => b.id - a.id),
        releases: releases.sort((a, b) => b.id - a.id),
        recent: recent
    }
} 

export default function MainLayout() {
    const location = useLocation();
    const data = useLoaderData();
    
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);    

    return (
        <>
            <Navbar />
            <Outlet context={data}/>
            <Footer />
        </>
    )
}