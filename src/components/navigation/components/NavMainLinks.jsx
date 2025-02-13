"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HomeActive from "../../../../public/assets/svgs/main-app/home-active.svg";
import HomeInactive from "../../../../public/assets/svgs/main-app/home-inactive.svg";
import SearchActive from "../../../../public/assets/svgs/main-app/search-active.svg";
import SearchInactive from "../../../../public/assets/svgs/main-app/search-inactive.svg";
import TopPlayedActive from "../../../../public/assets/svgs/main-app/top-played-active.svg";
import TopPlayedInactive from "../../../../public/assets/svgs/main-app/top-played-inactive.svg";

import "../styles/nav-main-links.css";

function NavMainLinks() {
  const INITIAL_NAV_LINK_STATE = [
    {
      name: "Home",
      className: "navigation--active-nav-link",
      isActive: true,
      navigate: "/",
    },
    {
      name: "Search",
      className: "navigation--inactive-nav-link",
      isActive: false,
      navigate: "/search",
    },
    {
      name: "Top Played",
      className: "navigation--inactive-nav-link",
      isActive: false,
      navigate: "/top-played",
    },
  ];

  const [activeNavImg, setActiveNavImg] = useState("Home");
  const [activeNavLink, setActiveNavLink] = useState(INITIAL_NAV_LINK_STATE);

  // when nav link clicked, update activeNavLink state to highlight
  // active link
  const toggleActiveNav = (e) => {
    const updatedNav = activeNavLink.map((nav) => {
      if (nav.name === e.target.innerText) {
        return {
          ...nav,
          isActive: true,
          className: "navigation--active-nav-link",
        };
      } else {
        return {
          ...nav,
          isActive: false,
          className: "navigation--inactive-nav-link",
        };
      }
    });
    setActiveNavLink(updatedNav);
  };

  // useEffect fires every time activeNavLink updates
  useEffect(() => {
    const activeNav = activeNavLink.find((nav) => nav.isActive === true);
    if (!activeNav) setActiveNavImg("");
    else setActiveNavImg(activeNav.name);
  }, [activeNavLink]);

  // function to check the url pathname to dynamically update nav link
  // styling. when pages other than nav links are clicked, links are
  // inactive with no styling. if user navigateswith forward/back
  // buttons, returning to a direct nav page will apply styling
  const checkPageChange = () => {
    const checkPathname = window.location.pathname;
    if (checkPathname === "/") {
      const updatedNav = activeNavLink.map((nav) => {
        if (nav.name === "Home") {
          return {
            ...nav,
            isActive: true,
            className: "navigation--active-nav-link",
          };
        } else {
          return {
            ...nav,
            isActive: false,
            className: "navigation--inactive-nav-link",
          };
        }
      });
      setActiveNavLink(updatedNav);
    }
    if (checkPathname === "/search") {
      const updatedNav = activeNavLink.map((nav) => {
        if (nav.name === "search") {
          return {
            ...nav,
            isActive: true,
            className: "navigation--active-nav-link",
          };
        } else {
          return {
            ...nav,
            isActive: false,
            className: "navigation--inactive-nav-link",
          };
        }
      });
      setActiveNavLink(updatedNav);
    }
    if (checkPathname === "/top-played") {
      const updatedNav = activeNavLink.map((nav) => {
        if (nav.name === "Top Played") {
          return {
            ...nav,
            isActive: true,
            className: "navigation--active-nav-link",
          };
        } else {
          return {
            ...nav,
            isActive: false,
            className: "navigation--inactive-nav-link",
          };
        }
      });
      setActiveNavLink(updatedNav);
    }
    if (
      checkPathname != "/" &&
      checkPathname != "/search" &&
      checkPathname != "/top-played"
    ) {
      const updatedNav = activeNavLink.map((nav) => {
        return {
          ...nav,
          isActive: false,
          className: "navigation--inactive-nav-link",
        };
      });
      setActiveNavLink(updatedNav);
    }
  };

  // use effect to run checkPageChange function to apply the above effects
  useEffect(() => {
    window.onpopstate = checkPageChange();
  }, []);

  return (
    <div className="navigation--main-links-container grid">
      <ul className="navigation--main-links-icons-container grid">
        <li className="navigation--main-links-home-icons">
          {activeNavImg === "Home" ? (
            <Image src={HomeActive} alt="home icon active" />
          ) : (
            <Image src={HomeInactive} alt="home icon inactive" />
          )}
        </li>
        <li className="navigation--main-links-search-icons">
          {activeNavImg === "Search" ? (
            <Image src={SearchActive} alt="home icon active" />
          ) : (
            <Image src={SearchInactive} alt="home icon inactive" />
          )}
        </li>
        <li className="navigation--main-links-top-played-icons">
          {activeNavImg === "Top Played" ? (
            <Image src={TopPlayedActive} alt="home icon active" />
          ) : (
            <Image src={TopPlayedInactive} alt="home icon inactive" />
          )}
        </li>
      </ul>
      <ul className="navigation--main-links-text-container grid">
        {activeNavLink.map((nav, index) => (
          <li
            key={`${nav.name}-${index}`}
            className={nav.className}
            onClick={(e) => toggleActiveNav(e)}
          >
            <Link href={nav.navigate}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMainLinks;
