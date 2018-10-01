import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SubmitButton from '../../components/Buttons/SubmitButton';
import { setPageType } from '../../actions/pageTypeActions';
import { fetchAttackerStats } from '../../actions/attackerActions';
import { fetchDefenderStats } from '../../actions/defenderActions';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import DropdownMenu from '../../components/Menu/DropdownMenu';
import AttackerStats from '../../renderlessComponents/AttackerStats'

class UnitSettings extends Component {

    componentWillMount() {

        (this.checkValidInput() && this.fetchUnitStats())
    }

    componentDidUpdate() {
        // console.log(this.props.);

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
            this.props.onFetchAttackerStats(item.race, item.value);
        });


            this.props.onFetchDefenderStats(this.props.defenderUnit.race, this.props.defenderUnit.value);



    }

    render() {

        return(
            <div className='unitSettings'>

                <AttackerStats />

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

export default connect(mapStateToProps, mapDispatchToProps)(UnitSettings);