import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RangedCalc from '../statelessFunctionalComponents/calculation/RangedCalc';
import MeleeCalc from '../statelessFunctionalComponents/calculation/MeleeCalc';

class CalculationHandler extends Component {

    componentWillMount() {

        this.initCalculation();

    }

    initCalculation() {

        console.log('Ranged:');
        console.log('Attacker:');
        this.initCalc(this.props.choosedAttackerData, this.props.choosedDefenderData, 'ranged', RangedCalc);
        console.log('Defender:');
        this.initCalc([this.props.choosedDefenderData], this.props.choosedAttackerData, 'ranged', RangedCalc);

        console.log('Melee:');
        console.log('Attacker:');
        this.initCalc(this.props.choosedAttackerData, this.props.choosedDefenderData, 'melee', MeleeCalc);
        console.log('Defender:');
        this.initCalc([this.props.choosedDefenderData], this.props.choosedAttackerData, 'melee', MeleeCalc);

    }

    initCalc(attacker, defender, weaponType, calcObject) {

        let calcObjects = [];

        attacker.forEach(elem => {
            elem.weapon[weaponType].forEach(weapon => {
                calcObjects.push(new calcObject(elem, weapon, defender));
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