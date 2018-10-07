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

    calcMissedAttacks(weaponAttacks, weaponHits) {
        return weaponAttacks - weaponHits;
    }

}