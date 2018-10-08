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
            'rerollModifier': 0
        };
        this.attackerTotalWeaponAttacks = 0;
        this.attackerHits = 0;
        this.attackerHitProbability = 0;
        this.attackerRerollableDiceAmount = 0;
        this.attackerRerollProbability = 0;
        this.attackerHitsInterimResult = 0;
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

    getBalisticSkill() {
        return this.attacker.stats.BS - this.attacker.BSModification;
    }

    getBalisticSkillRaw() {
        return this.attacker.stats.BS;
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