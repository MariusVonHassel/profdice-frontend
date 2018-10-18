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
        this.handleHitRerollProbability();
        this.handleHitRerollCPProbability();
        this.handleHitsInterimResult();

        this.handleHitRerollAbilityTotalDiceAmount();
        this.handleTotalAbilityDiceAmount();

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
        this.handleWoundRerollDiceAmount();
        this.handleWoundRerollProbability();
        this.handleWoundRerollCPProbability();
        this.handleWoundResult();

        this.handleAttackerTotalAbilityWoundDiceAmount();
        this.handleAttackerAdditionaWeaponlMortalWoundsProbability();
        this.handleAttackerAdditionalWeaponMortalWoundsResult();

        this.handleDefenderModifiedSv();
        this.handleDefenderCompareSaves();
        this.handleAttackerPenetrationProbability();
        this.handleAttackerPenetrationProbabilityResult();
        this.handleAttackerCPRerollPenetrationProbability();
        this.handleAttackerPenetrationResult();

        this.handleAttackerToDamageResult();

        console.log('Attacks:', this.getAttackerTotalWeaponAttacks());
        // console.log('Hitprobability:', this.getAttackerHitProbability());
        // console.log('Hits:', this.getAttackerHits());
        // console.log('rerollableHitDice:', this.getAttackerHitRerollableDiceAmount());
        // console.log('rerollProbability:', this.getAttackerHitRerollProbability());
        // console.log('hitInterimResult:', this.getAttackerHitsInterimResult());
        // console.log('CPhitRerollProbability:', this.getAttackerHitRerollCPProbability());
        // console.log('RerollTotalDiceAmount:', this.getAttackerHitRerollAbilityTotalDiceAmount());
        // console.log('TotalDiceAmount:', this.getAttackerHitTotalAbilityDiceAmount());
        console.log('HitsResults:', this.getAttackerHitsResult());

        // console.log('StrengthValue:', this.getAttackerStrengthValue());
        // console.log('ToWoundAccuracyValue:', this.getAttackerToWoundAccuracyValue());
        // console.log('ModifiedToWoundAccuracyValue:', this.getAttackerModifiedToWoundAccuracyValue());
        // console.log('ToWoundProbability:', this.getAttackerToWoundProbability());
        // console.log('Wounds:', this.getAttackerWounds());
        // console.log('WoundRerollDiceAmount:', this.getAttackerWoundRerollDiceAmount());
        // console.log('WoundRerollProbability:', this.getAttackerWoundRerollProbability());
        // console.log('WoundRerollCPProbability:', this.getAttackerWoundRerollCPProbability());
        console.log('WoundsResult:', this.getAttackerWoundResult());

        console.log('WeaponMortalWounds:', this.getAttackerAdditionalMortalWoundsResult());
        console.log('getDefenderModifiedSv:', this.getDefenderModifiedSv());
        console.log('getDefenderCompareSaves:', this.getDefenderCompareSaves());
        console.log('getAttackerPenetrationProbability:', this.getAttackerPenetrationProbability());
        console.log('getAttackerPenetrationProabilityResult:', this.getAttackerPenetrationProabilityResult());
        console.log('getAttackerCPRerollPenetrationProbability:', this.getAttackerCPRerollPenetrationProbability());
        console.log('getAttackerPenetrationResult:', this.getAttackerPenetrationResult());
        console.log('WeaponMortalWounds:', this.getAttackerAdditionalMortalWoundsResult());



        console.log('Damage:', this.getAttackerToDamageResult());

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
            this.setAttackerHitProbability(this.calcProbability(this.getAttackerWeaponSkill()));
        } else if (this.getAttackerWeaponType() === 'ranged') {
            (this.getAttackerOverwatch() === false) ? this.setAttackerHitProbability(this.calcProbability(this.getAttackerBallisticSkill())) : this.setAttackerHitProbability(this.calcProbability(6)) ;
        }

    }

    handleHits() {

        this.setAttackerHits((this.getAttackerWeaponAutoHit() === false) ? this.calcHits(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitProbability()) : this.getAttackerTotalWeaponAttacks());
    }

    handleHitRerollDiceAmount() {
        if (this.getAttackerWeaponType() === 'melee') {
            this.setAttackerHitRerollableDiceAmount(this.calcRerollDiceAmount(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitRerollModifier(), this.getAttackerHitProbability(), this.getAttackerWeaponSkillRaw()));
        } else if (this.getAttackerWeaponType() === 'ranged') {

            this.setAttackerHitRerollableDiceAmount(this.calcRerollDiceAmount(this.getAttackerTotalWeaponAttacks(), this.getAttackerHitRerollModifier(), this.getAttackerHitProbability(), this.getAttackerBallisticSkillRaw()));
        }

    }

    handleHitRerollProbability() {
        this.setAttackerHitRerollProbability(this.calcRerollProbability(this.getAttackerHitProbability(), this.getAttackerHitRerollableDiceAmount()));
    }

    handleHitRerollCPProbability() {
        this.setAttackerHitRerollCPProbability(this.calcCPHitProbability(this.getAttackerHitCPModifier(), this.getAttackerHitProbability(), this.getAttackerHitRerollCPProbability()));
    }

    handleHitsInterimResult() {
        this.setAttackerHitsInterimResult(this.calcInterimResult(this.getAttackerHits(), this.getAttackerHitRerollProbability(), this.getAttackerHitRerollCPProbability()));
    }

    handleHitRerollAbilityTotalDiceAmount() {
        this.setAttackerHitRerollAbilityTotalDiceAmount(this.getAttackerHitRerollableDiceAmount() + this.getAttackerHitCPModifier());
    }

    handleTotalAbilityDiceAmount() {
        this.setAttackerHitTotalAbilityDiceAmount(this.getAttackerHitRerollAbilityTotalDiceAmount() + this.getAttackerTotalWeaponAttacks());
    }

    handleWeaponAbilityHitMultiplierProbability() {
        this.setAttackerWeaponAbilityHitMultiplierProbability(this.calcWeaponAbilityMultiplierProbability(this.getAttackerWeaponAbility(), this.getAttackerASModification()));
    }

    handleWeaponAbilityHitMultiplierProbabilityTotal() {
        this.setAttackerWeaponAbilityHitMultiplierProbabilityTotal(this.getAttackerWeaponAbilityHitMultiplierProbability() * this.getAttackerHitTotalAbilityDiceAmount());
    }

    handleHitsResult() {
        this.setAttackerHitsResult(this.getAttackerHitsInterimResult() + this.getAttackerWeaponAbilityHitMultiplierProbabilityTotal());
    }

    handleAttackerStrengthValue() {
        if (this.getAttackerWeaponType() === 'melee') {
            this.setAttackerStrengthValue(this.getAttackerMeleeWeaponStrength());
        } else if (this.getAttackerWeaponType() === 'ranged') {
            this.setAttackerStrengthValue(this.getAttackerWeaponStrength());
        }
    }

    handleToWoundAccuracyValue() {
        this.setAttackerToWoundAccuracyValue(this.calcWoundAccuracyValue(this.getAttackerStrengthValue(), this.getDefenderToughnessValue()));
    }

    handleModifiedToWoundAccuracyValue() {

        this.setAttackerModifiedToWoundAccuracyValue(this.getAttackerToWoundAccuracyValue() - this.getAttackerToWoundModifier());
    }

    handleToWoundProbability() {
        this.setAttackerToWoundProbability(this.calcProbability(this.getAttackerModifiedToWoundAccuracyValue()));
    }

    handleWounds() {
        this.setAttackerWounds(this.getAttackerHitsResult() * this.getAttackerToWoundProbability());
    }

    handleWoundRerollDiceAmount() {
        this.setAttackerWoundRerollDiceAmount(this.calcRerollDiceAmount(this.getAttackerHitsResult(), this.getAttackerWoundRerollModifier(), this.getAttackerToWoundProbability(), this.calcWoundAccuracyValue(this.getAttackerStrengthValue(), this.getDefenderToughnessValue())));
    }

    handleWoundRerollProbability() {
        this.setAttackerWoundRerollProbability(this.calcRerollProbability(this.getAttackerToWoundProbability(), this.getAttackerWoundRerollDiceAmount()));
    }

    handleWoundRerollCPProbability() {
        this.setAttackerWoundRerollCPProbability(this.calcCPHitProbability(this.getAttackerWoundCPModifier(), this.getAttackerWoundRerollProbability()));
    }

    handleWoundResult() {
        this.setAttackerWoundResult(this.calcInterimResult(this.getAttackerWounds(), this.getAttackerWoundRerollProbability(), this.getAttackerWoundRerollCPProbability()));
    }


    handleAttackerTotalAbilityWoundDiceAmount() {
        this.setAttackerTotalWeaponAbilityWoundDiceAmount(this.getAttackerHitsResult() + this.getAttackerWoundRerollDiceAmount() + this.getAttackerWoundCPModifier());
    }


    handleAttackerAdditionaWeaponlMortalWoundsProbability() {
        this.setAttackerAdditionalWeaponMortalWoundsProbability(this.calcWeaponAbilityMortalWoundsProbabiity(this.getAttackerWeaponAbility(), this.getAttackerToWoundModifier()));
    }

    handleAttackerAdditionalWeaponMortalWoundsResult() {
        this.setAttackerAdditionalMortalWoundsResult(this.getAttackerTotalWeaponAbilityWoundDiceAmount() * this.getAttackerAdditionalMortalWoundsProbability());
    }

    handleDefenderModifiedSv() {
        if (this.getAttackerWeaponType() === 'melee') {
            this.setDefenderModifiedSv(this.getDefenderSv() - this.getAttackerAP() + this.getAttackerSvModifier());
        } else if (this.getAttackerWeaponType() === 'ranged') {
            this.setDefenderModifiedSv(this.getDefenderSv() - this.getAttackerAP() + this.getAttackerSvModifier());
        }

    }

    handleDefenderCompareSaves(){

        let inv = this.calcWargearAbilityMultiplierProbability(this.getDefenderWargearAbilities(), this.getDefenderUnitAbilities());

        let sv = this.getDefenderModifiedSv();

        this.setDefenderCompareSaves((inv < sv) ? inv : sv);
    }

    handleAttackerPenetrationProbability() {

        (this.getDefenderCompareSaves() === 0) ? this.setAttackerPenetrationProbability(1) : this.setAttackerPenetrationProbability(Math.abs(1 - this.calcProbability(this.getDefenderCompareSaves()))); ;


    }

    handleAttackerPenetrationProbabilityResult() {
        this.setAttackerPenetrationProabilityResult(this.getAttackerPenetrationProbability() * this.getAttackerWoundResult());
    }

    handleAttackerCPRerollPenetrationProbability() {

        this.setAttackerCPRerollPenetrationProbability(this.calcCPHitProbability(this.getAttackerSaveCPModifier(), this.getAttackerPenetrationProbability()));
    }

    handleAttackerPenetrationResult() {
        this.setAttackerPenetrationResult(this.calcInterimResult(this.getAttackerPenetrationProabilityResult(), 0, this.getAttackerCPRerollPenetrationProbability()));
    }

    handleAttackerToDamageResult() {
        this.setAttackerToDamageResult(this.getAttackerPenetrationResult() * this.calcWeaponDamage(this.getAttackerWeaponDamage(), this.getDefenderHealth()));
    }
}