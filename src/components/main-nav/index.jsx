import { useNavigate } from "react-router-dom";
import Image from "next/image";
import Logout from "@/Logout";
import BackArrow from "../../assets/svgs/main-app/back-arrow.svg";
import ForwardArrow from "../../assets/svgs/main-app/forward-arrow.svg";
import NotificationBell from "../../assets/svgs/main-app/noti-bell.svg";
import ProfileIcon from "../../assets/svgs/main-app/profile-icon.svg";
import LogOutBtn from "../../assets/svgs/main-app/log-out.svg";

import "./styles/main-nav.css";

function MainNav({ setToken }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-nav--container grid">
        <div onClick={() => navigate(-1)}>
          <Image src={BackArrow} alt="back arrow" />
        </div>
        <div onClick={() => navigate(1)}>
          <Image src={ForwardArrow} alt="forward arrow" />
        </div>
      </div>
      <div className="main-nav--icons-container grid">
        <div>
          <Image
            className="main-nav--notification-bell"
            src={NotificationBell}
            alt="notification bell"
          />
        </div>
        <div>
          <Image
            className="main-nav--profile"
            src={ProfileIcon}
            alt="profile icon"
          />
        </div>
        <div onClick={() => Logout(setToken)}>
          <Image
            className="main-nav--log-out"
            src={LogOutBtn}
            alt="log out button"
          />
        </div>
      </div>
    </>
  );
}

export default MainNav;
