"use client";

import { useEffect, useState } from "react";
import WelcomePage from "./pages/welcome-page";

import "./root.css"
import "./keyframes/fade-in.css"

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);


  return (
    <div>
      <WelcomePage></WelcomePage>
    </div>
  );
}
