import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAttackerStatsCollection } from '../actions/attackerActions';
import { setAttackerChoosedData } from '../actions/choosedDataActions';

export class AttackerStats extends Component {

    componentDidUpdate(prevProps) {

        if (this.props.fetchAttackerStats.valueOf('id') !== prevProps.fetchAttackerStats.valueOf('id')) {
            this.props.onSetAttackerStatsCollection(this.props.fetchAttackerStats, prevProps.attackerStatsCollection);

            this.prepareUnitSettings();

        }

    }

    prepareUnitSettings() {

        let rangedWeaponsJSONStr = `[`;

        this.props.fetchAttackerStats.weapon.ranged.default.forEach((item, index) => {

            rangedWeaponsJSONStr += `{`;
            rangedWeaponsJSONStr += `"weaponId": "${item.id}",`;
            rangedWeaponsJSONStr += `"AP":"${item.AP}",`;
            rangedWeaponsJSONStr += `"D":"${item.D}",`;
            rangedWeaponsJSONStr += `"S":"${item.S}",`;
            rangedWeaponsJSONStr += `"weaponMode":"${item.weaponMode}",`;
            rangedWeaponsJSONStr += `"weaponModeCount":"${item.weaponModeCount}",`;
            rangedWeaponsJSONStr += `"count":"${this.props.fetchAttackerStats.count.default}",`;
            rangedWeaponsJSONStr += `"additionalAttacks": 0,`;
            rangedWeaponsJSONStr += `"autoHit": false,`;
            rangedWeaponsJSONStr += `"rerollModifier": 6`;
            rangedWeaponsJSONStr += `}`;

            if (this.props.fetchAttackerStats.weapon.ranged.default.length !== (index + 1)) {
                rangedWeaponsJSONStr += `,`;
            }

        });

        rangedWeaponsJSONStr += `]`;

        rangedWeaponsJSONStr = JSON.parse(rangedWeaponsJSONStr);

        const unit = {
            'id': this.props.fetchAttackerStats.id,
            'stats': this.props.fetchAttackerStats.stats,
            'count': this.props.fetchAttackerStats.count.default,
            'weapon': {
                ranged: rangedWeaponsJSONStr
            },
            'BSModification': 0,
            'overwatch': false
        };

        console.log(unit);

        this.props.onSetAttackerChoosedData(unit, this.props.choosedAttackerData);

    }

    render() {
        return null;
    }

}

AttackerStats.contextTypes = {
    t: PropTypes.func.isRequired,
    fetchAttackerStats: PropTypes.object,
    attackerStatsCollection: PropTypes.array,
    choosedAttackerData: PropTypes.array
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    fetchAttackerStats: state.attackerReducer.fetchAttackerStats,
    attackerStatsCollection: state.attackerReducer.attackerStatsCollection,
    choosedAttackerData: state.choosedDataReducer.choosedAttackerData
});

const mapDispatchToProps = dispatch => {
    return {
        onSetAttackerStatsCollection: (newState, state) => {
            dispatch(setAttackerStatsCollection(newState, state));
        },
        onSetAttackerChoosedData: (newState, state) => {
            dispatch(setAttackerChoosedData(newState, state));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttackerStats);
