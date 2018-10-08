import Calculation from './Calculation';

export default class MeleeCalc extends Calculation {

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
    }

    handleAttacks() {

    }

}