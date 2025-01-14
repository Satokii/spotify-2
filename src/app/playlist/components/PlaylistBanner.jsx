import convertMsToTime from "../../../shared-functions/convertMsToTime";
import playlistTimeinMs from "../functions/playlistTimeInMs";

function PlaylistBanner({ playlistInfo, playlistTracks }) {
  const filteredTracks = playlistTracks.filter((track) => track.track !== null);

  return (
    <div
      className="playlist-page--banner grid"
      style={{
        backgroundImage: `url(${playlistInfo.img})`,
        backgroundPosition: "50% 30%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80%",
      }}
    >
      <div className="playlist-page--banner-filter grid">
        {playlistInfo.isPublic ? (
          <div className="playlist-page--playlist-type">{`Public ${playlistInfo.type}`}</div>
        ) : (
          <div className="playlist-page--playlist-type">
            {playlistInfo.type}
          </div>
        )}
        <div className="playlist-page--playlist-name">{playlistInfo.name}</div>
        <div className="playlist-page--playlist-description">
          {playlistInfo.description}
        </div>
        <div className="playlist-page--playlist-overview-container grid">
          <p className="playlist-page--playlist-owner">{playlistInfo.owner}</p>
          <span className="middot">&middot;</span>
          <p className="playlist-page--playlist-likes">{`${playlistInfo.followers} followers`}</p>
          <span className="middot">&middot;</span>
          <p className="playlist-overview-total-tracks">
            <span className="playlist-overview-song-num">{`${playlistInfo.totalTracks} songs`}</span>
            {`, ${convertMsToTime(playlistTimeinMs(filteredTracks))}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistBanner;
