import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SubmitButton from '../../components/Buttons/SubmitButton';
import { setPageType } from '../../actions/pageTypeActions';
import {
    fetchUnitStats,
    setAttackerUnitStats,
    setDefenderUnitStats,
    setFetchedUnitStatsCollection
} from "../../actions/unitStatsAction";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import DropdownMenu from '../../components/Menu/DropdownMenu';

class UnitSettings extends Component {

    componentWillMount() {

        (this.checkValidInput() && this.fetchUnitStats())
    }

    componentDidUpdate() {
        console.log(this.props.fetchedUnitStats);

    }

    checkValidInput() {
        if (this.props.attackerUnit.length > 0 && this.props.defenderUnit.hasOwnProperty('value')) {
            this.props.onSetPageType('unitSettings');
            return true;
        } else {
            this.props.onSetPageType('newCalc');
            this.props.history.push('/new-calculation');
            return false;
        }
    }

    fetchUnitStats() {

        this.props.attackerUnit.forEach(item => {
            this.props.onFetchUnitStats(item.race, item.value);
        });


    }

    render() {

        return(
            <div className='unitSettings'>

                <Breadcrumb />

                <DropdownMenu />

                <SubmitButton
                    className=' btn unitSettings-submit'
                    onClick={()=>{this.props.onSetPageType('summary')}}
                    path='/summary'
                >
                    {this.context.t('confirmSelection')}
                </SubmitButton>
            </div>
        );
    }
}

UnitSettings.contextTypes = {
    t: PropTypes.func.isRequired
};

UnitSettings.propTypes = {
    pageType: PropTypes.string.isRequired,
    attackerUnit: PropTypes.array.isRequired,
    defenderUnit: PropTypes.object.isRequired,
    attackerUnitStats: PropTypes.array,
    defenderUnitStats: PropTypes.object,
    fetchedUnitStats: PropTypes.object,
    fetchedUnitStatsCollection: PropTypes.array
};

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        },
        onFetchUnitStats: (race, unitName) => {
            dispatch(fetchUnitStats(race, unitName));
        },
        onSetAttackerUnitStats: (newState) => {
            dispatch(setAttackerUnitStats(newState));
        },
        onSetDefenderUnitStats: (newState) => {
            dispatch(setDefenderUnitStats(newState));
        },
        onSetFetchedUnitStatsCollection: (newState) => {
            dispatch(setFetchedUnitStatsCollection(newState));
        }
    }
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    attackerUnit: state.attackerReducer.attackerUnit,
    defenderUnit: state.defenderReducer.defenderUnit,
    attackerUnitStats: state.unitStatsReducer.attackerUnitStats,
    defenderUnitState: state.unitStatsReducer.defenderUnitStats,
    fetchedUnitStats: state.unitStatsReducer.fetchedUnitStats,
    fetchedUnitStatsCollection: state.unitStatsReducer.fetchedUnitStatsCollection
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitSettings);