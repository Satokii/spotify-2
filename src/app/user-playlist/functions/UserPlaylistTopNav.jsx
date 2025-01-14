import MainNav from "@/components/main-nav";

function UserPlaylistTopNav({ setToken }) {
  return (
    <div className="user-playlist--menu-backing">
      <section className="user-playlist--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}
export default UserPlaylistTopNav;
