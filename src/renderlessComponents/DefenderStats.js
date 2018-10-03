import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDefenderStatsCollection } from '../actions/defenderActions';

export class DefenderStats extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.fetchDefenderStats.valueOf('id') !== prevProps.fetchDefenderStats.valueOf('id')) {
            this.props.onSetDefenderStatsCollection(this.props.fetchDefenderStats);
        }

    }

    render() {
        return null;
    }

}

DefenderStats.contextTypes = {
    t: PropTypes.func.isRequired,
    fetchDefenderStats: PropTypes.object,
    defenderStatsCollection: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    fetchDefenderStats: state.defenderReducer.fetchDefenderStats,
    defenderStatsCollection: state.defenderReducer.defenderStatsCollection
});

const mapDispatchToProps = dispatch => {
    return {
        onSetDefenderStatsCollection: (newState) => {
            dispatch(setDefenderStatsCollection(newState));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefenderStats);