import React, { useState, HTMLProps } from 'react';
import AddPlaylist from './AddPlaylist';
import usePlaylists from '../hooks/usePlaylists';
import Icon from './Icon';
import { Playlist } from '../types';

interface SidebarProps extends HTMLProps<HTMLDivElement> {
  active?: Playlist;
  onPlaylist?: (playlist: Playlist | undefined) => void;
}

const noop = () => { };

/**
 * Component for listing and adding Playlists.
 */
const Sidebar = ({ active, onPlaylist = noop, ...props }: SidebarProps) => {
  const [addingPlaylist, setAddingPlaylist] = useState(false);
  const { playlists, addPlaylist, deletePlaylist } = usePlaylists();

  return (
    <div className="list-group list-group-flush" {...props}>
      <button
        className={`list-group-item list-group-item-action d-flex ${!active ? 'active' : ''}`}
        onClick={() => onPlaylist(undefined)}
      >
        <Icon
          name="music-player"
          className={`me-2 ${active ? 'text-muted' : ''}`}
        /> Now Playing
      </button>
   
      {playlists.map((playlist) => (
        <a
          key={playlist.id}
          className={`list-group-item list-group-item-action d-flex ${active === playlist ? 'active' : ''}`}
          onClick={() => onPlaylist(playlist)}
        >
          <Icon
            name="collection-play-fill"
            className={`me-2 ${active !== playlist ? 'text-muted' : ''}`}
          />
          {playlist.name}
          <span className="ms-auto">
            {playlist.songs?.length ? (
              <span className="badge bg-primary">{playlist.songs?.length}</span>
            ) : undefined}
            <button
              className="btn btn-link p-0"
              onClick={(e) => {
                deletePlaylist(playlist);
                e.preventDefault();
              }}
            >
              <Icon
                name="x"
                className={`me-2 ${active !== playlist ? 'text-muted' : ''}`}
              />
            </button>
          </span>
        </a>
      ))}

      {!addingPlaylist && (
        <button
          className="list-group-item list-group-item-action"
          onClick={() => setAddingPlaylist(true)}
        >
          <Icon name="plus-circle" className="me-2 text-muted" />
          Add Playlist
        </button>
      )}
      {addingPlaylist && (
        <AddPlaylist
          onCancel={() => setAddingPlaylist(false)}
          onSave={(playlist) => {
            addPlaylist(playlist);
            setAddingPlaylist(false);
          }}
        />
      )}
    </div>
  );
}

export default Sidebar;
