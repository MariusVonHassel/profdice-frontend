import Properties from './Properties';

export default class Calculation extends Properties {

    static calcTotalShotsWeapon(weaponCount, weaponShots, additionalShots) {
        return weaponCount * weaponShots + additionalShots;
    }

}