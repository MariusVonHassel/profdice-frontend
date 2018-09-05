import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { setPageType } from '../../actions/pageTypeActions';
import { setAttackerRace, setAttackerUnit } from '../../actions/attackerActions'
import { setDefenderRace, setDefenderUnit } from '../../actions/defenderActions'
import IconButton from '../../components/Buttons/IconButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import CalcContainer from '../../container/CalcContainer/CalcContainer';

export class NewCalc extends Component {

    render() {

        return (

            <div className='newCalc'>

                <Breadcrumb />

                <div className='newCalc-titleWrapper headline headline-1'>

                    <IconButton
                        className='headline-title button button--attacker'
                        iconClass='material-icons button-icon'
                        iconName='colorize'
                    >{this.context.t('attacker')}</IconButton>

                </div>


                <CalcContainer
                    selectDiscriptionHeadline={this.context.t('races')}
                    value={this.props.attackerRace}
                    onChange={(value)=>{this.props.onSetAttackerRace({ value })}}
                    placeholder={this.context.t('selectYourRace')}
                    multi={true}
                    options={[
                        {value: 'Ultramarines', label: 'Ultramarines'},
                        {value: 'Necrons', label: 'Necrons'},
                    ]}
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

                <div className='newCalc-titleWrapper headline headline-1'>

                    <IconButton
                        className='headline-title button button--defender'
                        iconClass='material-icons button-icon'
                        iconName='security'
                    >{this.context.t('defender')}</IconButton>

                </div>

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
    pageType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCalc);