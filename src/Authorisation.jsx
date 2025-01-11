function Authorisation() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
    const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
    const SCOPE = import.meta.env.VITE_SCOPE
    const RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE
    const SHOW_DIALOG = import.meta.env.VITE_SHOW_DIALOG
  
    return (
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}`}
      >
        Log in here
      </a>
    );
  }
  
  export default Authorisation;