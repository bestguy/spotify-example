import { Item, Playlist } from '../types';
import useLocalStorage from './useLocalStorage';

/**
 * Hook for accessing and modifying the list of Playlists. 
 */
function usePlaylists() {
  const [playlists, setPlaylists] = useLocalStorage<Playlist[]>('playlists', []);

  // Create a new playlist
  const addPlaylist = (playlist: Playlist) => {
    setPlaylists([...playlists, playlist]);
  };

  // Delete an existing playlist
  const deletePlaylist = (playlist: Playlist) => {
    setPlaylists(playlists.filter(p => p.id !== playlist.id));
  };

  // Find playlists for the track
  function getPlaylistForTrack(track: Item): Playlist | undefined {
    return playlists.find(list => list.songs?.find(song => song.id === track.id));
  }

  // Add track to an existing or new playlist
  function addTrackToPlaylist(track: Item, playlistName: string) {
    if (playlists.find(list => list.name === playlistName)) {
      // If existing playlist, add track:
      setPlaylists(playlists.map(list => {
        // Also prevent duplicates
        if (list.name === playlistName && !list.songs?.find(song => song.id === track.id)) {
          list.songs = list.songs ? [...list.songs, track] : [track];
        }

        return list;
      }));
    } else {
      // Otherwise create a new playlist with name and track
      setPlaylists([
        ...playlists,
        { id: playlistName, name: playlistName, songs: [track]}
      ])
    }
  };

  return {
    playlists,
    addPlaylist,
    deletePlaylist,
    setPlaylists,
    getPlaylistForTrack,
    addTrackToPlaylist
  };
};

export default usePlaylists;
