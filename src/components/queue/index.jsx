import { useEffect } from "react";
import { Link } from "react-router-dom";
import fixLengthQueue from "@/shared-functions/fixLengthQueue";
import getQueue from "./functions/getQueue";
import scrollToTop from "../../shared-functions/scrollToTop";

import "./styles/queue.css";

function Queue({ token, queue, setQueue }) {
  useEffect(() => {
    getQueue(token, setQueue);
  }, [setQueue, token]);

  return (
    <div className="main-playback--queue-container grid">
      <h3 className="main-playback--queue-header">Next in queue...</h3>
      <div className="scrollbar--dashboard-queue grid">
        <div className="main-playback--queue-list grid">
          {queue.map((track, index) => (
            <Link
              className="main-playback--queue-item grid"
              key={`${track.id}-${index}`}
              to={`/album/${track.album.id}/${track.artists[0].id}`}
              onClick={scrollToTop}
            >
              {track.album.images.length ? (
                <img
                  src={track.album.images[0].url}
                  alt={`${track.name}-image`}
                />
              ) : (
                <div>No Image</div>
              )}
              <p className="main-playback--queue-track">
                {fixLengthQueue(track.name)}
              </p>
              <Link
                className="main-playback--queue-artist"
                to={`/artist/${track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixLengthQueue(track.artists[0].name)}
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue;
