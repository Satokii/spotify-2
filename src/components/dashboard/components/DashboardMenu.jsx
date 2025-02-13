import Image from "next/image";
import { useRouter } from "next/navigation";
import Logout from "@/Logout";
import sleep from "@/shared-functions/sleep";
import scrollFade from "../functions/scrollFade";

import BackArrow from "../../../../public/assets/svgs/main-app/back-arrow.svg";
import ForwardArrow from "../../../../public/assets/svgs/main-app/forward-arrow.svg";
import ProfileIcon from "../../../../public/assets/svgs/main-app/profile-icon.svg";
import LogOutBtn from "../../../../public/assets/svgs/main-app/log-out.svg";
import NotificationBell from "../../../../public/assets/svgs/main-app/noti-bell.svg";

import "../styles/dashboard-menu.css";

function DashboardMenu({ setToken }) {
  const router = useRouter();
  sleep(0).then(() => scrollFade());

  return (
    <div className="main-page--menu-backing">
      <section className="main-page--menu grid">
        <div className="main-page--nav-container grid">
          <div onClick={() => router.back()}>
            <Image
              className="main-page--nav-back-arrow"
              src={BackArrow}
              alt="back arrow"
            />
          </div>
          <div onClick={() => router.forward()}>
            <Image
              className="main-page--nav-forward-arrow"
              src={ForwardArrow}
              alt="forward arrow"
            />
          </div>
        </div>
        <div className="main-page--icons-container grid">
          <div>
            <Image src={NotificationBell} alt="notification bell" />
          </div>
          <div>
            <Image
              className="main-page--profile"
              src={ProfileIcon}
              alt="profile icon"
            />
          </div>
          <div onClick={() => Logout(setToken)}>
            <Image
              className="main-page--log-out"
              src={LogOutBtn}
              alt="log out button"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardMenu;
