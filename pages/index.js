import { withRouter } from 'next/router';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ShowList from '../components/ShowList';
import ShowNotes from '../components/ShowNotes';
import Player from '../components/Player';
import Meta from '../components/meta';
import Page from '../components/Page';
import getBaseURL from '../lib/getBaseURL';

export default withRouter(
  class IndexPage extends React.Component {
    static propTypes = {
      router: PropTypes.object.isRequired,
      shows: PropTypes.array.isRequired,
      baseURL: PropTypes.string.isRequired,
    };

    constructor(props) {
      super();
      const currentShow =
        props.router.query.number || props.shows[0].displayNumber;

      this.state = {
        currentPlaying: currentShow,
      };
    }

    static async getInitialProps({ req }) {
      const baseURL = getBaseURL(req);
      const { data: shows } = await axios.get(`${baseURL}/api/shows`);
      return { shows, baseURL };
    }
    
    setCurrentPlaying = currentPlaying => {
      console.log('Setting current playing');
      this.setState({ currentPlaying });
    };

    render() {
      const { shows = [], baseURL } = this.props;
      const { currentPlaying } = this.state;
      // Currently Playing
      const current =
        shows.find(showItem => showItem.displayNumber === currentPlaying) ||
        shows[0];

      return (
        <Page>
          <Meta show={current} baseURL={baseURL} />
          <div className="wrapper">
            <main className="show-wrap" id="main" tabIndex="-1">
              <ShowList
                shows={shows}
                currentPlaying={currentPlaying}
                setCurrentPlaying={this.setCurrentPlaying}
              />
            </main>
          </div>
          <Player show={current} />
        </Page>
      );
    }
  }
);
