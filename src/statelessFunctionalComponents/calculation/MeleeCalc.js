import Calculation from './Calculation';

export default class MeleeCalc extends Calculation {

    constructor(attackerData, attackerWeaponStats, defenderData) {
        super();

        this.settings(attackerData, attackerWeaponStats, defenderData);
        this.calculateHandler();
    }

    settings(attackerData, attackerWeaponStats, defenderData) {
        this.setAttacker(attackerData);
        this.setDefender(defenderData);
        this.setAttackerWeaponStats(attackerWeaponStats);
    }

    calculateHandler() {

    }

}