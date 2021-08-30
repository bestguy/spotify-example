// Shared TypeScript types.

export interface Playlist {
  id: string;
  name: string;
  songs?: Item[];
}

export interface Image {
  height?: number;
  url: string;
  width?: number;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Track {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Context {
  uri: string;
  external_urls: ExternalUrls;
  href: string;
  type: string;
}

export interface Cursors {
  after: string;
  before: string;
}

export interface RecentlyPlayed {
  items: Item[];
  next: string;
  cursors: Cursors;
  limit: number;
  href: string;
}

export interface Album {
  album_type: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface Item {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface CurrentlyPlaying {
  context: Context;
  currently_playing_type: string;
  is_playing: boolean;
  item: Item;
  progress_ms: number;
  timestamp: number;
}