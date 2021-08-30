# Spotify Playlist App
## Using TypeScript, React, & React Hooks

**TODOs**

- [ ] Auth storage is naive and uses presence of hash to determine auth.  Need to store in memory or localstorage.
- [ ] Auth and UI does not handle token timeouts (~1 hour).
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
