import DashboardMenu from "./components/DashboardMenu"

function Dashboard() {
    return (
        <div className="dashboard-outer-container grid">
            <div className="scrollbar-dashboard">
                <main className="dashboard grid">
                 <DashboardMenu />
                </main>
            </div>
        </div>
    )
}

export default Dashboard