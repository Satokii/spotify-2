// "use client";

// import { useEffect, useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import axios from "axios";
// import WelcomePage from "./pages/welcome-page";
// import Dashboard from "./pages/dashboard";
// import Navigation from "@/components/navigation";
// import Search from "./pages/search";
// import Sidebar from "@/components/sidebar";
// import Footer from "@/components/footer";
// import Album from "./pages/album";

// import CURRENT_TRACK_INITIAL_STATE from "@/initial-states/CURRENT-TRACK-INITIAL-STATE";

// import "./root.css";
// import "./keyframes/fade-in.css";
// import "../shared-styles/scrollbars.css";

// export default function Home() {
//   const [token, setToken] = useState("");

//   //  QUEUE
//   const [queue, setQueue] = useState([]);

//   useEffect(() => {
//     const hash = window.location.hash;
//     let token = window.localStorage.getItem("token");
//     if (!token && hash) {
//       token = hash
//         .substring(1)
//         .split("&")
//         .find((elem) => elem.startsWith("access_token"))
//         .split("=")[1];
//       window.location.hash = "";
//       window.localStorage.setItem("token", token);
//     }
//     setToken(token);
//   }, []);

//   // FETCH CURRENTLY PLAYING TRACK
//   const [currentTrack, setCurrentTrack] = useState(CURRENT_TRACK_INITIAL_STATE);
//   const [currentTrackArtists, setCurrentTrackArtists] = useState([]);
//   const [notPlaying, setNotPlaying] = useState(null);

//   useEffect(() => {
//     const getCurrentTrack = async () => {
//       const { data } = await axios.get(
//         "https://api.spotify.com/v1/me/player/currently-playing",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!data) setNotPlaying(true);
//       else {
//         const { item } = data;
//         // console.log(data)
//         setCurrentTrackArtists(item.artists);
//         setCurrentTrack({
//           trackId: item.id,
//           albumId: item.album.id,
//           artistId: item.artists[0].id,
//           trackImageLength: item.album.images.length,
//           trackImage: item.album.images[0].url,
//           trackName: item.name,
//           trackArtist: item.artists[0].name,
//           trackIsPlaying: data.is_playing,
//           trackProgress: data.progress_ms,
//           trackDuration: item.duration_ms,
//         });
//       }
//     };
//     // setInterval(() => {
//     getCurrentTrack();
//     // }, 1000);
//   }, [token]);

//   return (
//     <BrowserRouter>
//       <div className="container grid">
//         {token ? <Navigation token={token} /> : null}
//         <Routes>
//           <Route path="/spotify-login" element={<WelcomePage />}></Route>
//           <Route
//             path="/"
//             element={
//               token ? (
//                 <Dashboard
//                   token={token}
//                   queue={queue}
//                   setQueue={setQueue}
//                   setToken={setToken}
//                   currentTrack={currentTrack}
//                   notPlaying={notPlaying}
//                 />
//               ) : (
//                 <WelcomePage />
//               )
//             }
//           ></Route>
//           <Route
//             path="/search"
//             element={
//               token ? (
//                 <Search token={token} setToken={setToken} />
//               ) : (
//                 <WelcomePage />
//               )
//             }
//           ></Route>
//           <Route
//             path="/album/:albumId/:artistId"
//             element={
//               token ? (
//                 <Album token={token} setToken={setToken} />
//               ) : (
//                 <WelcomePage />
//               )
//             }
//           ></Route>
//           <Route
//             path="/liked-songs"
//             element={
//               token ? (
//                 // <LikedSongs token={token} setToken={setToken} />
//                 <div>Liked Songs</div>
//               ) : (
//                 // <LoginPage />
//                 <WelcomePage />
//               )
//             }
//           ></Route>
//         </Routes>
//         {token ? (
//           <Sidebar
//             token={token}
//             currentTrack={currentTrack}
//             currentTrackArtists={currentTrackArtists}
//           />
//         ) : null}
//         {token ? (
//           <Footer
//             token={token}
//             currentTrack={currentTrack}
//             currentTrackArtists={currentTrackArtists}
//             setCurrentTrack={setCurrentTrack}
//             setQueue={setQueue}
//           />
//         ) : null}
//       </div>
//     </BrowserRouter>
//   );
// }

"use client";

// import WelcomePage from "@/components/welcome-page";
// import Dashboard from "@/components/dashboard";
import { useClient } from "@/components/ClientContext";
import WelcomePage from "./pages/welcome-page";
import Dashboard from "./pages/dashboard";

export default function Page() {
  const {
    token,
    setToken,
    queue,
    setQueue,
    currentTrack,
    notPlaying,
  } = useClient();

  return token ? (
    <Dashboard
      token={token}
      queue={queue}
      setQueue={setQueue}
      setToken={setToken}
      currentTrack={currentTrack}
      notPlaying={notPlaying}
    />
  ) : (
    <WelcomePage />
  );
}
