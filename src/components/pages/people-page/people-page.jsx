import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PersonList} from '../../api-components/item-lists';
import PersonDetails from '../../api-components/person-details';

import './people-page.css';


const PeoplePage = ({history, match}) => {
  const {id} = match.params;

  return (
    <React.Fragment>
      <h2>People</h2>
      <Row>
        <ErrorBoundary>
          <PersonList onItemSelected={(id) => history.push(id)} />
        </ErrorBoundary>
        <ErrorBoundary>
          <PersonDetails itemId={id} />
        </ErrorBoundary>
      </Row>
    </React.Fragment>
   
  );
};

PeoplePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(PeoplePage);
