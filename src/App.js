import React from 'react';
import Wrapper from './Wrapper.js'
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

const App = ({ history }) => {

    return (

        <ConnectedRouter history={history}>

              <div className="App">

                  <Wrapper />

              </div>

        </ConnectedRouter>

    );

};

App.propTypes = {
    history: PropTypes.object,
};

export default App;