import DashboardMenu from "./components/DashboardMenu"
import DashboardBanner from "./components/DashboardBanner"

function Dashboard({ setToken }) {
    return (
        <div className="dashboard-outer-container grid">
            <div className="scrollbar-dashboard">
                <main className="dashboard grid">
                 <DashboardMenu setToken={setToken} />
                 <DashboardBanner token={token} queue={queue} setQueue={setQueue} currentTrack={currentTrack} notPlaying={notPlaying} />
                </main>
            </div>
        </div>
    )
}

export default Dashboard