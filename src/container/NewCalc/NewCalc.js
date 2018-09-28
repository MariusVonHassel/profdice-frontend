import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { setPageType } from '../../actions/pageTypeActions';
import { setAttackerRace, setAttackerUnit } from '../../actions/attackerActions'
import { setDefenderRace, setDefenderUnit } from '../../actions/defenderActions'
import SubmitButton from '../../components/Buttons/SubmitButton';
import CalcContainer from '../../container/CalcContainer/CalcContainer';
import SelectionMenuHeadline from '../../components/Menu/SelectionMenuHeadline';
import ForcesApi from '../../renderlessComponents/ForcesApi';
import AttackerUnitApi from "../../renderlessComponents/AttackerUnitApi";
import DefenderUnitApi from "../../renderlessComponents/DefenderUnitApi";

export class NewCalc extends Component {

    componentWillMount() {
        this.props.onSetPageType('newCalc');
    }

    render() {

        return (

            <div className='newCalc'>

                <ForcesApi />
                <AttackerUnitApi />
                <DefenderUnitApi />

                <Breadcrumb />

                <SelectionMenuHeadline
                    iconName='colorize'
                    headlineText={this.context.t('attacker')}
                    buttonType='button--attacker'
                />

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

                <SelectionMenuHeadline
                    iconName='security'
                    headlineText={this.context.t('defender')}
                    buttonType='button--defender'
                />

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

                <SubmitButton
                    className=' btn newCalc-submit'
                    onClick={()=>{this.props.onSetPageType('unitSettings')}}
                    path='/unit-settings'
                    disabledValue={!(this.props.attackerUnit.length > 0 && this.props.defenderUnit.hasOwnProperty('value'))}
                >
                {this.context.t('confirmSelection')}
                </SubmitButton>

            </div>

        );
    }
}

NewCalc.contextTypes = {
    t: PropTypes.func.isRequired
};

NewCalc.propTypes = {
    attackerRace: PropTypes.array,
    attackerRaceArray: PropTypes.array,
    attackerUnit: PropTypes.array,
    attackerUnitArray: PropTypes.array,
    defenderRace: PropTypes.object,
    defenderRaceArray: PropTypes.array,
    defenderUnit: PropTypes.object,
    defenderUnitArray: PropTypes.array,
    forcesArray: PropTypes.array,
    pageType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forcesArray: state.forcesReducer.forcesArray,
    attackerRace: state.attackerReducer.attackerRace,
    attackerRaceArray: state.attackerReducer.attackerRaceArray,
    attackerUnit: state.attackerReducer.attackerUnit,
    attackerUnitArray: state.attackerReducer.attackerUnitArray,
    defenderRace: state.defenderReducer.defenderRace,
    defenderUnitArray: state.defenderReducer.defenderUnitArray,
    defenderUnit: state.defenderReducer.defenderUnit
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCalc);