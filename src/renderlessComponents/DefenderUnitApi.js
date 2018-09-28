import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDefenderUnit, setDefenderUnitArray, setDefenderSaveUnits, fetchDefenderUnits } from "../actions/defenderActions";

export class DefenderUnitApi extends Component {

    componentDidUpdate(prevProps) {

        console.log('update');

        if (!(this.props.defenderRace.hasOwnProperty('value'))) {
            this.props.onSetDefenderUnitArray([]);
            this.props.onSetDefenderUnit({});
        } else {
            this.fetchHandler(prevProps);
            if (this.props.fetchDefenderUnits['id'] !== prevProps.fetchDefenderUnits['id']) {
                this.saveUnits();
            }
            this.prepareUnitArray();
        }
    }

    fetchHandler(prevProps) {

        console.log(this.props.defenderRace);
        console.log(prevProps.defenderRace);
        //
        if (this.props.defenderRace.hasOwnProperty('value') !== prevProps.defenderRace.hasOwnProperty('value')) {
            this.props.onFetchDefenderUnit(this.props.defenderRace.value);
        } else if (this.props.defenderRace['value'] !== prevProps.defenderRace['value']) {
            this.props.onFetchDefenderUnit(this.props.defenderRace.value);
        }

    }

    saveUnits() {

        if (!(this.props.defenderSaveUnits.find(key => key.id === this.props.fetchDefenderUnits['id']))) {

            let newFetch = this.props.defenderSaveUnits;
            newFetch.push(this.props.fetchDefenderUnits);

            this.props.onSetDefenderSaveUnits(newFetch);
        }

    }

    prepareUnitArray() {

        let selectableUnits = [];

        let unitMatch = this.props.defenderSaveUnits.find(key => key.id ===  this.props.defenderRace.value);

        if (unitMatch) {
            unitMatch['unitIds'].forEach(item => {
                selectableUnits.push({value: item, label: this.context.t(item), race: unitMatch.id});
            });
        }

        this.props.onSetDefenderUnitArray(selectableUnits);

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