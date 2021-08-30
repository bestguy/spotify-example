import React, { HTMLProps, ReactNode } from 'react';
import { Item } from '../types';
import AddToPlaylist from './AddToPlaylist';

interface ShowTrackProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  track: Item;
}

/**
 * Component for displaying information about a Track.
 */
const ShowTrack = ({ children, className, track, ...props }: ShowTrackProps) => (
  <div className="d-lg-flex" {...props}>
    <img
      src={track.album.images[0].url}
      alt={track.album.name}
      className="img-fluid shadow w-50 mb-3"
    />
    <div className="text-lg-start ms-lg-4">
      <h4>
        {track.artists[0].name}{track.artists.length > 1 && ' & Others'} 
      </h4>
      <h2>{track.name}</h2>
      <h5 className="text-muted">{track.album.name}</h5>
      
      <AddToPlaylist track={track} />
    </div>
  </div>
);

export default ShowTrack;
