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
    choosedAttackerData: PropTypes.array,
    choosedDefenderData: PropTypes.object
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    choosedAttackerData: state.attackerReducer.choosedAttackerData,
    choosedDefenderData: state.defenderReducer.choosedDefenderData
});

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculationHandler);