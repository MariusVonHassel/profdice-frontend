export default class Properties {

    constructor() {
        this.initAttackerProperties();
        this.initDefenderProperties();
        this.diceDivisor = 6;
        this.probabilityAccuracySkillMinuend = 7;
    }

    initAttackerProperties() {
        this.attacker = {
            'overwatch': false
        };
        this.attackerWeaponStats = {
            'count': 0,
            'autoHit': 0,
            'additionalAttacks': 0,
            'weaponModeCount': 0,
            'rerollModifier': 0,
            'CPModifier': 0,
            'weaponAbility': []
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
    }

    initDefenderProperties() {
        this.defender = {};
        this.additionalShotsDefender = 0;
        this.weaponCountDefender = 0;
        this.weaponShotsDefender = 0;
        this.totalWeaponShotsDefender = 0;
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

    getAccuracySkill() {
        return this.attacker.stats.BS - this.attacker.BSModification;
    }

    getAccuracySkillRaw() {
        return this.attacker.stats.BS;
    }

    getAttackerASModification() {
        return this.attacker.BSModification;
    }

    getAttackerWeaponCount() {
        return this.attackerWeaponStats.count;
    }

    getAttackerWeaponAttacks() {
        return this.attackerWeaponStats.weaponModeCount;
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
















    getDefender() {
        return this.defender;
    }

    setDefender(value) {
        this.defender = value;
    }

    getAdditionalShotsDefender() {
        return this.additionalShotsDefender;
    }

    setAdditionalShotsDefender(value) {
        this.additionalShotsDefender = value;
    }

    getWeaponCountDefender() {
        return this.weaponCountDefender;
    }

    setWeaponCountDefender(value) {
        this.weaponCountDefender = value;
    }

    getWeaponShotsDefender() {
        return this.weaponShotsDefender;
    }

    setWeaponShotsDefender(value) {
        this.weaponShotsDefender = value;
    }

    getTotalWeaponShotsDefender() {
        return this.totalWeaponShotsDefender;
    }

    setTotalWeaponShotsDefender(value) {
        this.totalWeaponShotsDefender = value;
    }



}