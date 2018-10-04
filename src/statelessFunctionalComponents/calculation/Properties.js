export default class Properties {

    constructor() {
        this.initAttackerProperties();
        this.initDefenderProperties();

    }

    initAttackerProperties() {
        this.attacker = {};
        this.additionalShotsAttacker = 0;
        this.weaponCountAttacker = 0;
        this.weaponShotsAttacker = 0;
        this.totalWeaponShotsAttacker = 0;
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

    getAdditionalShotsAttacker() {
        return null;
    }

    getWeaponShotCountAttacker() {
        return this.attacker.weapon.ranged.default;
    }

    getWeaponShotsAttacker() {
        return this.weaponShotsAttacker;
    }

    setWeaponShotsAttacker(value) {
        this.weaponShotsAttacker = value;
    }

    getTotalWeaponShotsAttacker() {
        return this.totalWeaponShotsAttacker;
    }

    setTotalWeaponShotsAttacker(value) {
        this.totalWeaponShotsAttacker = value;
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