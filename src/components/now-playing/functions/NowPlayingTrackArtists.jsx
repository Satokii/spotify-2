// import { Link } from "react-router-dom"
import Link from "next/link"
import scrollToTop from "@/shared-functions/scrollToTop"

const NowPlayingTrackArtists = (artists) => {
    const numArtists = artists.length
    if (numArtists === 1) return <Link id={artists[0].id} className="now-playing--artist-name" href={`/artist/${artists[0].id}`} onClick={scrollToTop}>{artists[0].name}</Link>
    else {
        const separated = artists.map((artist, index) => {
            if (index === numArtists - 1) return <Link id={artist.id} className="now-playing--artist-name" href={`/artist/${artist.id}`} onClick={scrollToTop}>{artist.name}</Link>
            else return <Link id={artist.id} className="now-playing--artist-name" href={`/artist/${artist.id}`} onClick={scrollToTop}>{`${artist.name}, `}</Link>
        })
        return separated
    } 
}

export default NowPlayingTrackArtists