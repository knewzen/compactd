import * as React from 'react';
import {LibraryActions} from '../../actions.d';
import {Link} from 'react-router-dom';
import {Artist, artistURI} from 'compactd-models';
import {MatchResult} from 'fuzzy';
import * as classnames from 'classnames';
import * as PropTypes from 'prop-types';

require('./ArtistListItem.scss');

interface ArtistListItemProps {
  actions: LibraryActions;
  artist: Artist;
  filterMatch?: MatchResult;
  active: boolean;
}

export class ArtistListItem extends React.Component<ArtistListItemProps, {}>{

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        createHref: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }
  handleClick (event: any) {
    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0// && // ignore right clicks
    //  !this.props.target //&& // let browser handle "target=_blank" etc.
      // !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault()

      const { history } = this.context.router

      history.push(this.props.active ? '/library' : `/library/${
        artistURI(this.props.artist._id).name
      }`);
    }

  }
  render (): JSX.Element {
    const {actions, artist, filterMatch, active} = this.props;
    let name: JSX.Element = <span className="not-filtered">{artist.name}</span>;

    if (filterMatch) {
      const match = filterMatch.rendered.split('')
        .map((char: string, i: number, arr: string[]) => {
          if (char === '$') return <span className="empty"></span>;
          if (arr[i - 1] === '$') return <span className="match">{char}</span>;
          return <span className="not-match">{char}</span>
        });
      name = <span className="filtered">{match}</span>;
    }

    return <div className={classnames("artist-list-item", {active})}
      onClick={this.handleClick.bind(this)}>
      <div className="artist-image">
        <img src="http://placehold.it/64x64" />
      </div>
      <div className="artist-description">
        <span className="artist-name">
          {name}
        </span>
        <span className="artist-album-count">15 albums</span>
      </div>
    </div>
  }
}