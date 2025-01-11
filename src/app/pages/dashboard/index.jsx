import DashboardMenu from "./components/DashboardMenu"

function Dashboard({ setToken }) {
    return (
        <div className="dashboard-outer-container grid">
            <div className="scrollbar-dashboard">
                <main className="dashboard grid">
                 <DashboardMenu setToken={setToken} />
                </main>
            </div>
        </div>
    )
}

export default Dashboard