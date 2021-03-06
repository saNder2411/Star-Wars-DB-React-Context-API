import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import ErrorBoundary from '../error-boundary/error-boundary';
import {ApiServiceProvider} from '../api-service-context/api-service-context';
import ErrorIndicator from '../error-indicator/error-indicator';
import Header from '../header/header';
import RandomPlanetDetails from '../api-components/random-planet-details';
import Routes from '../routes/routes';
import withAppState from '../../hocs/with-app-state/with-app-state';

import './app.css';
import './bootstrap.min.css';


const App = ({apiService, hasError, isLoggedIn, onServiceChange, onLogin}) => {

  if (hasError) {
    return <ErrorIndicator />;
  }

  return (
    <ErrorBoundary>
      <ApiServiceProvider value={apiService}>
        <BrowserRouter>
          <div className="app">
            <Header onServiceChange={onServiceChange} />
            <RandomPlanetDetails />
            <Routes isLoggedIn={isLoggedIn} onLogin={onLogin} />
          </div>
        </BrowserRouter>
      </ApiServiceProvider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  apiService: PropTypes.shape({
    _apiBaseUrl: PropTypes.string,
    _imageBaseUrl: PropTypes.string,
    getResource: PropTypes.func,
    getAllPeople: PropTypes.func,
    getPerson: PropTypes.func,
    getAllPlanets: PropTypes.func,
    getPlanet: PropTypes.func,
    getAllStarships: PropTypes.func,
    getStarship: PropTypes.func,
    getPersonImage: PropTypes.func,
    getStarshipImage: PropTypes.func,
    getPlanetImage: PropTypes.func,
    _extractId: PropTypes.func,
    _transformPlanet: PropTypes.func,
    _transformStarship: PropTypes.func,
    _transformPerson: PropTypes.func,
  }).isRequired,
  hasError: PropTypes.bool.isRequired,
  onServiceChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default withAppState(App);
