import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAttackerUnit, setAttackerUnitArray, setAttackerSaveUnits, fetchAttackerUnits } from "../actions/attackerActions";
import { prepareSelectValues, saveUnits } from '../statelessFunctionalComponents/prepareSelectValues';

/*

 */
export class AttackerUnitApi extends Component {

    componentDidUpdate(prevProps) {

        if (this.props.attackerRace.length < 1) {
            this.props.onSetAttackerUnitArray([]);
            this.props.onSetAttackerUnit([]);
        } else {
            this.fetchHandler(prevProps);
            if (this.props.fetchAttackerUnits['id'] !== prevProps.fetchAttackerUnits['id']) {
                this.props.onSetAttackerSaveUnits(saveUnits(this.props.attackerSaveUnits, this.props.fetchAttackerUnits));
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

    prepareUnitArray() {

        let selectableUnits = [];

        this.props.attackerRace.forEach(item => {

            selectableUnits = prepareSelectValues(this.props.attackerSaveUnits, item, this.context, selectableUnits);

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