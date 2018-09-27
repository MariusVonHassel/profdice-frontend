import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPageType } from "../actions/pageTypeActions";
import { fetchForces } from "../actions/forceAction";
import { setForcesArray } from "../actions/forceAction";
import { fetchAllUnits, setFetchedUnits } from "../actions/allUnitsAction";
import { setAttackerRace, setAttackerUnit, setAttackerUnitArray } from "../actions/attackerActions";
import { setDefenderRace, setDefenderUnit, setDefenderUnitArray } from "../actions/defenderActions";

export class SelectDataHandler extends Component {

    componentWillMount() {
        (this.props.forces.length < 1 && this.props.onFetchForces());
    }

    componentDidUpdate() {

        (this.props.forces.length > 0 && this.props.forcesArray.length === 0) && this.props.onSetForcesArray(this.changeArrayStucture(this.props.forces, 1));

        this.setAttackerForm();

        this.setDefenderForm();

    }

    setDefenderForm() {
        if (this.props.defenderRace.hasOwnProperty('value')) {

            if (!this.props.fetchedUnits.find(key => key.id === this.props.defenderRace.value)) {

                this.fetchHandler(this.props.fetchedUnits, this.props.defenderRace.value);

            } else if (this.props.fetchedUnits.length > 0) {

                let defenderArray = this.changeUnitArrayStucture(this.prepareUnits([this.props.defenderRace]), 1);

                if (this.props.defenderUnitArray.length !== defenderArray.length) {
                    this.props.onSetDefenderUnitArray(defenderArray);
                }

            }


        }  else if (this.props.defenderUnitArray.length > 0) {
                this.props.onSetDefenderUnitArray([]);
                this.props.onSetDefenderUnit({});
        }
    }

    setAttackerForm() {
        if (this.props.attackerRace.length > 0) {

            if (!this.selectedForceShowsItsUnits(this.props.attackerRace)) {

                if (this.props.fetchedUnits.length > 0) {

                    let attackerArray = this.changeUnitArrayStucture(this.prepareUnits(this.props.attackerRace), 1);

                    if (this.props.attackerUnitArray.length !== attackerArray.length) {
                        this.props.onSetAttackerUnitArray(attackerArray);
                    }

                }

            }

        }  else if (this.props.attackerRace.length === 0 && this.props.attackerUnitArray.length > 0) {

            this.props.onSetAttackerUnitArray([]);
            this.props.onSetAttackerUnit([]);

        }
    }

    prepareUnits(arrayValues) {
        let units = [];
        let unitsTmp = [];

        arrayValues.forEach(item => {

            unitsTmp = this.props.fetchedUnits.find(key => key.id === item.value);

            unitsTmp['unitIds'].forEach(elem => {

                units.push({unitName: elem, race: item.value});

            });
        });

        return units;

    }

    fetchHandler(arrayValues, findKey) {

        let match = arrayValues.find(key => key.id === findKey);

        if (match === undefined && findKey === this.props.allUnits.id) {
            let newFetch = arrayValues;
            (newFetch.length > 0) ? this.props.onSetFetchedUnits(newFetch.push(this.props.allUnits)) : this.props.onSetFetchedUnits([this.props.allUnits]);
            return true;
        } else if (match === undefined) {
            this.props.onFetchAllUnits(findKey);
            return true;
        } else {
            return false;
        }

    }

    selectedForceShowsItsUnits(selectedValues) {

        selectedValues.forEach(item => {

            this.fetchHandler(this.props.fetchedUnits, item.value);

        });

    }

    changeUnitArrayStucture(obj, toObj) {

        let result = [];

        obj.forEach(item => {
            (toObj === 1) ? result.push({value: item.unitName, label: this.context.t(item.unitName), race: item.race}) : result.push(item.value);
        });

        return result;

    }

    changeArrayStucture(obj, toObj) {

        let result = [];

        obj.forEach(item => {
            (toObj === 1) ? result.push({value: item, label: this.context.t(item)}) : result.push(item.value);
        });

        return result;

    }

    render() {

        return null;

    }

}

SelectDataHandler.contextTypes = {
    t: PropTypes.func.isRequired
};

SelectDataHandler.propTypes = {
    pageType: PropTypes.string.isRequired,
    forces: PropTypes.array,
    forcesArray: PropTypes.array,
    attackerRace: PropTypes.array,
    attackerUnitArray: PropTypes.array,
    defenderRace: PropTypes.object,
    allUnits: PropTypes.object,
    fetchedUnits: PropTypes.array
};

const mapStateToProps = state => ({
    allUnits: state.allUnitsReducer.allUnits,
    fetchedUnits: state.allUnitsReducer.fetchedUnits,
    attackerRace: state.attackerReducer.attackerRace,
    attackerUnit: state.attackerReducer.attackerUnit,
    attackerUnitArray: state.attackerReducer.attackerUnitArray,
    defenderRace: state.defenderReducer.defenderRace,
    defenderUnit: state.defenderReducer.defenderUnit,
    defenderUnitArray: state.defenderReducer.defenderUnitArray,
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forces: state.forcesReducer.forces,
    forcesArray: state.forcesReducer.forcesArray,

});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        },
        onSetForcesArray: (newState) => {
            dispatch(setForcesArray(newState));
        },
        onSetAttackerRace: (newState) => {
            dispatch(setAttackerRace(newState));
        },
        onSetAttackerUnit: (newState) => {
        dispatch(setAttackerUnit(newState));
        },
        onSetAttackerUnitArray: (newState) => {
            dispatch(setAttackerUnitArray(newState));
        },
        onSetDefenderRace: (newState) => {
            dispatch(setDefenderRace(newState));
        },
        onSetDefenderUnit: (newState) => {
            dispatch(setDefenderUnit(newState));
        },
        onSetDefenderUnitArray: (newState) => {
            dispatch(setDefenderUnitArray(newState));
        },
        onFetchAllUnits: (raceName) => {
            dispatch(fetchAllUnits(raceName));
        },
        onSetFetchedUnits: (newState) => {
            dispatch(setFetchedUnits(newState));
        },
        onFetchForces: () => {
            dispatch(fetchForces());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDataHandler);