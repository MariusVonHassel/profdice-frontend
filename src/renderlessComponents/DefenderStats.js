import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDefenderStatsCollection } from '../actions/defenderActions';
import { setDefenderChoosedData } from "../actions/choosedDataActions";

export class DefenderStats extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.fetchDefenderStats.valueOf('id') !== prevProps.fetchDefenderStats.valueOf('id')) {
            this.props.onSetDefenderStatsCollection(this.props.fetchDefenderStats);

            this.prepareUnitSettings();
        }

    }

    prepareUnitSettings() {

        let rangedWeaponsJSONStr = `[`;

        this.props.fetchDefenderStats.weapon.ranged.default.forEach((item, index) => {

            rangedWeaponsJSONStr += `{`;
            rangedWeaponsJSONStr += `"weaponId": "${item.id}",`;
            rangedWeaponsJSONStr += `"AP": "${item.AP}",`;
            rangedWeaponsJSONStr += `"D": "${item.D}",`;
            rangedWeaponsJSONStr += `"S": ${item.S},`;
            rangedWeaponsJSONStr += `"weaponMode": "${item.weaponMode}",`;
            rangedWeaponsJSONStr += `"weaponModeCount": "${item.weaponModeCount}",`;
            rangedWeaponsJSONStr += `"count": "${this.props.fetchDefenderStats.count.default}",`;
            rangedWeaponsJSONStr += `"weaponAbility": ${JSON.stringify(item.weaponAbility)},`;
            rangedWeaponsJSONStr += `"additionalAttacks": 0,`;
            rangedWeaponsJSONStr += `"autoHit": false,`;
            rangedWeaponsJSONStr += `"woundRerollModifier": 0,`;
            rangedWeaponsJSONStr += `"hitRerollModifier": 0,`;
            rangedWeaponsJSONStr += `"weaponType": "${item.weaponType}",`;
            rangedWeaponsJSONStr += `"hitCPModifier": 0,`;
            rangedWeaponsJSONStr += `"woundCPModifier": 0,`;
            rangedWeaponsJSONStr += `"damageCPModifier": 0,`;
            rangedWeaponsJSONStr += `"strengthModifier": 0,`;
            rangedWeaponsJSONStr += `"damageModifier": 0,`;
            rangedWeaponsJSONStr += `"svModifier": 0,`;
            rangedWeaponsJSONStr += `"toWoundModifier": 0`;
            rangedWeaponsJSONStr += `}`;

            if (this.props.fetchDefenderStats.weapon.ranged.default.length !== (index + 1)) {
                rangedWeaponsJSONStr += `,`;
            }

        });

        rangedWeaponsJSONStr += `]`;

        rangedWeaponsJSONStr = JSON.parse(rangedWeaponsJSONStr);

        let meleeWeaponsJSONStr = `[`;

        this.props.fetchDefenderStats.weapon.melee.default.forEach((item, index) => {

            meleeWeaponsJSONStr += `{`;
            meleeWeaponsJSONStr += `"weaponId": "${item.id}",`;
            meleeWeaponsJSONStr += `"AP": "${item.AP}",`;
            meleeWeaponsJSONStr += `"D": "${item.D}",`;
            meleeWeaponsJSONStr += `"S": ${item.S},`;
            meleeWeaponsJSONStr += `"count": "${this.props.fetchDefenderStats.count.default}",`;
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
            meleeWeaponsJSONStr += `"damageModifier": 0,`;
            meleeWeaponsJSONStr += `"svModifier": 0,`;
            meleeWeaponsJSONStr += `"rangedSvModifier": 0,`;
            meleeWeaponsJSONStr += `"toWoundModifier": 0`;
            meleeWeaponsJSONStr += `}`;

            if (this.props.fetchDefenderStats.weapon.melee.default.length !== (index + 1)) {
                meleeWeaponsJSONStr += `,`;
            }

        });

        meleeWeaponsJSONStr += `]`;
        meleeWeaponsJSONStr = JSON.parse(meleeWeaponsJSONStr);

        const unit = {
            'id': this.props.fetchDefenderStats.id,
            'stats': this.props.fetchDefenderStats.stats,
            'count': this.props.fetchDefenderStats.count.default,
            'weapon': {
                ranged: rangedWeaponsJSONStr,
                melee: meleeWeaponsJSONStr
            },
            'BSModification': 0,
            'toughnessModification': 0,
            'saveCPModifier': 0,
            'overwatch': true,
            'abilities': []
        };

        console.log(unit);

        this.props.onSetDefenderChoosedData(unit, this.props.choosedDefenderData);
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
        },
        onSetDefenderChoosedData: (newState, state) => {
            dispatch(setDefenderChoosedData(newState, state));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefenderStats);