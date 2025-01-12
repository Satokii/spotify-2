function Authorisation() {
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
    const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
    const SCOPE = process.env.NEXT_PUBLIC_SCOPE
    const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE
    const SHOW_DIALOG = process.env.NEXT_PUBLIC_SHOW_DIALOG

    return (
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}`}
      >
        Log in here
      </a>
    );
  }
  
  export default Authorisation;