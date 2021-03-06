# Spotify Playlist App
## Using TypeScript, React, & React Hooks

<img width="798" alt="Screen Shot" src="https://user-images.githubusercontent.com/405608/131288534-4017e4f6-3e57-4baf-8875-0f85f72bdbad.png">

**TODOs**

- [ ] Playlist storage uses localstorage and serializes the entire object returned from Spotify APIs to JSON.  Need to trim to only fields used in app.
- [ ] `usePlaylists` hook has inconsistent function signatures, some taking Playlists, others id.  Need make consistent with ids.
- [ ] `useFetch` is naive and does not return loading or error states.  UI should accomodate both.
- [ ] Accessibility (a11y) is poor with most inputs missing labels, and some inputs are not in forms.

---

## Install

`npm install`

## Running

`npm run dev`

Open [http://localhost:8080](http://localhost:8080)

This application uses [Vite](https://vitejs.dev) for development.

## Build

`npm run build`

Bundled application for production will be under /docs.

----

### Components

```
┌─────────────────────────────────┐
│App                              │
│  ┌──────────────────────────┐   │
│  │Login                     │   │
│  │ ┌────────────────────────┴─┐ │
│  │ │PostLogin                 │ │
│  │ │                          │ │
│  │ │                          │ │
│  │ │                          │ │
│  └─┤                          │ │
│    └──────────────────────────┘ │
└─────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│PostLogin                                                                     │
│ ┌───────────────┐  ┌───────────────────────────────────────────────────┐     │
│ │UserPanel      │  │ShowPlaylist                                       │     │
│ │               │  │  ┌────────────────────────────────────────────────┴──┐  │
│ │               │  │  │NowPlaying                                         │  │
│ │               │  │  │  ┌─────────────────────────────────────────────┐  │  │
│ │               │  │  │  │ShowTrack                                    │  │  │
│ │               │  │  │  │                                             │  │  │
│ └───────────────┘  │  │  │                                             │  │  │
│ ┌───────────────┐  │  │  │                                             │  │  │
│ │Playlists      │  │  │  │                                             │  │  │
│ │               │  │  │  │                                             │  │  │
│ │               │  │  │  │                       ┌───────────────────┐ │  │  │
│ │               │  │  │  │                       │AddToPlaylist      │ │  │  │
│ │               │  │  │  │                       │                   │ │  │  │
│ │               │  │  │  │                       │                   │ │  │  │
│ │               │  │  │  │                       │                   │ │  │  │
│ │ ┌───────────┐ │  │  │  │                       │                   │ │  │  │
│ │ │AddPlaylist│ │  │  │  │                       └───────────────────┘ │  │  │
│ │ │           │ │  │  │  │                                             │  │  │
│ │ └───────────┘ │  └──┤  └─────────────────────────────────────────────┘  │  │
│ └───────────────┘     └───────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘

```
