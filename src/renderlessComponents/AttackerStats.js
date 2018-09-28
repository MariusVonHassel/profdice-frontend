import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class AttackerStats extends Component {

    componentDidUpdate(prevProps) {

    }

    render() {
        return null;
    }

}

AttackerStats.contextTypes = {
    t: PropTypes.func.isRequired,
    fetchedAttackerStats: PropTypes.object,
    fetchedAttackerStatsCollection: PropTypes.array
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    fetchedAttackerStats: state.attackerReducer.fetchedAttackerStats,
    fetchedAttackerStatsCollection: state.attackerReducer.fetchedAttackerStatsCollection
});

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttackerStats);
