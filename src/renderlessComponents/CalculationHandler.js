import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RangedCalc from '../statelessFunctionalComponents/calculation/RangedCalc';

class CalculationHandler extends Component {

    componentWillMount() {

        this.initCalculation();

    }

    initCalculation() {

        console.log('Attacker:');
        this.initRangedCalc(this.props.choosedAttackerData, this.props.choosedDefenderData);
        console.log('Defender:');
        this.initRangedCalc([this.props.choosedDefenderData], this.props.choosedAttackerData);

    }

    initRangedCalc(attacker, defender) {

        let rangedCalc = [];

        attacker.forEach(elem => {

            elem.weapon.ranged.forEach((weapon) => {
                let newCalc = new RangedCalc(elem, weapon, defender, false);
                rangedCalc.push(newCalc);
            });

        });

        return rangedCalc;

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