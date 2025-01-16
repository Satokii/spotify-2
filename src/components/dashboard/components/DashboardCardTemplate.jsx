import Image from "next/image";
import PlayGreen from "../../../../public/assets/svgs/main-app/main-play-btn.svg";

// import fixLenthPlistDesc from "@/shared-functions/fixLengthPlistDesc";

function DashboardCardTemplate({ title, details }) {
  return (
    <div className="dashboard--playlist-container grid">
      <div className="dashboard--playlist-header-container grid">
        <div className="dashboard--playlist-header">{title}</div>
        <div className="dashboard--playlist-show-all">Show all</div>
      </div>
      <div className="dashboard-playlist-list grid">
        {details.map((playlist) => (
          <div
            className="dashboard-playlist-list--item-container grid"
            key={playlist.id}
          >
            <div className="dashboard-playlist-list--img-container">
              {playlist.img ? (
                <div className="dashboard-playlist-list--img">
                  <img src={playlist.img} alt={playlist.name} />
                  <Image
                    className="dashboard-playlist-list--play"
                    src={PlayGreen}
                    alt="play button"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="dashboard-playlist-list--name">{playlist.name}</div>
            <div className="dashboard-playlist-list--description">
              {/* {fixLenthPlistDesc(playlist.description)} */}
              {playlist.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCardTemplate;
