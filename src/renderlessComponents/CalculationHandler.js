import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RangedCalc from '../statelessFunctionalComponents/calculation/RangedCalc';

class CalculationHandler extends Component {

    componentWillMount() {

        this.initCalculation();

    }

    initCalculation() {

        this.initRangedCalc();

    }

    initRangedCalc() {

        let rangedAttackerCalc = [];

        this.props.choosedAttackerData.forEach(elem => {

            elem.weapon.ranged.forEach((weapon) => {
                let newCalc = new RangedCalc(elem, weapon, this.props.choosedDefenderData, false);
                rangedAttackerCalc.push(newCalc);
            });

        });

        return rangedAttackerCalc;

    }

    render() {
        return (
            <div>
                42
            </div>
        );
    }

}

CalculationHandler.contextTypes = {
    t: PropTypes.func.isRequired
};

CalculationHandler.propTypes = {
    choosedAttackerData: PropTypes.array,
    choosedDefenderData: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    choosedAttackerData: state.choosedDataReducer.choosedAttackerData,
    choosedDefenderData: state.choosedDataReducer.choosedDefenderData
});

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculationHandler);