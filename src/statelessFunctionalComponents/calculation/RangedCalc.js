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
        this.handleRerollCPProbability();
        this.handleRerollTotalDiceAmount();
        this.handleTotalDiceAmount();

        if (this.getAttackerWeaponAbility() !== undefined) {
            this.handleWeaponAbilityHitMultiplierProbability();
            this.handleWeaponAbilityHitMultiplierProbabilityTotal();
        }

        this.handleHitsResult();

        console.log('Attacks:', this.getAttackerTotalWeaponAttacks());
        console.log('Hitprobability:', this.getAttackerHitProbability());
        console.log('Hits:', this.getAttackerHits());
        console.log('rerollableHitDice:', this.getAttackerRerollableDiceAmount());
        console.log('rerollProbability:', this.getAttackerRerollProbability());
        console.log('hitInterimResult:', this.getAttackerHitsInterimResult());
        console.log('CPhitRerollProbability:', this.getAttackerRerollCPProbability());
        console.log('RerollTotalDiceAmount:', this.getAttackerRerollTotalDiceAmount());
        console.log('TotalDiceAmount:', this.getAttackerTotalDiceAmount());
        console.log('HitsResults:', this.getAttackerHitsResult());


    }

    handleAttacks() {
        this.setAttackerTotalWeaponAttacks(this.calcAttacks(this.getAttackerWeaponCount(), this.getAttackerWeaponAttacks(), this.getAttackerWeaponAdditionalAttacks()));
    }

    handleHitprobability() {
        (this.getAttackerOverwatch() === false) ? this.setAttackerHitProbability(this.calcHitProbability(this.getAccuracySkill())) : this.setAttackerHitProbability(this.calcHitProbability(6)) ;
    }

    handleHits() {
        this.setAttackerHits((this.getAttackerWeaponAutoHit() === false) ? this.calcHits(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitProbability()) : this.getAttackerTotalWeaponAttacks());
    }

    handleHitRerollDiceAmount() {
        this.setAttackerRerollableDiceAmount(this.calcHitRerollDiceAmount(this.getAttackerTotalWeaponAttacks(), this.getAttackerWeaponRerollModifier(), this.getAttackerHitProbability(), this.getAccuracySkillRaw()));
    }

    handleRerollProbability() {
        this.setAttackerRerollProbability(this.calcRerollProbability(this.getAttackerHitProbability(), this.getAttackerRerollableDiceAmount()));
    }

    handleHitsInterimResult() {
        this.setAttackerHitsInterimResult(this.calcHitsInterimResult(this.getAttackerHits(), this.getAttackerRerollProbability()));
    }

    handleRerollCPProbability() {

        this.setAttackerRerollCPProbability(this.calcCPHitProbability(this.getAttackerCPModifier(), this.getAttackerHitProbability()));
    }

    handleRerollTotalDiceAmount() {
        this.setAttackerRerollTotalDiceAmount(this.getAttackerRerollableDiceAmount() + this.getAttackerCPModifier());
    }

    handleTotalDiceAmount() {
        this.setAttackerTotalDiceAmount(this.getAttackerRerollTotalDiceAmount() + this.getAttackerTotalWeaponAttacks());
    }

    handleWeaponAbilityHitMultiplierProbability() {
        this.setAttackerWeaponAbilityHitMultiplierProbability(this.calcWeaponAbilityHitMultiplierProbability(this.getAttackerWeaponAbility(), this.getAttackerASModification()));
    }

    handleWeaponAbilityHitMultiplierProbabilityTotal() {
        this.setAttackerWeaponAbilityHitMultiplierProbabilityTotal(this.getAttackerWeaponAbilityHitMultiplierProbability() * this.getAttackerTotalDiceAmount());
    }

    handleHitsResult() {
        this.setAttackerHitsResult(this.getAttackerHitsInterimResult() + this.getAttackerWeaponHitMultiplierProbabilityTotal());
    }

}