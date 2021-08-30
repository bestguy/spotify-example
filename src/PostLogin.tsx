import React, { useState, HTMLProps } from 'react';
import NowPlaying from './NowPlaying';
import Playlists from './components/Playlists';
import ShowPlaylist from './ShowPlaylist';
import UserPanel from './components/UserPanel';
import { Playlist } from './types';
import './PostLogin.css';

interface PostLoginProps extends HTMLProps<HTMLDivElement> {}

/**
 * Layout view for post-login experience: User info, Playlists, currently playing Track.
 */
const PostLogin = ({ ...props }: PostLoginProps) => {
  const [activePlaylist, setActivePlaylist] = useState<Playlist | undefined>();

  return (
    <div id="content" className="d-flex d-sm-grid flex-column flex-sm-row" {...props}>
      <aside id="playlists" className="bg-dark">
        <UserPanel />

        <Playlists
          active={activePlaylist}
          onPlaylist={playlist => setActivePlaylist(playlist)}
        />
      </aside>

      <div className="container text-center text-lg-start p-5" {...props}>
        {activePlaylist ? (
          <ShowPlaylist playlistId={activePlaylist.id} />
        ) : (
          <NowPlaying />
        )}
      </div>
    </div>
  );
};

export default PostLogin;
