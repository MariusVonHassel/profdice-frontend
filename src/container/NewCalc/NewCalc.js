import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { setPageType } from '../../actions/pageTypeActions';
import { setAttackerRace, setAttackerUnit } from '../../actions/attackerActions'
import { setDefenderRace, setDefenderUnit } from '../../actions/defenderActions'
import SubmitButton from '../../components/Buttons/SubmitButton';
import CalcContainer from '../../container/CalcContainer/CalcContainer';
import SelectionMenuHeadline from "../../components/Menu/SelectionMenuHeadline";
import { fetchForces } from "../../actions/forceAction";
import { fetchAllUnits } from "../../actions/allUnitsAction";

export class NewCalc extends Component {

    componentWillMount() {
        this.props.onSetPageType('newCalc');
        this.props.onFetchForces();
    }

    configureOptions(values) {

        let options = [];

        values.forEach((item) => {
            options.push({value: item, label: this.context.t(item)});
        });

        return options;

    }

    prepareApiCall(values) {

        let races = [];

        values.forEach(item => {
            races.push(item.value);
        });

        this.props.onFetchAllUnits(races, this.props.allUnits);
    }

    configureUnitOptions () {

       let options = [{value: 'tets', label: 'sdsad'}];
       let forcesSummary = [this.props.allUnits.currentState, this.props.allUnits.payload];

       console.log(forcesSummary);

       forcesSummary.forEach(obj => {
           console.log(obj);
       });

       this.props.forces.forEach(force => {

           //console.log(forcesSummary['necrons']);

           //forcesSummary[force].forEach(item =>  {

               //console.log(item);

               //console.log(item[force]);

           //});

       });


            //console.log(this.props.allUnits['currentState']);

            //(this.props.allUnits[item]) ? : ;

            //item.forEach(unit => {
              //  console.log(unit);

            //    options.push({value: unit, label: this.context.t(unit)});
            //});


        //console.log(options);

        return options;
    }

    render() {

        //console.log(this.props.forces);



        return (

            <div className='newCalc'>

                <Breadcrumb />

                <SelectionMenuHeadline
                    iconName='colorize'
                    headlineText={this.context.t('attacker')}
                    buttonType='button--attacker'
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('races')}
                    value={this.props.attackerRace}
                    onChange={(value)=>{this.props.onSetAttackerRace(value); this.prepareApiCall(value);}}
                    placeholder={this.context.t('selectYourRace')}
                    multi={true}
                    options={(this.props.forces) ? this.configureOptions(this.props.forces) : []}
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('units')}
                    value={this.props.attackerUnit}
                    onChange={(value)=>{this.props.onSetAttackerUnit(value);}}
                    placeholder={this.context.t('selectYourUnits')}
                    multi={true}
                    options={(this.props.attackerRace.length > 0) ? this.configureUnitOptions() : []}
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
    attackerUnit: PropTypes.array.isRequired,
    defenderRace: PropTypes.object.isRequired,
    defenderUnit: PropTypes.object.isRequired,
    forces: PropTypes.array,
    allUnits: PropTypes.object,
    pageType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forces: state.forcesReducer.payload,
    allUnits: state.allUnitsReducer,
    attackerRace: state.attackerReducer.attackerRace,
    attackerUnit: state.attackerReducer.attackerUnit,
    defenderRace: state.defenderReducer.defenderRace,
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
        },
        onFetchForces: () => {
            dispatch(fetchForces());
        },
        onFetchAllUnits: (raceName, currentState) => {
            dispatch(fetchAllUnits(raceName, {'spacemarines': ['immo']}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCalc);