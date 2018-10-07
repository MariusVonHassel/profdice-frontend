import Calculation from './Calculation';

export default class RangedCalc extends Calculation {

    constructor(attackerData, weaponStats, defenderData) {
        super();

        this.settings(attackerData, weaponStats, defenderData);
        this.calculateHandler();
    }

    settings(attackerData, weaponStats, defenderData) {
        this.setAttacker(attackerData);
        this.setDefender(defenderData);
        this.setAttackerWeaponStats(weaponStats);
    }

    calculateHandler() {
        this.handleAttacks();
        this.handleHitProability();
        this.handleHits();
        this.handleMissedAttacks();

        console.log('Attacks:', this.getAttackerTotalWeaponAttacks());
        console.log('Hitproability:', this.getAttackerHitProability());
        console.log('Hits:', this.getAttackerHits());
        console.log('Misses', this.getAttackerMissedAttackes());
    }

    handleAttacks() {
        this.setAttackerTotalWeaponAttacks(this.calcAttacks(this.getAttackerWeaponCount(), this.getAttackerWeaponAttacks(), this.getAttackerWeaponAdditionalAttacks()));
    }

    handleHitProability() {
        this.setAttackerHitProability(this.calcHitProbability(this.getBalisticSkill()));
    }

    handleHits() {
        this.setAttackerHits((this.getAttackerWeaponAutoHit() === false) ? this.calcHits(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitProability()) : this.getAttackerTotalWeaponAttacks());
    }

    handleMissedAttacks() {
        this.setAttackerMissedAttacks(this.calcMissedAttacks(this.getAttackerTotalWeaponAttacks(), this.getAttackerHits()));
    }

}