import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDefenderUnit, setDefenderUnitArray, setDefenderSaveUnits, fetchDefenderUnits } from "../actions/defenderActions";
import { prepareSelectValues, saveUnits } from '../statelessFunctionalComponents/prepareSelectValues';

export class DefenderUnitApi extends Component {

    componentDidUpdate(prevProps) {

        if (!(this.props.defenderRace.hasOwnProperty('value'))) {
            this.props.onSetDefenderUnitArray([]);
            this.props.onSetDefenderUnit({});
        } else {
            this.fetchHandler(prevProps);
            if (this.props.fetchDefenderUnits['id'] !== prevProps.fetchDefenderUnits['id']) {
                this.props.onSetDefenderSaveUnits(saveUnits(this.props.defenderSaveUnits, this.props.fetchDefenderUnits));
            }
            this.prepareUnitArray();
        }
    }

    fetchHandler(prevProps) {

        if (this.props.defenderRace.hasOwnProperty('value') !== prevProps.defenderRace.hasOwnProperty('value')) {
            this.props.onFetchDefenderUnit(this.props.defenderRace.value);
        } else if (this.props.defenderRace['value'] !== prevProps.defenderRace['value']) {
            this.props.onFetchDefenderUnit(this.props.defenderRace.value);
        }

    }

    prepareUnitArray() {

        this.props.onSetDefenderUnitArray(prepareSelectValues(this.props.defenderSaveUnits, this.props.defenderRace, this.context));

    }

    render() {

        return null;
    }

}

DefenderUnitApi.contextTypes = {
    t: PropTypes.func.isRequired,
    defenderRace: PropTypes.array,
    defenderSaveUnits: PropTypes.array,
    fetchDefenderUnits: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    defenderRace: state.defenderReducer.defenderRace,
    defenderSaveUnits: state.defenderReducer.defenderSaveUnits,
    fetchDefenderUnits: state.defenderReducer.fetchDefenderUnits
});

const mapDispatchToProps = dispatch => {
    return {
        onSetDefenderUnitArray: (newState) => {
            dispatch(setDefenderUnitArray(newState));
        },
        onSetDefenderUnit: (newState) => {
            dispatch(setDefenderUnit(newState));
        },
        onSetDefenderSaveUnits: (newState) => {
            dispatch(setDefenderSaveUnits(newState));
        },
        onFetchDefenderUnit: (race) => {
            dispatch(fetchDefenderUnits(race));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefenderUnitApi);