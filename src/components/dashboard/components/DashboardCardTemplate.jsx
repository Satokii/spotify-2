import Link from "next/link";
import Image from "next/image";
import scrollToTop from "@/shared-functions/scrollToTop";
import PlayGreen from "../../../../public/assets/svgs/main-app/main-play-btn.svg";

// import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";
// import DashboardCardTemplate from "./DashboardCardTemplate";

function DashboardCardTemplate({ title, details }) {
  return (
    // <DashboardCardTemplate title={title} itemArr={playlist} />
    <div className="dashboard--playlist-container grid">
      <div className="dashboard--playlist-header-container grid">
        <div className="dashboard--playlist-header">{title}</div>
        <div className="dashboard--playlist-show-all">Show all</div>
      </div>
      <div className="dashboard-playlist-list grid">
        {details.map((playlist) => (
          <Link
            className="dashboard-playlist-list--item-container grid"
            key={playlist.id}
            href={`/playlist/${playlist.id}`}
            onClick={scrollToTop}
          >
            <div className="dashboard-playlist-list--img-container">
              {playlist.images ? (
                <div className="dashboard-playlist-list--img">
                  <img src={playlist.images[0].url} alt={playlist.name} />
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
              {playlist.description}
              {/* {fixLenthPlistDesc(playlist.description)} */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardCardTemplate;
