const Logout = (setToken) => {
    setToken("");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("login-token");
  };

  export default Logout