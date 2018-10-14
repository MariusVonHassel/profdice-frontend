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

        this.props.fetchAttackerStats.weapon.ranged.replacement.forEach((item, index) => {

            rangedWeaponsJSONStr += `{`;
            rangedWeaponsJSONStr += `"weaponId": "${item.id}",`;
            rangedWeaponsJSONStr += `"AP": "${item.AP}",`;
            rangedWeaponsJSONStr += `"D": "${item.D}",`;
            rangedWeaponsJSONStr += `"S": ${item.S},`;
            rangedWeaponsJSONStr += `"weaponMode": "${item.weaponMode}",`;
            rangedWeaponsJSONStr += `"weaponModeCount": "${item.weaponModeCount}",`;
            rangedWeaponsJSONStr += `"count": "${this.props.fetchAttackerStats.count.default}",`;
            rangedWeaponsJSONStr += `"weaponAbility": ${JSON.stringify(item.weaponAbility)},`;
            rangedWeaponsJSONStr += `"additionalAttacks": 0,`;
            rangedWeaponsJSONStr += `"autoHit": false,`;
            rangedWeaponsJSONStr += `"woundRerollModifier": 0,`;
            rangedWeaponsJSONStr += `"hitRerollModifier": 1,`;
            rangedWeaponsJSONStr += `"weaponType": "${item.weaponType}",`;
            rangedWeaponsJSONStr += `"hitCPModifier": 0,`;
            rangedWeaponsJSONStr += `"woundCPModifier": 0,`;
            rangedWeaponsJSONStr += `"damageCPModifier": 0,`;
            rangedWeaponsJSONStr += `"strengthModifier": 0,`;
            rangedWeaponsJSONStr += `"damageModifier": 0,`;
            rangedWeaponsJSONStr += `"svModifier": 0,`;
            rangedWeaponsJSONStr += `"toWoundModifier": 0`;
            rangedWeaponsJSONStr += `}`;

            if (this.props.fetchAttackerStats.weapon.ranged.replacement.length !== (index + 1)) {
                rangedWeaponsJSONStr += `,`;
            }

        });

        rangedWeaponsJSONStr += `]`;

        rangedWeaponsJSONStr = JSON.parse(rangedWeaponsJSONStr);

        let meleeWeaponsJSONStr = `[`;

        this.props.fetchAttackerStats.weapon.melee.default.forEach((item, index) => {

            meleeWeaponsJSONStr += `{`;
            meleeWeaponsJSONStr += `"weaponId": "${item.id}",`;
            meleeWeaponsJSONStr += `"AP": "${item.AP}",`;
            meleeWeaponsJSONStr += `"D": "${item.D}",`;
            meleeWeaponsJSONStr += `"S": ${item.S},`;
            meleeWeaponsJSONStr += `"count": "${this.props.fetchAttackerStats.count.default}",`;
            meleeWeaponsJSONStr += `"weaponAbility": ${JSON.stringify(item.weaponAbility)},`;
            meleeWeaponsJSONStr += `"additionalAttacks": 0,`;
            meleeWeaponsJSONStr += `"autoHit": false,`;
            meleeWeaponsJSONStr += `"woundRerollModifier": 0,`;
            meleeWeaponsJSONStr += `"hitRerollModifier": 0,`;
            //addition, user, special, multiplication
            meleeWeaponsJSONStr += `"strengthType": "addition",`;
            meleeWeaponsJSONStr += `"weaponType": "${item.weaponType}",`;
            meleeWeaponsJSONStr += `"hitCPModifier": 0,`;
            meleeWeaponsJSONStr += `"woundCPModifier": 0,`;
            meleeWeaponsJSONStr += `"damageCPModifier": 0,`;
            meleeWeaponsJSONStr += `"strengthModifier": 0,`;
            meleeWeaponsJSONStr += `"damageModifier": 2,`;
            meleeWeaponsJSONStr += `"svModifier": 0,`;
            meleeWeaponsJSONStr += `"toWoundModifier": 0`;

            meleeWeaponsJSONStr += `}`;

            if (this.props.fetchAttackerStats.weapon.melee.default.length !== (index + 1)) {
                meleeWeaponsJSONStr += `,`;
            }

        });

        meleeWeaponsJSONStr += `]`;
        meleeWeaponsJSONStr = JSON.parse(meleeWeaponsJSONStr);

        const unit = {
            'id': this.props.fetchAttackerStats.id,
            'stats': this.props.fetchAttackerStats.stats,
            'count': this.props.fetchAttackerStats.count.default,
            'weapon': {
                ranged: rangedWeaponsJSONStr,
                melee: meleeWeaponsJSONStr
            },
            'BSModification': 0,
            'overwatch': false,
            'toughnessModification': 0,
            'saveCPModifier': 1,
            'Modifier': 0,
            'abilities': []
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
