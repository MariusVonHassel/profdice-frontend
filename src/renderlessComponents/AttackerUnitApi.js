import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAttackerUnit, setAttackerUnitArray, setAttackerSaveUnits, fetchAttackerUnits } from "../actions/attackerActions";

export class AttackerUnitApi extends Component {

    componentDidUpdate(prevProps) {

        console.log('update');

        if (this.props.attackerRace.length < 1) {
            this.props.onSetAttackerUnitArray([]);
            this.props.onSetAttackerUnit([]);
        } else {
            this.fetchHandler(prevProps);
            if (this.props.fetchAttackerUnits['id'] !== prevProps.fetchAttackerUnits['id']) {
                this.saveUnits();
            }
            this.prepareUnitArray();

        }

    }

    fetchHandler(prevProps) {

        if (prevProps.attackerRace.length < this.props.attackerRace.length) {

            this.props.attackerRace.forEach(item => {
                this.props.onFetchAttackerUnit(item.value);
            });

        }

    }

    saveUnits() {

        if (!(this.props.attackerSaveUnits.find(key => key.id === this.props.fetchAttackerUnits['id']))) {

            let newFetch = this.props.attackerSaveUnits;
            newFetch.push(this.props.fetchAttackerUnits);

            this.props.onSetAttackerSaveUnits(newFetch);

        }

    }

    prepareUnitArray() {

        let selectableUnits = [];
        let unitMatch = {};

        this.props.attackerRace.forEach(item => {

            unitMatch = this.props.attackerSaveUnits.find(key => key.id === item.value);

            if (unitMatch) {
                unitMatch['unitIds'].forEach(item => {
                    selectableUnits.push({value: item, label: this.context.t(item), race: item.value});
                });
            }

        });

        this.props.onSetAttackerUnitArray(selectableUnits);

    }

    render() {

        return null;

    }

}

AttackerUnitApi.contextTypes = {
    t: PropTypes.func.isRequired,
    attackerRace: PropTypes.array,
    attackerSaveUnits: PropTypes.array,
    fetchAttackerUnits: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    attackerRace: state.attackerReducer.attackerRace,
    attackerSaveUnits: state.attackerReducer.attackerSaveUnits,
    fetchAttackerUnits: state.attackerReducer.fetchAttackerUnits
});

const mapDispatchToProps = dispatch => {
    return {
        onSetAttackerUnitArray: (newState) => {
            dispatch(setAttackerUnitArray(newState));
        },
        onSetAttackerUnit: (newState) => {
            dispatch(setAttackerUnit(newState));
        },
        onSetAttackerSaveUnits: (newState) => {
        dispatch(setAttackerSaveUnits(newState));
        },
        onFetchAttackerUnit: (race) => {
            dispatch(fetchAttackerUnits(race));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttackerUnitApi);