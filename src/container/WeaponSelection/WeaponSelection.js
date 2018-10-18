import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SubmitButton from '../../components/Buttons/SubmitButton';
import { setPageType } from '../../actions/pageTypeActions';
import { fetchAttackerStats } from '../../actions/attackerActions';
import { fetchDefenderStats } from '../../actions/defenderActions';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AttackerStats from '../../renderlessComponents/AttackerStats';
import DefenderStats from '../../renderlessComponents/DefenderStats';
import Flip from '../../container/Flip/Flip';
import FlipHeader from "../../components/FlipHeader/FlipHeader";

class WeaponSelection extends Component {

    componentWillMount() {

        (this.checkValidInput() && this.fetchUnitStats())
    }

    componentDidUpdate() {

    }

    checkValidInput() {
        if (this.props.attackerUnit.length > 0 && this.props.defenderUnit.hasOwnProperty('value')) {
            this.props.onSetPageType('weaponSelection');
            return true;
        } else {
            this.props.onSetPageType('unitSelection');
            this.props.history.push('/unit-selection');
            return false;
        }
    }

    fetchUnitStats() {

        this.props.attackerUnit.forEach(item => {
            this.props.onFetchAttackerStats(item.race, item.value);
        });

        this.props.onFetchDefenderStats(this.props.defenderUnit.race, this.props.defenderUnit.value);

    }

    attacker() {

        return (

            <span>das ist das label nr 1</span>

        );

    }

    defender() {

        return (

            <span>das ist dadqwd</span>

        );

    }

    submitButton(destination, path, context, disabledValue) {

        return (

            <SubmitButton
                className=' btn unitSelection-submit'
                onClick={destination}
                path={path}
                disabledValue={disabledValue}
            >
                {context}
            </SubmitButton>
        );

    }

    render() {

        return(
            <div className='weaponSelection'>

                <AttackerStats />

                <DefenderStats />

                <Breadcrumb />

                <Flip
                    header={<FlipHeader leftTitle={this.context.t('attacker')} rightTitle={this.context.t('defender')}/>}
                    front={this.attacker()}
                    frontSubmit={this.submitButton(()=>{
                        document.querySelector('.flip-wrapper').classList.add('flipped');
                        document.querySelector('.flipHeader-right').classList.add('flipHeader-right--active');
                        document.querySelector('.flipHeader-left').classList.remove('flipHeader-left--active')}, '/weapon-selection', this.context.t('toDefender'), false)}
                    back={this.defender()}
                    backSubmit={this.submitButton(()=>{this.props.onSetPageType('modifierSelection')}, '/modifier-selection', this.context.t('toModifierSelection'), false)}
                >
                </Flip>

            </div>
        );
    }
}

WeaponSelection.contextTypes = {
    t: PropTypes.func.isRequired
};

WeaponSelection.propTypes = {
    pageType: PropTypes.string.isRequired,
    attackerUnit: PropTypes.array.isRequired,
    defenderUnit: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    attackerUnit: state.attackerReducer.attackerUnit,
    defenderUnit: state.defenderReducer.defenderUnit
});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        },
        onFetchAttackerStats: (race, unitName) => {
            dispatch(fetchAttackerStats(race, unitName));
        },
        onFetchDefenderStats: (race, unitName) => {
            dispatch(fetchDefenderStats(race, unitName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeaponSelection);