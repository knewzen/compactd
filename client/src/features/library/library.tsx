import * as State from '../../definitions/state';
import { IDatabaseID, IArtist } from '../../definitions/common';
import { ILibraryAction } from './actions.d';
// import * as IFetch from '@types/whatwg-fetch';
import "whatwg-fetch";


const RESOLVE_ARTIST = 'compactd/library/RESOLVE_ARTIST';
const RESOLVE_ALBUM  = 'compactd/library/RESOLVE_ALBUM';

const soad = {
  _id: 42,
  name: 'System of a Down'
};

const mezmerize = {
  _id: 2,
  name: 'Mezmerize',
  artist: soad
};

const initialState: State.ILibraryState = {
  albumsById: {
    '3': {...mezmerize, _id: 3},
    '42': mezmerize
  },
  artistsById: {
    '42': soad
  },
  albums: [mezmerize],
  artists: [soad],
  tracks: []
};

export function reducer (state: State.ILibraryState = initialState,
  action: ILibraryAction): State.ILibraryState {
  switch (action.type) {
    case RESOLVE_ARTIST:
      return {...state,
        artistsById: {...state.artistsById,
          [action.artist._id]: action.artist
        }
      };
    case RESOLVE_ALBUM:
      return {...state,
        albumsById: {...state.albumsById,
          [action.album._id]: action.album
        }
      };
  }
}

function fetchArtist (id: IDatabaseID): Promise<ILibraryAction> {
  return fetch('/api/artist').then((response) => {
    return response.json();
  }).then((artist) => {
    return Promise.resolve({
      type: RESOLVE_ARTIST,
      artist: artist as IArtist
    } as ILibraryAction);
  });
}
