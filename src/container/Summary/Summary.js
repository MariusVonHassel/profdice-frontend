import React, { Component } from 'react';
import { setPageType } from '../../actions/pageTypeActions';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalculationHandler from '../../renderlessComponents/CalculationHandler';

class Summary extends Component {

    componentWillMount() {
        this.props.onSetPageType('summary');
    }

    render() {

        return (
            <div className='summary'>

                <Breadcrumb/>

                <CalculationHandler />

            </div>
        );
    }
}

Summary.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);