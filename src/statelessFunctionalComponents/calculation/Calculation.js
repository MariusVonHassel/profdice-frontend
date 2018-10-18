import Properties from './Properties';

export default class Calculation extends Properties {

    calcAttacks(weaponCount, weaponAttacks, additionalAttacks) {
        return weaponCount * weaponAttacks + additionalAttacks;
    }

    calcProbability(accuracySkill) {
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

    calcRerollDiceAmount(attacks, rerollModifier, probability, ASRaw) {

        let result = 0;

        if (rerollModifier === 1) {
            result = rerollModifier/6;

        } else if (rerollModifier === 6) {


            if ((1 - probability) > (Math.abs(1 - this.calcProbability(ASRaw)))) {
                result = Math.abs(1 - this.calcProbability(ASRaw));
            } else {
                result = Math.abs(1 - probability);
            }

        }

        return result * attacks;

    }

    calcRerollProbability(hitProbability, rerollDiceAmount) {
        return hitProbability * rerollDiceAmount;
    }

    calcInterimResult(attacks, rerollProbability, cpHitProbability) {
        return attacks + rerollProbability + cpHitProbability;
    }

    calcCPHitProbability(cpModifier, calcHitProbability) {
        return cpModifier * calcHitProbability;
    }

    calcWeaponAbilityMultiplierProbability(weaponAbility, modifier) {
        let result = 0;

            weaponAbility.forEach(elem => {

                if (elem.id === 'teslaWeaponAbility') {

                    result = this.calcWeaponHitMultiplierProbabilityItem(elem.abilityFactors.additionalAttackHitProbability[0], modifier, elem.abilityFactors.additionalAttackModifier[0]);

                }

            });

        return result;


    }

    calcWeaponAbilityMortalWoundsProbabiity(weaponAbility, modifier) {
        let result = 0;

        weaponAbility.forEach(elem => {

            if (elem.id === 'transdimensionalBeamerAbility') {
                result = this.calcWeaponHitMultiplierProbabilityItem(elem.abilityFactors.additionalMortalWoundProbability[0], modifier, elem.abilityFactors.additionalMortalWoundDamage[0]);
            } else if (elem.id === 'synapticDisintegratorAbility') {
                result = this.calcWeaponHitMultiplierProbabilityItem(elem.abilityFactors.additionalMortalWoundProbability[0], modifier, elem.abilityFactors.additionalMortalWoundDamage[0]);
            }

        });

        return result;

    }

    calcWargearAbilityMultiplierProbability(wargearAbilities, unitAbility) {
        let resultWargear = 7;
        let resultUnit = 7;

        // wargearAbilities.forEach(elem => {

            // if (elem.abilityFactors.hasOwnProperty('invunerableSave')) {
            if (wargearAbilities.hasOwnProperty('invunerableSave')) {
                // resultWargear = elem.abilityFactors.invunerableSave[0];
                resultWargear = wargearAbilities.abilityFactors.invunerableSave[0];
            }


        // });

        unitAbility.forEach(elem => {

            if (elem.abilityFactors.hasOwnProperty('invunerableSave')) {
                resultUnit = elem.abilityFactors.invunerableSave[0];
            }

        });

        return (resultUnit > resultWargear) ? resultWargear : resultUnit;
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

    calcWeaponDamage(damage, maxHealth) {

        let result = () => {
            switch (damage) {
                case 'D3': {
                    return 2;
                }
                case 'D6': {
                    return 3.5;
                }
                default: {
                    return damage*1
                }
            }
        };

        return (result() > maxHealth) ? maxHealth : result();

    }



}
