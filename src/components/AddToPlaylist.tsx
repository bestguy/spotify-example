import React, { useState, HTMLProps } from 'react';
import { Item, Playlist } from '../types';
import Icon from './Icon';
import usePlaylists from '../hooks/usePlaylists';

interface AddToPlaylistProps extends HTMLProps<HTMLDivElement> {
  track: Item
}

/**
 * Component for adding a Track to a Playlist.
 */
const AddToPlaylist = ({ track, ...props }: AddToPlaylistProps) => {
  const [choosing, setChoosing] = useState(false);
  const [name, setName] = useState<string>();
  const [selectedPlaylist, setSelectedPlaylist] = useState<string>();
  const { playlists, addTrackToPlaylist } = usePlaylists();

  function addToPlaylist(newTrack: Item, playlist?: string) {
    if (playlist) {
      addTrackToPlaylist(newTrack, playlist);

      // Reset state
      setChoosing(false);
      setName(undefined);
      setSelectedPlaylist(undefined);
    }
  }

  return (
    <div {...props}>
      {choosing ? (
        selectedPlaylist !== '_new' ? (
          <div className="input-group">
            <select
              autoFocus
              className="form-select"
              placeholder="Pick or Create a Playlist..."
              value={selectedPlaylist}
              onChange={e => setSelectedPlaylist(e.target.value)}
            >
              <option>Choose a Playlist…</option>
              {playlists.map(playlist => (
                <option
                  key={playlist.id}
                  value={playlist.name}
                >
                  {playlist.name}
                </option>
              ))}
              <option value="_new">
                Create New Playlist…
              </option>
            </select>
            <button
              className="btn btn-outline-secondary btn-lg"
              disabled={!selectedPlaylist}
              onClick={() => addToPlaylist(track, selectedPlaylist)}
            >
              <Icon name="check-lg" />
            </button>
          </div>
        ) : (
          <div className="input-group">
            <input
              autoFocus
              className="form-control"
              placeholder="Playlist Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary btn-lg"
              disabled={!name}
              onClick={() => addToPlaylist(track, name)}
            >
              <Icon name="check-lg" />
            </button>
          </div>
        )
      ) : (
        <button
          className="btn btn-link btn-lg"
          onClick={() => setChoosing(true)}
        >
          <Icon name={selectedPlaylist ? 'heart-fill' : 'heart'} className="h1" />
        </button>
      )}
    </div>
  );
}

export default AddToPlaylist;
