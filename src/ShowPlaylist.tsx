import React, { HTMLProps } from 'react';
import { Playlist as Playlist } from './types';
import Icon from './components/Icon';
import { Track } from './types';
import usePlaylist from './hooks/usePlaylist';
import usePlaylists from './hooks/usePlaylists';

interface ShowPlaylistProps extends HTMLProps<HTMLDivElement> {
  playlistId: string;
}

/**
 * View for showing information about a Playlist.
 */
const ShowPlaylist = ({ playlistId, ...props }: ShowPlaylistProps) => {
  const { playlist, removeTrack } = usePlaylist(playlistId);

  return (
    <div {...props}>
      <h4 className="text-muted">Playlist</h4>
      {playlist && (
        <>
          <h1 className="mb-4">{playlist.name}</h1>

          {playlist.songs?.length ? (
            <ul className="list-group">
              {playlist.songs?.map(track => (
                <li className="list-group-item d-flex align-items-center">
                  <img
                    src={track.album.images[0].url}
                    alt={track.album.name}
                    className="shadow-sm me-3"
                    width={70}
                    height={70}
                  />
                  <div className="text-start">
                    <h6>{track.artists[0].name}{track.artists.length > 1 && ' & Others'}</h6>
                    <h5>{track.name}</h5>
                    <h6 className="text-muted">{track.album.name}</h6>
                  </div>

                  <button
                    className="btn btn-link ms-auto"
                    onClick={() => removeTrack(track)}
                  >
                    <Icon name="x-lg" className="text-muted" />
                  </button>
                </li>
              ))}
            </ul>
          ) : <h2 className="text-info fade show">No Songs in Playlist</h2>
          }
        </>
      )}
    </div>
  );
};

export default ShowPlaylist;
