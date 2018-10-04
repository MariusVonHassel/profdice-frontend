import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalculationCalls from '../statelessFunctionalComponents/calculation/CalculationCalls';

class CalculationHandler extends Component {

    componentWillMount() {
        const calc1 = new CalculationCalls(this.props.attackerStatsCollection[0], this.props.defenderStatsCollection);


    }

    render() {
        return (
            <div>
                42
            </div>
        );
    }

}

CalculationHandler.contextTypes = {
    t: PropTypes.func.isRequired
};

CalculationHandler.propTypes = {
    attackerStatsCollection: PropTypes.array,
    defenderStatsCollection: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    attackerStatsCollection: state.attackerReducer.attackerStatsCollection,
    defenderStatsCollection: state.defenderReducer.defenderStatsCollection
});

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculationHandler);