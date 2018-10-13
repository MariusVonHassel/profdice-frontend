import Properties from './Properties';

export default class Calculation extends Properties {

    calcAttacks(weaponCount, weaponAttacks, additionalAttacks) {
        return weaponCount * weaponAttacks + additionalAttacks;
    }

    calcHitProbability(accuracySkill) {
        let calc = (this.probabilityAccuracySkillMinuend - accuracySkill) / this.diceDivisor;

        if (calc > 5/6) {
            return 5/6;
        } else if (calc < 0) {
            return 0;
        } else {
            return calc;
        }
    }

    calcHits(weaponAttacks, hitPropability) {
        return weaponAttacks * hitPropability;
    }

    calcHitRerollDiceAmount(weaponAttacks, rerollModifier, hitProbability, ASRaw) {

        let result = 0;

        if (rerollModifier === 1) {
            result = this.calcHitRerollDiceAmount(weaponAttacks, rerollModifier/6);

        } else if (rerollModifier === 6) {


            if ((1 - hitProbability) > (Math.abs(1 - this.calcHitProbability(ASRaw)))) {
                result = Math.abs(1 - this.calcHitProbability(ASRaw));
            } else {
                result = Math.abs(1 - hitProbability);
            }

        }

        return result * weaponAttacks;

    }

    calcRerollProbability(hitProbability, rerollDiceAmount) {
        return hitProbability * rerollDiceAmount;
    }

    calcHitsInterimResult(attacks, rerollProbability) {
        return attacks + rerollProbability;
    }

    calcCPHitProbability(cpModifier, calcHitProbability) {
        return cpModifier * calcHitProbability;
    }

    calcWeaponAbilityHitMultiplierProbability(weaponAbility, hitModifier) {
        let result = 0;

            weaponAbility.forEach(elem => {

                if (elem.id === 'teslaWeaponAbility') {

                    result = this.calcWeaponHitMultiplierProbabilityItem(elem.abilityFactors.additionalAttackHitProbability[0], hitModifier, elem.abilityFactors.additionalAttackModifier[0]);

                }

            });

        return result;


    }

    calcWeaponHitMultiplierProbabilityItem(additionalAttackHitProbability, hitModifier, additionalAttackModifier) {
        let calc = ((this.probabilityAccuracySkillMinuend - additionalAttackHitProbability + hitModifier) / this.diceDivisor) * additionalAttackModifier;

        if (calc > 5/6) {
            return 5/6;
        } else if (calc < 0) {
            return 0;
        } else {
            return calc;
        }

    }

    calcWoundAccuracyValue(attackerStrength, defenderToughness) {

        if (attackerStrength >= (defenderToughness * this.toWoundAccuracyValueModifier)) {
            return 2;
        } else if (attackerStrength > defenderToughness && attackerStrength < (defenderToughness * this.toWoundAccuracyValueModifier)) {
            return 3;
        } else if (attackerStrength === defenderToughness) {
            return 4;
        } else if (attackerStrength < defenderToughness && attackerStrength > (defenderToughness/this.toWoundAccuracyValueModifier)) {
            return 5;
        } else {
            return 6;
        }


    }



}
