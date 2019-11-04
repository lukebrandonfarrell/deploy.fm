import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Meta from '../components/meta';
import Page from '../components/Page';
import getBaseURL from '../lib/getBaseURL';

export default class EpisodePage extends React.Component {
  render() {
    const { baseURL } = this.props;

    return (
      <Page>
        <Meta baseURL={baseURL} staticPage={{ title: 'Sick Picks' }} />
        <div className="wrapper wrapper--text">
          
        </div>
      </Page>
    );
  }
}
