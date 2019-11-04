import React from 'react';
import PropTypes from 'prop-types';
import slug from 'speakingurl';
import Router from 'next/router';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import Bars from './bars';

export default class Show extends React.Component {
  static propTypes = {
    show: PropTypes.object.isRequired,
    currentPlaying: PropTypes.string.isRequired,
    setCurrentPlaying: PropTypes.func.isRequired,
  };

  changeURL = (e, show) => {
    e.preventDefault();
    const { href } = e.currentTarget;
    Router.push(`/?number=${show.displayNumber}`, href, { shallow: true });
  };

  render() {
    const { show, currentPlaying, setCurrentPlaying } = this.props;
    
    return (
      <div
        className={`show ${
          currentPlaying === show.displayNumber ? 'show--playing' : ''
        }
      `}
      >
        <div className="show__playcontrols">
          {currentPlaying === show.displayNumber ? (
            <Bars />
          ) : (
            <button
              type="button"
              onClick={(e) => {
                setCurrentPlaying(show.displayNumber)
                this.changeURL(e, show)
              }}
              className="show__play"
              title="play button"
            >
              <FaPlay color="#fff" />
            </button>
          )}
        </div>

        <Link href={`/episode?n=${show.displayNumber}`} as={`/episode/${show.displayNumber}`}> 
          <div
            className="show__notes"
            href={`/show/${show.displayNumber}/${slug(show.title)}`}
          >
            <div className="show__row">
              <h3 className="show__title">{show.title}</h3>
              <h3 className="show__guests">{show.guest}</h3>
            </div>

            <div className="show__row">
              <p className="show__displayNumber">Episode {show.displayNumber}</p>            
            </div>
          </div>
          </Link>
      </div>
    );
  }
}
