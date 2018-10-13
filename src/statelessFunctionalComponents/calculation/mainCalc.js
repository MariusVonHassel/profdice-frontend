import Calculation from './Calculation';

export default class MainCalc extends Calculation {

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
        this.handleHitProbability();
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

        this.handleAttackerStrengthValue();
        this.handleToWoundAccuracyValue();
        this.handleModifiedToWoundAccuracyValue();
        this.handleToWoundProbability();
        this.handleWounds();

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

        console.log('StrengthValue:', this.getAttackerStrengthValue());
        console.log('ToWoundAccuracyValue:', this.getAttackerToWoundAccuracyValue());
        console.log('ModifiedToWoundAccuracyValue:', this.getAttackerModifiedToWoundAccuracyValue());
        console.log('ToWoundProbability:', this.getAttackerToWoundProbability());
        console.log('Wounds:', this.getAttackerWounds());

    }

    handleAttacks() {

        if (this.getAttackerWeaponType() === 'melee') {
            this.setAttackerTotalWeaponAttacks(this.calcAttacks(this.getAttackerWeaponCount(), this.getAttackerMeleeWeaponAttacks(), this.getAttackerWeaponAdditionalAttacks()));
        } else if (this.getAttackerWeaponType() === 'ranged') {
            this.setAttackerTotalWeaponAttacks(this.calcAttacks(this.getAttackerWeaponCount(), this.getAttackerRangeWeaponAttacks(), this.getAttackerWeaponAdditionalAttacks()));
        }

    }

    handleHitProbability() {

        if (this.getAttackerWeaponType() === 'melee') {
            this.setAttackerHitProbability(this.calcHitProbability(this.getAttackerWeaponSkill()));
        } else if (this.getAttackerWeaponType() === 'ranged') {
            (this.getAttackerOverwatch() === false) ? this.setAttackerHitProbability(this.calcHitProbability(this.getAttackerBallisticSkill())) : this.setAttackerHitProbability(this.calcHitProbability(6)) ;
        }

    }

    handleHits() {
        this.setAttackerHits((this.getAttackerWeaponAutoHit() === false) ? this.calcHits(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitProbability()) : this.getAttackerTotalWeaponAttacks());
    }

    handleHitRerollDiceAmount() {
        if (this.getAttackerWeaponType() === 'melee') {
            this.setAttackerRerollableDiceAmount(this.calcHitRerollDiceAmount(this.getAttackerTotalWeaponAttacks(), this.getAttackerWeaponRerollModifier(), this.getAttackerHitProbability(), this.getAttackerWeaponSkillRaw()));
        } else if (this.getAttackerWeaponType() === 'ranged') {
            this.setAttackerRerollableDiceAmount(this.calcHitRerollDiceAmount(this.getAttackerTotalWeaponAttacks(), this.getAttackerWeaponRerollModifier(), this.getAttackerHitProbability(), this.getAttackerBallisticSkillRaw()));
        }

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

    handleAttackerStrengthValue() {
        if (this.getAttackerWeaponType() === 'melee') {
            this.setAttackerStrengthValue(this.getAttackerMeleeWeaponStrength());
        } else if (this.getAttackerWeaponType() === 'ranged') {
            this.setAttackerStrengthValue(this.getAttackerWeaponStrength());
        }
    }

    handleToWoundAccuracyValue() {
        this.setAttackerToWoundAccuracyValue(this.calcWoundAccuracyValue(this.getAttackerStrengthValue(), this.getDefenderToughnessValue()))
    }

    handleModifiedToWoundAccuracyValue() {

        this.setAttackerModifiedToWoundAccuracyValue(this.getAttackerToWoundAccuracyValue() + this.getAttackerToWoundModifier());
    }

    handleToWoundProbability() {
        this.setAttackerToWoundProbability(this.calcHitProbability(this.getAttackerModifiedToWoundAccuracyValue()));
    }

    handleWounds() {
        this.setAttackerWounds(this.getAttackerHitsResult() * this.getAttackerToWoundProbability());
    }



}