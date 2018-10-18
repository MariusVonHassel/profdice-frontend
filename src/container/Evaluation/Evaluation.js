import React, { Component } from 'react';
import { setPageType } from '../../actions/pageTypeActions';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalculationHandler from '../../renderlessComponents/CalculationHandler';

class Evaluation extends Component {

    componentWillMount() {
        this.checkValidInput();
    }

    checkValidInput() {
        //if (this.props.choosedAttackerData.length > 0 && this.props.choosedDefenderData.hasOwnProperty('id')) {
        if (this.props.choosedAttackerData.length > 0) {
            this.props.onSetPageType('evaluation');
            return true;
        } else {
            this.props.onSetPageType('unitSelection');
            this.props.history.push('/unit-selection');
            return false;
        }
    }

    render() {

        return (
            <div className='summary'>

                <Breadcrumb/>

                {this.props.choosedAttackerData.length > 0 ? <CalculationHandler /> : ''}

            </div>
        );
    }
}

Evaluation.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Evaluation);