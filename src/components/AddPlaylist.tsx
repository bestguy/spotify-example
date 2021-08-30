import React, { useState, HTMLProps } from 'react';
import { Playlist } from '../types';
import Icon from './Icon';

interface AddPlaylistProps extends HTMLProps<HTMLFormElement> {
  onSave: (playlist: Playlist) => void;
  onCancel: () => void;
}

const noop = () => { };

/**
 * Component for adding a new Playlist.
 */
const AddPlaylist = ({ onCancel = noop, onSave = noop, ...props }: AddPlaylistProps) => {
  const [playlistName, setPlaylistName] = useState<string>();

  function addPlaylist(name: string | undefined) {
    if (name) {
      onSave({ id: (new Date()).toISOString(), name, songs: [] }); // TODO move to hook
      setPlaylistName(undefined);
    }
  }

  return (
    <form
      className="p-2"
      onSubmit={(e) => {
        addPlaylist(playlistName);
        e.preventDefault();
      }}
      {...props}
    >
      <input
        autoFocus
        className="form-control mb-2"
        value={playlistName}
        onChange={e => setPlaylistName(e.target.value)}
      />
      <div className="btn-group w-100">
        <button
          className="btn btn-primary"
          disabled={!playlistName?.trim().length}
          onClick={() => addPlaylist(playlistName)}
        >
          <Icon name="check" className="me-2"/> Save
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onCancel()}
        >
          <Icon name="x" className="me-2" /> Cancel
        </button>
      </div>
    </form>
  );
}

export default AddPlaylist;
