import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAttackerUnit, setAttackerUnitArray, fetchAttackerUnits } from "../actions/attackerActions";

export class AttackerUnitApi extends Component {

    componentDidUpdate(prevProps) {

        if (this.props.attackerRace.length < 1) {
            this.props.onSetAttackerUnitArray([]);
            this.props.onSetAttackerUnit([]);
        } else {
            this.fetchHandler(prevProps);
            this.prepareUnitArray(prevProps);
        }

    }

    fetchHandler(prevProps) {

        if (prevProps.attackerRace.length !== this.props.attackerRace.length) {

            this.props.attackerRace.forEach(item => {
                this.props.onFetchAttackerUnit(item.value);
            });

        }

    }

    prepareUnitArray(prevProps) {

        // console.log(prevProps);
        // console.log('reaver');

        //if ()

        // this.props.onSetAttackerUnit(this.props.fetchedAttackerUnits);

        console.log(this.props.fetchedAttackerUnits);

    }

    render() {

        return null;

    }

}

AttackerUnitApi.contextTypes = {
    t: PropTypes.func.isRequired,
    attackerRace: PropTypes.array,
    fetchAttackerUnits: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    attackerRace: state.attackerReducer.attackerRace,
    fetchedAttackerUnits: state.attackerReducer.fetchedAttackerUnits
});

const mapDispatchToProps = dispatch => {
    return {
        onSetAttackerUnitArray: (newState) => {
            dispatch(setAttackerUnitArray(newState));
        },
        onSetAttackerUnit: (newState) => {
            dispatch(setAttackerUnit(newState));
        },
        onFetchAttackerUnit: (race) => {
            dispatch(fetchAttackerUnits(race));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttackerUnitApi);