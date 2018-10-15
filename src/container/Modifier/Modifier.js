import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPageType } from '../../actions/pageTypeActions';

export class Modifier extends Component {



    render() {

        return (

            <span></span>

        );

    }
}


Modifier.contextTypes = {
    t: PropTypes.func.isRequired
};

Modifier.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Modifier);