import DashboardCardTemplate from "./DashboardCardTemplate";
import { playlistFeatured } from "../playlistFeatured";

function DashboardTopFeaturedPlaylists() {
  return (
    <DashboardCardTemplate
      title="Featured Playlists Where You Are"
      details={playlistFeatured}
    />
  );
}

export default DashboardTopFeaturedPlaylists;
