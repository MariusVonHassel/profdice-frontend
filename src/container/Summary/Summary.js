import React, { Component } from 'react';
import { setPageType } from '../../actions/pageTypeActions';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalculationHandler from '../../renderlessComponents/CalculationHandler';

class Summary extends Component {

    componentWillMount() {
        this.checkValidInput();
        this.props.onSetPageType('summary');
    }

    checkValidInput() {
        //if (this.props.choosedAttackerData.length > 0 && this.props.choosedDefenderData.hasOwnProperty('id')) {
        if (this.props.choosedAttackerData.length > 0) {
            this.props.onSetPageType('summary');
            return true;
        } else {
            this.props.onSetPageType('newCalc');
            this.props.history.push('/new-calculation');
            return false;
        }
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
    choosedAttackerData: state.choosedDataReducer.choosedAttackerData,
    choosedDefenderData: state.choosedDataReducer.choosedDefenderData
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);