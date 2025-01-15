import Image from "next/image";
import VerifiedIcon from "../../../assets/svgs/main-app/verified-icon.svg";

// import "../styles/artist-banner.css";

function ArtistBanner({ artistInfo }) {
  return (
    <div
      className="artist-page--banner-container grid"
      style={{
        backgroundImage: `url(${artistInfo.img})`,
        backgroundPosition: "50% 45%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "75%",
      }}
    >
      <div className="artist-page--banner-filter grid">
        <div className="artist-banner--verified-container grid">
          <Image
            className="artist-banner--verified-img"
            src={VerifiedIcon}
            alt="verified icon"
          />
          <p className="artist-banner--verified-text">Verified Artist</p>
        </div>
        <div className="artist-banner--artist-name grid ">
          {artistInfo.name}
        </div>
        <div className="artist-banner--artist-followers">{`${artistInfo.followers} followers`}</div>
      </div>
    </div>
  );
}

export default ArtistBanner;
