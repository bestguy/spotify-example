import React, { HTMLProps } from 'react';
import AddToPlaylist from './components/AddToPlaylist';
import ShowTrack from './components/ShowTrack';
import useCurrentlyPlaying from './hooks/useCurrentlyPlaying';

interface NowPlayingProps extends HTMLProps<HTMLDivElement> {}

/**
 * View for showing currently playing Track (if any).
 */
const NowPlaying = ({ ...props }: NowPlayingProps) => {
  const currentlyPlaying = useCurrentlyPlaying();

  return (
    <div {...props}>
      <h1 className="mb-4">Now Playing</h1>

      {currentlyPlaying ? (
        <div>
          <ShowTrack track={currentlyPlaying.item} />
        </div>
      ) : (
        <h2 className="text-info fade show">No Current Track</h2>
      )}
    </div>
  )
}

export default NowPlaying;
