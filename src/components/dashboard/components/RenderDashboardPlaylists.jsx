"use client"

import { useEffect, useState } from "react";
// import DashboardCardTemplate from "./DashboardCardTemplate";
// import getDashboardPlaylists from "../functions/getDashboardPlaylists";

function RenderDashboardPlaylists({ token, category, title }) {
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        const getPopPlaylists = async () => {
            const data = await getDashboardPlaylists(token, category)
            setPlaylist(data.playlists.items)
        };
        getPopPlaylists()
    }, [category, token])
    
    return (
        <DashboardCardTemplate title={title} itemArr={playlist} />
    )
}

export default RenderDashboardPlaylists