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

        values.forces.forEach((item) => {
            options.push({value: item, label: this.context.t(item)});
        });

        return options;

    }

    render() {

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
                    onChange={(value)=>{this.props.onSetAttackerRace({ value })}}
                    placeholder={this.context.t('selectYourRace')}
                    multi={true}
                    options={(this.props.forces) ? this.configureOptions(this.props.forces) : null}
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('units')}
                    value={this.props.attackerUnit}
                    onChange={(value)=>{this.props.onSetAttackerUnit({ value })}}
                    placeholder={this.context.t('selectYourUnits')}
                    multi={true}
                    options={[
                        {value: 'Phantasia', label: 'Phantasia'},
                        {value: 'Bueno', label: 'Bueno'},
                    ]}
                />

                <SelectionMenuHeadline
                    iconName='security'
                    headlineText={this.context.t('defender')}
                    buttonType='button--defender'
                />

                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('race')}
                    value={this.props.defenderRace.value}
                    onChange={(value)=>{this.props.onSetDefenderRace({ value })}}
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
                    onChange={(value)=>{this.props.onSetDefenderUnit({ value })}}
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
    forces: PropTypes.object,
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
        onFetchAllUnits: () => {
            dispatch(fetchAllUnits());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCalc);