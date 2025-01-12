function DashboardBanner() {
  return (
    <section className="dashboard--banner grid">
      <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
      <Queue token={token} queue={queue} setQueue={setQueue} />
    </section>
  );
}

export default DashboardBanner;
