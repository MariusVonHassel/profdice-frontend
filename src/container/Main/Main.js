import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import UnitSelection from '../UnitSelection/UnitSelection';
import WeaponSelection from '../WeaponSelection/WeaponSelection';
import LegalNotice from '../LegalNotice/LegalNotice';
import AboutThisWebsite from '../AboutThisWebsite/AboutThisWebsite';
import Modifier from '../Modifier/Modifier';
import Evaluation from '../Evaluation/Evaluation';
import { setPageType } from '../../actions/pageTypeActions';

class Main extends Component {

    render() {

        return (

            <div className='main'>

                <div className='main-wrapper'>

                    <Switch>

                        <Route exact path='/' component={Home} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/unit-selection' component={UnitSelection} />
                        <Route exact path='/weapon-selection' component={WeaponSelection} />
                        <Route exact path='/modifier-selection' component={Modifier} />
                        <Route exact path='/summary' component={Evaluation} />
                        <Route exact path='/legal-notice' component={LegalNotice} />
                        <Route exact path='/about-this-website' component={AboutThisWebsite} />

                    </Switch>

                </div>

            </div>
        );
    }
}

Main.propTypes = {
    pageType: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        }
    }
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));