import React, { Component } from "react";
import { Link } from "react-router-dom";

// import IconButton from "../Buttons/IconButton";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { setPageType } from "../../actions/pageTypeActions";

export class Breadcrumb extends Component {

    render() {

        return(

            <ul className="breadcrumb">

                <li className="breadcrumb-item"><Link className="breadcrumb-link breadcrumb-link--first" to="/new-calculation">{this.context.t('newCalc')}</Link></li>
                <li className="breadcrumb-item"><Link className="breadcrumb-link" to="/unit-settings">{this.context.t('unitSettings')}</Link></li>
                <li className="breadcrumb-item"><Link className="breadcrumb-link" to="/summary">{this.context.t('unitStats')}</Link></li>

            </ul>

        );

    }
}


Breadcrumb.contextTypes = {
    t: PropTypes.func.isRequired
};

Breadcrumb.propTypes = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Breadcrumb));