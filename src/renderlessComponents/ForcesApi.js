import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setForcesArray } from "../actions/forceAction";
import { fetchForces } from "../actions/forceAction";

export class ForcesApi extends Component {

    componentWillMount() {
        (this.props.forces.length < 1 && this.props.onFetchForces());
    }

    componentDidUpdate() {
        this.props.onSetForcesArray(this.prepareSelectValues());
    }

    prepareSelectValues() {

        let forceValues = [];

        this.props.forces.forEach(item => {
            forceValues.push({value: item, label: this.context.t(item)});
        });

        return forceValues;
    }

    render() {

        return null;
    }

}

ForcesApi.contextTypes = {
    t: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    forces: state.forcesReducer.forces,
    lang: state.i18nState.lang
});

const mapDispatchToProps = dispatch => {
    return {
        onSetForcesArray: (newState) => {
            dispatch(setForcesArray(newState));
        },
        onFetchForces: () => {
            dispatch(fetchForces());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForcesApi);