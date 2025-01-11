import Authorisation from "@/Authorisation"

function WelcomePage() {
    return (
        <section className="welcome-page--container grid">
            <div className="welcome-page--text">
                <p className="welcome-page--logged-out-text">You are currently logged out of Spotify</p>
                <p><span className="welcome-page--login-link"><Authorisation /></span><br />to connect Codeify to your Spotify account.</p>
            </div>
        </section>
    )
}

export default WelcomePage