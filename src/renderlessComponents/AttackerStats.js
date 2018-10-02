import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAttackerStatsCollection } from '../actions/attackerActions';

export class AttackerStats extends Component {

    componentDidUpdate(prevProps) {

        if (this.props.fetchAttackerStats.valueOf('id') !== prevProps.fetchAttackerStats.valueOf('id')) {
            this.props.onSetAttackerStatsCollection(this.props.fetchAttackerStats, prevProps.attackerStatsCollection);
        }

    }

    render() {
        return null;
    }

}

AttackerStats.contextTypes = {
    t: PropTypes.func.isRequired,
    fetchAttackerStats: PropTypes.object,
    attackerStatsCollection: PropTypes.array
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    fetchAttackerStats: state.attackerReducer.fetchAttackerStats,
    attackerStatsCollection: state.attackerReducer.attackerStatsCollection
});

const mapDispatchToProps = dispatch => {
    return {
        onSetAttackerStatsCollection: (newState, state) => {
            dispatch(setAttackerStatsCollection(newState, state));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttackerStats);
