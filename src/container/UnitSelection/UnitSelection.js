import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { setPageType } from '../../actions/pageTypeActions';
import { setAttackerRace, setAttackerUnit, clearAttackerStatsCollection } from '../../actions/attackerActions'
import { setDefenderRace, setDefenderUnit } from '../../actions/defenderActions';
import { clearAttackerChoosedData } from '../../actions/choosedDataActions';
import SubmitButton from '../../components/Buttons/SubmitButton';
import CalcContainer from '../../container/CalcContainer/CalcContainer';
import ForcesApi from '../../renderlessComponents/ForcesApi';
import AttackerUnitApi from '../../renderlessComponents/AttackerUnitApi';
import DefenderUnitApi from '../../renderlessComponents/DefenderUnitApi';
import Flip from '../Flip/Flip';
import FlipHeader from '../../components/FlipHeader/FlipHeader';

export class UnitSelection extends Component {

    componentWillMount() {
        this.props.onSetPageType('unitSelection');
        this.props.onClearAttackerStatsCollection();
        this.props.onClearAttackerChoosedData();
    }

    attacker() {

        return (

            <span>

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('races')}
                    value={this.props.attackerRace}
                    onChange={(value)=>{this.props.onSetAttackerRace(value)}}
                    placeholder={this.context.t('selectYourRace')}
                    multi={true}
                    options={(this.props.forcesArray) ? this.props.forcesArray : []}
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('units')}
                    value={this.props.attackerUnit}
                    onChange={(value)=>{this.props.onSetAttackerUnit(value)}}
                    placeholder={this.context.t('selectYourUnits')}
                    multi={true}
                    options={(this.props.attackerUnitArray) ? this.props.attackerUnitArray : []}
                />

            </span>

        );
    }

    defender() {

        return (

            <span>

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('race')}
                    value={this.props.defenderRace.value}
                    onChange={(value)=>{(value === null) ? this.props.onSetDefenderRace({}) : this.props.onSetDefenderRace(value)}}
                    placeholder={this.context.t('selectYourRace')}
                    multi={false}
                    options={(this.props.forcesArray) ? this.props.forcesArray : []}
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('unit')}
                    value={this.props.defenderUnit.value}
                    onChange={(value)=>{(value === null) ? this.props.onSetDefenderUnit({}) : this.props.onSetDefenderUnit(value)}}
                    placeholder={this.context.t('selectYourUnits')}
                    multi={false}
                    options={(this.props.defenderUnitArray) ? this.props.defenderUnitArray: []}
                />

            </span>
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

        return (

            <div className='unitSelection'>

                <ForcesApi />
                <AttackerUnitApi />
                <DefenderUnitApi />

                <Breadcrumb />

                <Flip
                    header={<FlipHeader leftTitle={this.context.t('attacker')} rightTitle={this.context.t('defender')}/>}
                    front={this.attacker()}
                    frontSubmit={this.submitButton(()=>{
                        document.querySelector('.flip-wrapper').classList.add('flipped');
                        document.querySelector('.flipHeader-right').classList.add('flipHeader-right--active');
                        document.querySelector('.flipHeader-left').classList.remove('flipHeader-left--active')}, '/unit-selection', this.context.t('toDefender'), false)}
                    back={this.defender()}
                    backSubmit={this.submitButton(()=>{this.props.onSetPageType('weaponSelection')}, '/weapon-selection', this.context.t('toWeaponSelection'), !(this.props.attackerUnit.length > 0 && this.props.defenderUnit.hasOwnProperty('value')))}
                >
                </Flip>

            </div>

        );
    }
}

UnitSelection.contextTypes = {
    t: PropTypes.func.isRequired
};

UnitSelection.propTypes = {
    forcesArray: PropTypes.array,
    attackerRace: PropTypes.array,
    attackerUnit: PropTypes.array,
    attackerUnitArray: PropTypes.array,
    defenderRace: PropTypes.object,
    defenderRaceArray: PropTypes.array,
    defenderUnit: PropTypes.object,
    defenderUnitArray: PropTypes.array,
    pageType: PropTypes.string.isRequired,
    choosedAttackerData: PropTypes.array
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forcesArray: state.forcesReducer.forcesArray,
    attackerRace: state.attackerReducer.attackerRace,
    attackerUnit: state.attackerReducer.attackerUnit,
    attackerUnitArray: state.attackerReducer.attackerUnitArray,
    defenderRace: state.defenderReducer.defenderRace,
    defenderUnitArray: state.defenderReducer.defenderUnitArray,
    defenderUnit: state.defenderReducer.defenderUnit,
    choosedAttackerData: state.choosedDataReducer.choosedAttackerData
});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        },
        onSetAttackerRace: (newState) => {
            dispatch(setAttackerRace(newState));
        },
        onSetAttackerUnit: (newState) => {
            dispatch(setAttackerUnit(newState));
        },
        onSetDefenderRace: (newState) => {
            dispatch(setDefenderRace(newState));
        },
        onSetDefenderUnit: (newState) => {
            dispatch(setDefenderUnit(newState));
        },
        onClearAttackerStatsCollection: () => {
            dispatch(clearAttackerStatsCollection());
        },
        onClearAttackerChoosedData: () => {
            dispatch(clearAttackerChoosedData());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitSelection);