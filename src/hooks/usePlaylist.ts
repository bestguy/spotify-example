import { useEffect, useState } from 'react';
import { Item, Playlist } from '../types';
import usePlaylists from './usePlaylists';

/**
 * Hook for accessing and modifying a single Playlist. 
 */
function usePlaylist(id: string) {
  const [playlist, setPlaylist] = useState<Playlist | undefined>();
  const { playlists, setPlaylists } = usePlaylists();

  useEffect(() => {
    setPlaylist(playlists.find(list => list.id === id));
  }, [id, playlists]);

  const addTrack = (track: Item) => {
    setPlaylists(playlists.map(list => {
      if (list.id === id && !list.songs?.find(song => song.id === track.id)) {
        list.songs = list.songs ? [...list.songs, track] : [track];
      }

      return list;
    }));
  };

  const removeTrack = (track: Item) => {
    setPlaylists(playlists.map(list => {
      if (list.id === id) {
        list.songs = list.songs?.filter(song => song.id !== track.id) || [];
      }

      return list;
    }));
  };

  return {
    playlist,
    addTrack,
    removeTrack
  };
}

export default usePlaylist;
