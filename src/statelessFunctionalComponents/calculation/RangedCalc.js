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
        this.handleHitprobability();
        this.handleHits();
        this.handleHitRerollDiceAmount();
        this.handleRerollProbability();
        this.handleHitsInterimResult();

        console.log('Attacks:', this.getAttackerTotalWeaponAttacks());
        console.log('Hitprobability:', this.getAttackerHitProbability());
        console.log('Hits:', this.getAttackerHits());
        console.log('rerollableHitDice:', this.getAttackerRerollableDiceAmount());
        console.log('rerollProbability:', this.getAttackerRerollProbability());
        console.log('hitInterimResult:', this.getAttackerHitsInterimResult());

        //console.log('Misses', this.getAttackerMissedAttackes());
    }

    handleAttacks() {
        this.setAttackerTotalWeaponAttacks(this.calcAttacks(this.getAttackerWeaponCount(), this.getAttackerWeaponAttacks(), this.getAttackerWeaponAdditionalAttacks()));
    }

    handleHitprobability() {
        (this.getAttackerOverwatch() === false) ? this.setAttackerHitProbability(this.calcHitProbability(this.getBalisticSkill())) : this.setAttackerHitProbability(this.calcHitProbability(6)) ;
    }

    handleHits() {
        this.setAttackerHits((this.getAttackerWeaponAutoHit() === false) ? this.calcHits(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitProbability()) : this.getAttackerTotalWeaponAttacks());
    }

    handleHitRerollDiceAmount() {

        let result = 0;
        let attackerWeaponAttacks = this.getAttackerTotalWeaponAttacks();

        if (this.getAttackerWeaponRerollModifier() === 1) {

            result = this.calcHitRerollDiceAmount(attackerWeaponAttacks, this.getAttackerWeaponRerollModifier()/6);

        } else if (this.getAttackerWeaponRerollModifier() === 6) {

            if ((1 - this.getAttackerHitProbability()) > (Math.abs(1 - this.calcHitProbability(this.getBalisticSkillRaw())))) {

                result = this.calcHitRerollDiceAmount(attackerWeaponAttacks, Math.abs(1 - this.calcHitProbability(this.getBalisticSkillRaw())));

            } else {

                result = this.calcHitRerollDiceAmount(attackerWeaponAttacks, Math.abs(1 - this.getAttackerHitProbability()));

            }

        }

        this.setAttackerRerollableDiceAmount(result);

    }

    handleRerollProbability() {
        this.setAttackerRerollProbability(this.calcRerollProbability(this.getAttackerHitProbability(), this.getAttackerRerollableDiceAmount()));
    }

    handleHitsInterimResult() {
        this.setAttackerHitsInterimResult(this.calcHitsInterimResult(this.getAttackerHits(), this.getAttackerRerollProbability()));
    }


}