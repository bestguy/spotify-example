
import React, { useMemo, HTMLProps } from 'react';

interface LoginProps extends HTMLProps<HTMLDivElement> { }

/**
 * View for unauthenticated Users to login with Spotify.
 */
const Login = ({ ...props }: LoginProps) => {
  const loginUrl = useMemo(() => {
    const client_id = '5ba66b08dd254565878aaf78087334cc';
    const redirect_uri = 'http://localhost:8080/';
    const scope = 'user-read-private user-read-currently-playing';

    return 'https://accounts.spotify.com/authorize?response_type=token' +
      `&client_id=${encodeURIComponent(client_id)}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center h-100" {...props}>
      <a className="btn btn-primary btn-lg" href={loginUrl}>
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
