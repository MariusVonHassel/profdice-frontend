import Calculation from './Calculation';

export default class CalculationCalls extends Calculation {

    constructor(attackerStats, defenderStats) {
        super(attackerStats, defenderStats);


        this.setAttackerSettings(attackerStats);
        this.setDefenderSettings(defenderStats);

        this.calculateAttacker();
        this.calculateDefender();

    }

    setAttackerSettings(attackerStats) {
        this.setAttacker(attackerStats);
    }

    setDefenderSettings(defenderStats) {
        this.setDefender(defenderStats);
    }

    calculateAttacker() {

        let equippedWeapons = this.getWeaponShotCountAttacker();
        equippedWeapons.forEach(item => {
            // this.calcTotalShotsWeapon(item.weaponModeCount);
        });

        console.log(equippedWeapons[0].weaponModeCount);
    }

    calculateDefender() {
        //console.log(this.calcTotalShotsWeapon());
    }


}