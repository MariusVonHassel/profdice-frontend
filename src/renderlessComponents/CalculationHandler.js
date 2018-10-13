import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainCalc from '../statelessFunctionalComponents/calculation/mainCalc';

class CalculationHandler extends Component {

    componentWillMount() {

        this.initCalculation();

    }

    initCalculation() {

        console.log('Ranged:');
        console.log('Attacker:');
        this.initCalc(this.props.choosedAttackerData, this.props.choosedDefenderData, 'ranged');
        console.log('Defender:');
        this.initCalc([this.props.choosedDefenderData], this.props.choosedAttackerData[0], 'ranged');

        console.log('Melee:');
        console.log('Attacker:');
        this.initCalc(this.props.choosedAttackerData, this.props.choosedDefenderData, 'melee');
        console.log('Defender:');
        this.initCalc([this.props.choosedDefenderData], this.props.choosedAttackerData[0], 'melee');

    }

    initCalc(attacker, defender, weaponType) {

        let calcObjects = [];

        attacker.forEach(elem => {
            elem.weapon[weaponType].forEach(weapon => {
                calcObjects.push(new MainCalc(elem, weapon, defender));
            });
        });

        return calcObjects;

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