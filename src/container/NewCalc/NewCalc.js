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
import ApiHandler from '../../renderlessComponents/ApiHandler';

export class NewCalc extends Component {

    componentWillMount() {
        this.props.onSetPageType('newCalc');
    }

    // configureUnitOptions (selectedForces) {
    //
    //    let options = [];
    //    let forcesSummary = [this.props.allUnits.currentState, (this.props.allUnits.payload) ? this.props.allUnits.payload : {}];
    //
    //     if (selectedForces && forcesSummary) {
    //
    //         selectedForces.forEach(obj => {
    //
    //             let match = forcesSummary.find(key => key.id === obj.value);
    //
    //             if (match !== undefined)  {
    //
    //                match.unitIds.forEach(item => {
    //                     options.push(item)
    //                 });
    //             }
    //
    //         });
    //
    //         options = this.changeArrayStucture(options, 1)
    //
    //     }
    //
    //     return options;
    // }

    render() {

        //console.log(this.props.attackerUnitArray);



        return (

            <div className='newCalc'>

                <ApiHandler />

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
                    onChange={(value)=>{this.props.onSetDefenderRace(value)}}
                    placeholder={this.context.t('selectYourRace')}
                    multi={false}
                    options={[
                        {value: 'Bären', label: 'Bären'},
                        {value: 'Affen', label: 'Affen'},
                    ]}
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('unit')}
                    value={this.props.defenderUnit.value}
                    onChange={(value)=>{this.props.onSetDefenderUnit(value)}}
                    placeholder={this.context.t('selectYourUnit')}
                    multi={false}
                    options={[
                        {value: 'Räder', label: 'Räder'},
                        {value: 'Autos', label: 'Autos'},
                    ]}
                />

                <SubmitButton
                    className=' btn newCalc-submit'
                    onClick={()=>{this.props.onSetPageType('unitSettings')}}
                    path='/unit-settings'

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
    attackerRace: PropTypes.array.isRequired,
    attackerRaceArray: PropTypes.array,
    attackerUnit: PropTypes.array.isRequired,
    attackerUnitArray: PropTypes.array,
    defenderRace: PropTypes.object.isRequired,
    defenderRaceArray: PropTypes.array,
    defenderUnit: PropTypes.object.isRequired,
    defenderUnitArray: PropTypes.array,
    forcesArray: PropTypes.array,
    allUnits: PropTypes.object,
    pageType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forcesArray: state.forcesReducer.forcesArray,
    allUnits: state.allUnitsReducer,
    attackerRace: state.attackerReducer.attackerRace,
    attackerRaceArray: state.attackerReducer.attackerRaceArray,
    attackerUnit: state.attackerReducer.attackerUnit,
    attackerUnitArray: state.attackerReducer.attackerUnitArray,
    defenderRace: state.defenderReducer.defenderRace,
    //defenderRaceArray: state.defenderReducer.defenderRaceArray,
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
            console.log(newState);
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