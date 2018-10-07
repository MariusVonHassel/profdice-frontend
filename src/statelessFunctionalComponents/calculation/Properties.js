export default class Properties {

    constructor() {
        this.initAttackerProperties();
        this.initDefenderProperties();
        this.diceDivisor = 6;
        this.probabilityAccuracySkillMinuend = 7;
    }

    initAttackerProperties() {
        this.attacker = {};
        this.attackerWeaponStats = {
            'count': 0,
            'autoHit': 0,
            'additionalAttacks': 0,
            'overwatch': false,
            'weaponModeCount': 0
        };
        this.attackerTotalWeaponAttacks = 0;
        this.attackerHits = 0;
        this.attackerHitProability = 0;
        this.attackerMissedAttacks = 0;
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

    getAttackerHitProability() {
        return this.attackerHitProability;
    }

    setAttackerHitProability(value) {
        this.attackerHitProability = value;
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

    setAttackerMissedAttacks(value) {
        this.attackerMissedAttacks = value;
    }

    getAttackerMissedAttackes() {
        return this.attackerMissedAttacks;
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