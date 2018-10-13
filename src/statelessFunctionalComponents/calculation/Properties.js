export default class Properties {

    constructor() {
        this.initAttackerProperties();
        this.initDefenderProperties();
        this.diceDivisor = 6;
        this.probabilityAccuracySkillMinuend = 7;
        this.toWoundAccuracyValueModifier = 2;
    }

    initAttackerProperties() {
        this.attacker = {
            'overwatch': false,
            'stats': {
                'BS': 0,
                'WS': 0,
                'A': 0,
                'S': 0
            },
            'toWoundModifier': 0,
            'strengthModifier': 0
        };
        this.attackerWeaponStats = {
            'count': 0,
            'autoHit': 0,
            'additionalAttacks': 0,
            'weaponModeCount': 0,
            'rerollModifier': 0,
            'CPModifier': 0,
            'strengthType': 'user',
            'weaponAbility': [],
            'weaponType': ''
        };
        this.attackerTotalWeaponAttacks = 0;
        this.attackerHits = 0;
        this.attackerHitProbability = 0;
        this.attackerRerollableDiceAmount = 0;
        this.attackerRerollProbability = 0;
        this.attackerHitsInterimResult = 0;
        this.attackerRerollCPProbability = 0;
        this.attackerRerollTotalDiceAmount = 0;
        this.attackerTotalDiceAmount = 0;
        this.attackerWeaponAbilityHitMultiplierProbability = 0;
        this.attackerWeaponHitMultiplierProbabilityTotal = 0;
        this.attackerHitsResult = 0;
        this.attackerStrengthValue = 0;
        this.attackerToWoundAccuracyValue = 0;
        this.attackerModifiedToWoundAccuracyValue = 0;
        this.attackerToWoundProbability = 0;
        this.attackerWounds = 0;
    }

    initDefenderProperties() {
        this.defender = {
            'overwatch': false,
            'stats': {
                'T': 0
            }
        };

    }

    getAttacker() {
        return this.attacker;
    }

    setAttacker(value) {
        this.attacker = value;
    }

    getAttackerStats() {
        return this.attacker.stats;
    }

    getAttackerWeaponStats() {
        return this.attackerWeaponStats;
    }

    setAttackerWeaponStats(value) {
        this.attackerWeaponStats = value;
    }

    getAttackerWeaponStrength() {
        return this.attackerWeaponStats.S;
    }

    setAttackerTotalWeaponAttacks(value) {
        this.attackerTotalWeaponAttacks = value;
    }

    getAttackerTotalWeaponAttacks() {
        return this.attackerTotalWeaponAttacks;
    }

    getAttackerHitProbability() {
        return this.attackerHitProbability;
    }

    setAttackerHitProbability(value) {
        this.attackerHitProbability = value;
    }

    getAttackerBallisticSkill() {
        return this.attacker.stats.BS - this.attacker.BSModification;
    }

    getAttackerBallisticSkillRaw() {
        return this.attacker.stats.BS;
    }

    getAttackerWeaponSkill() {
        return this.attacker.stats.WS - this.attacker.BSModification;
    }

    getAttackerWeaponSkillRaw() {
        return this.attacker.stats.WS;
    }

    getAttackerASModification() {
        return this.attacker.BSModification;
    }

    getAttackerWeaponCount() {
        return this.attackerWeaponStats.count;
    }

    getAttackerRangeWeaponAttacks() {
        return this.attackerWeaponStats.weaponModeCount;
    }

    getAttackerMeleeWeaponAttacks() {
        return this.attacker.stats.A;
    }

    getAttackerMeleeWeaponStrength() {

        let weaponStats = this.getAttackerWeaponStats();

        switch (weaponStats.strengthType) {
            case 'addition': {
                return this.attacker.stats.S + this.attackerWeaponStats.S + this.attackerWeaponStats.strengthModifier;
            }
            case 'user': {
                return this.attacker.stats.S + this.attackerWeaponStats.strengthModifier;
            }
            case 'special': {
                //toDO: joa muss gemacht werden!
                return this.attacker.stats.S + this.attackerWeaponStats.strengthModifier;
            }
            case 'multiplication': {
                return this.attacker.stats.S * this.attackerWeaponStats.S + this.attackerWeaponStats.strengthModifier;
            }
            default:
                return this.attacker.stats.S + this.attackerWeaponStats.strengthModifier;
        }

    };

    getAttackerWeaponType() {
        return this.attackerWeaponStats.weaponType;
    }

    setAttackerHits(value) {
        this.attackerHits = value;
    }

    getAttackerHits() {
        return this.attackerHits;
    }

    getAttackerWeaponAdditionalAttacks() {
        return this.attackerWeaponStats.additionalAttacks;
    }

    getAttackerWeaponAutoHit() {
        return this.attackerWeaponStats.autoHit;
    }

    getAttackerOverwatch() {
        return this.attacker.overwatch;
    }

    getAttackerWeaponRerollModifier() {
        return this.attackerWeaponStats.rerollModifier;
    }

    setAttackerRerollableDiceAmount(value) {
        this.attackerRerollableDiceAmount = value;
    }

    getAttackerRerollableDiceAmount() {
        return this.attackerRerollableDiceAmount;
    }

    setAttackerRerollProbability(value) {
        this.attackerRerollProbability = value;
    }

    getAttackerRerollProbability() {
        return this.attackerRerollProbability;
    }

    setAttackerHitsInterimResult(value) {
        this.attackerHitsInterimResult = value;
    }

    getAttackerHitsInterimResult() {
        return this.attackerHitsInterimResult;
    }

    getAttackerCPModifier() {
        return this.attackerWeaponStats.CPModifier
    }

    getAttackerRerollCPProbability() {
        return this.attackerRerollCPProbability;
    }

    setAttackerRerollCPProbability(value) {
        this.attackerRerollCPProbability = value;
    }

    setAttackerRerollTotalDiceAmount(value) {
        this.attackerRerollTotalDiceAmount = value;
    }

    getAttackerRerollTotalDiceAmount() {
        return this.attackerRerollTotalDiceAmount;
    }

    setAttackerTotalDiceAmount(value) {
        this.attackerTotalDiceAmount = value;
    }

    getAttackerTotalDiceAmount() {
        return this.attackerTotalDiceAmount;
    }

    setAttackerWeaponAbilityHitMultiplierProbability(value) {
        this.attackerWeaponAbilityHitMultiplierProbability = value;
    }

    getAttackerWeaponAbilityHitMultiplierProbability() {
        return this.attackerWeaponAbilityHitMultiplierProbability;
    }

    setAttackerWeaponAbilityHitMultiplierProbabilityTotal(value) {
        this.attackerWeaponHitMultiplierProbabilityTotal = value;
    }

    getAttackerWeaponHitMultiplierProbabilityTotal() {
        return this.attackerWeaponHitMultiplierProbabilityTotal;
    }

    getAttackerWeaponAbility() {
        return this.attackerWeaponStats.weaponAbility;
    }

    setAttackerHitsResult(value) {
        this.attackerHitsResult = value;
    }

    getAttackerHitsResult() {
        return this.attackerHitsResult;
    }

    getAttackerStrengthValue() {
        return this.attackerStrengthValue;
    }

    setAttackerStrengthValue(value) {
        this.attackerStrengthValue = value;
    }

    setAttackerToWoundAccuracyValue(value) {
        this.attackerToWoundAccuracyValue = value;
    }

    getAttackerToWoundAccuracyValue() {
        return this.attackerToWoundAccuracyValue;
    }

    getAttackerToWoundModifier() {
        return this.attacker.toWoundModifier;
    }

    setAttackerModifiedToWoundAccuracyValue(value) {
        this.attackerModifiedToWoundAccuracyValue = value;
    }

    getAttackerModifiedToWoundAccuracyValue() {
        return this.attackerModifiedToWoundAccuracyValue;
    }

    setAttackerToWoundProbability(value) {
        this.attackerToWoundProbability = value;
    }

    getAttackerToWoundProbability() {
        return this.attackerToWoundProbability;
    }

    setAttackerWounds(value) {
        this.attackerWounds = value;
    }

    getAttackerWounds() {
        return this.attackerWounds;
    }


    getDefender() {
        return this.defender;
    }

    setDefender(value) {
        this.defender = value;
    }

    getDefenderToughnessValue() {
        return this.defender.stats.T + this.defender.toughnessModification;
    }




}