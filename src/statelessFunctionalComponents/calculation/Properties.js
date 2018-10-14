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
            'strengthModifier': 0,
            'saveCPModifier': 0
        };
        this.attackerWeaponStats = {
            'AP': 0,
            'D': 0,
            'count': 0,
            'autoHit': 0,
            'additionalAttacks': 0,
            'weaponModeCount': 0,
            'hitRerollModifier': 0,
            'woundRerollModifier': 0,
            'hitCPModifier': 0,
            'woundCPModifier': 0,
            'damageCPModifier': 0,
            'damageModifier': 0,
            'strengthType': 'user',
            'weaponAbility': [],
            'toWoundModifier': 0,
            'svModifier': 0,
            'weaponType': ''
        };
        this.attackerTotalWeaponAttacks = 0;
        this.attackerHits = 0;
        this.attackerHitProbability = 0;
        this.attackerRerollableDiceAmount = 0;
        this.attackerRerollProbability = 0;
        this.attackerHitsInterimResult = 0;
        this.attackerHitRerollCPProbability = 0;
        this.attackerHitRerollAbilityTotalDiceAmount = 0;
        this.attackerHitTotalAbilityDiceAmount = 0;
        this.attackerWeaponAbilityHitMultiplierProbability = 0;
        this.attackerWeaponHitMultiplierProbabilityTotal = 0;
        this.attackerHitsResult = 0;
        this.attackerStrengthValue = 0;
        this.attackerToWoundAccuracyValue = 0;
        this.attackerModifiedToWoundAccuracyValue = 0;
        this.attackerToWoundProbability = 0;
        this.attackerWounds = 0;
        this.attackerWoundRerollDiceAmount = 0;
        this.attackerWoundRerollProbability = 0;
        this.attackerWoundRerollCPProbability = 0;
        this.attackerWoundResult = 0;
        this.attackerTotalWeaponAbilityWoundDiceAmount = 0;
        this.attackerAdditionalWeaponMortalWoundsProbability = 0;
        this.attackerSaveProbability = 0;
        this.attackerCPRerollPenetrationProbability = 0;
        this.attackerPenetrationResult = 0;
        this.attackerPenetrationProabilityResult = 0;
        this.attackerToDamageResult = 0;


    }

    initDefenderProperties() {
        this.defender = {
            'overwatch': false,
            'stats': {
                'T': 0,
                'Sv': 0,
                'W': 0
            },
            'wargear': {
                'abilityFactors': {
                    'invulnerableSave': [0]
                }
            },
            'abilities':[]
        };

        this.defenderModifiedSv = 0;
        this.defenderCompareSaves = 0;

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

    getAttackerWeaponDamage() {
        return this.attackerWeaponStats.D;
    }

    getAttackerAP() {
        return this.attackerWeaponStats.AP;
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

        let switchResult = () => {
            switch (weaponStats.strengthType) {
            case 'addition': {
                return this.attacker.stats.S + this.attackerWeaponStats.S;
            }
            case 'user': {
                return this.attacker.stats.S;
            }
            case 'special': {
                //toDO: joa muss gemacht werden!
                return this.attacker.stats.S;
            }
            case 'multiplication': {
                return this.attacker.stats.S * this.attackerWeaponStats.S;
            }
            default:
                return this.attacker.stats.S;
            }

        };

        return switchResult() + this.attackerWeaponStats.strengthModifier;

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

    getAttackerHitRerollModifier() {
        return this.attackerWeaponStats.hitRerollModifier;
    }

    getAttackerWoundRerollModifier() {
        return this.attackerWeaponStats.woundRerollModifier;
    }

    setAttackerHitRerollableDiceAmount(value) {
        this.attackerRerollableDiceAmount = value;
    }

    getAttackerHitRerollableDiceAmount() {
        return this.attackerRerollableDiceAmount;
    }

    setAttackerHitRerollProbability(value) {
        this.attackerRerollProbability = value;
    }

    getAttackerHitRerollProbability() {
        return this.attackerRerollProbability;
    }

    setAttackerHitsInterimResult(value) {
        this.attackerHitsInterimResult = value;
    }

    getAttackerHitsInterimResult() {
        return this.attackerHitsInterimResult;
    }

    getAttackerHitCPModifier() {
        return this.attackerWeaponStats.hitCPModifier;
    }

    getAttackerWoundCPModifier() {
        return this.attackerWeaponStats.woundCPModifier;
    }

    getAttackerDamageCPModifier() {
        return this.attackerWeaponStats.damageCPModifier;
    }

    getAttackerHitRerollCPProbability() {
        return this.attackerHitRerollCPProbability;
    }

    setAttackerHitRerollCPProbability(value) {
        this.attackerHitRerollCPProbability = value;
    }

    setAttackerHitRerollAbilityTotalDiceAmount(value) {
        this.attackerHitRerollAbilityTotalDiceAmount = value;
    }

    getAttackerHitRerollAbilityTotalDiceAmount() {
        return this.attackerHitRerollAbilityTotalDiceAmount;
    }

    setAttackerHitTotalAbilityDiceAmount(value) {
        this.attackerHitTotalAbilityDiceAmount = value;
    }

    getAttackerHitTotalAbilityDiceAmount() {
        return this.attackerHitTotalAbilityDiceAmount;
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

    getAttackerWeaponAbilityHitMultiplierProbabilityTotal() {
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
        return this.attackerWeaponStats.toWoundModifier;
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

    setAttackerWoundRerollDiceAmount(value) {
        this.attackerWoundRerollDiceAmount = value;
    }

    getAttackerWoundRerollDiceAmount() {
        return this.attackerWoundRerollDiceAmount;
    }

    setAttackerWoundRerollProbability(value) {
        this.attackerWoundRerollProbability = value;
    }

    getAttackerWoundRerollProbability() {
        return this.attackerWoundRerollProbability;
    }

    setAttackerWoundRerollCPProbability(value) {
        this.attackerWoundRerollCPProbability = value;
    }

    getAttackerWoundRerollCPProbability() {
        return this.attackerWoundRerollCPProbability;
    }

    setAttackerWoundResult(value) {
        this.attackerWoundResult = value;
    }

    getAttackerWoundResult() {
        return this.attackerWoundResult;
    }

    getAttackerTotalWeaponAbilityWoundDiceAmount() {
        return this.attackerTotalWeaponAbilityWoundDiceAmount;
    }

    setAttackerTotalWeaponAbilityWoundDiceAmount(value) {
        this.attackerTotalWeaponAbilityWoundDiceAmount = value;
    }

    setAttackerAdditionalWeaponMortalWoundsProbability(value) {
        this.attackerAdditionalWeaponMortalWoundsProbability = value;
    }

    getAttackerAdditionalMortalWoundsProbability() {
        return this.attackerAdditionalWeaponMortalWoundsProbability;
    }

    setAttackerAdditionalMortalWoundsResult(value) {
        this.attackerAdditionalMortalWoundsResult = value;
    }

    getAttackerAdditionalMortalWoundsResult() {
        return this.attackerAdditionalMortalWoundsResult;
    }


    setAttackerPenetrationProbability(value) {
        this.attackerSaveProbability = value;
    }

    getAttackerPenetrationProbability() {
        return this.attackerSaveProbability;
    }

    setAttackerCPRerollPenetrationProbability(value) {
        this.attackerCPRerollPenetrationProbability = value;
    }

    getAttackerCPRerollPenetrationProbability() {
        return this.attackerCPRerollPenetrationProbability;   
    }

    getAttackerSaveCPModifier() {
        return this.attacker.saveCPModifier;
    }

    getAttackerSvModifier() {
        return this.attackerWeaponStats.svModifier;
    }

    getAttackerPenetrationResult() {
        return this.attackerPenetrationResult;
    }

    setAttackerPenetrationResult(value) {
        this.attackerPenetrationResult = value;
    }

    getAttackerPenetrationProabilityResult() {
        return this.attackerPenetrationProabilityResult;
    }

    setAttackerPenetrationProabilityResult(value) {
        this.attackerPenetrationProabilityResult = value;
    }

    setAttackerToDamageResult(value) {
        this.attackerToDamageResult = value;
    }

    getAttackerToDamageResult() {
        return this.attackerToDamageResult;
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

    getDefenderSv() {
        return this.defender.stats.Sv;
    }

    getDefenderHealth() {
        return this.defender.stats.W;
    }

    setDefenderModifiedSv(value) {
        this.defenderModifiedSv = value;
    }

    getDefenderModifiedSv() {
        return this.defenderModifiedSv;
    }
    
    setDefenderCompareSaves(value) {
        this.defenderCompareSaves = value;
    }

    getDefenderCompareSaves() {
        return this.defenderCompareSaves;
    }

    getDefenderWargearAbilities() {
        return 0;
        // return this.defender.wargear.abilityFactors;
    }

    getDefenderUnitAbilities() {
        return this.defender.abilities;
    }

}