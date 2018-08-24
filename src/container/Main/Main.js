import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import Projects from "../../components/Projects/Projects";
import NewCalc from "../../container/NewCalc/NewCalc";
import UnitSettings from "../../container/UnitSettings/UnitSettings";
import LegalNotice from "../../container/LegalNotice/LegalNotice";
import AboutThisWebsite from "../AboutThisWebsite/AboutThisWebsite";
import Summary from '../../container/Summary/Summary';
import { setPageType } from "../../actions/pageTypeActions";

export class Main extends Component {

    render() {

        return (

            <div className='main'>

                <div className='main-wrapper'>

                    <Switch>

                        <Route exact path='/' component={Projects} />
                        <Route exact path='/new-calculation' component={NewCalc} />
                        <Route exact path='/unit-settings' component={UnitSettings} />
                        <Route exact path='/summary' component={Summary} />
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