import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPageType } from "../actions/pageTypeActions";
import { fetchForces } from "../actions/forceAction";
import { setForcesArray } from "../actions/forceAction";

export class ApiHandler extends Component {

    componentWillMount() {
        this.props.onFetchForces();
    }

    componentDidUpdate() {
        (this.props.forces !== undefined && this.props.forces.length > 0) && this.changeArrayStucture(this.props.forces, 1);
    }

    changeArrayStucture(obj, toObj) {
        let result = [];

        obj.forEach(item => {
            (toObj === 1) ? result.push({value: item, label: this.context.t(item)}) : result.push(item.value);
        });

        this.props.onSetForcesArray(result);

    }

    render() {

        return null;

    }

}

ApiHandler.contextTypes = {
    t: PropTypes.func.isRequired
};

ApiHandler.propTypes = {
    pageType: PropTypes.string.isRequired,
    forces: PropTypes.array,

};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forces: state.forcesReducer.forces,
});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        },
        onSetForcesArray: (newState) => {
            dispatch(setForcesArray(newState));
        },
        onFetchForces: () => {
            dispatch(fetchForces());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHandler);