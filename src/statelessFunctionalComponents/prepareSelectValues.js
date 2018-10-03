const prepareSelectValues = (savedUnits, units, language, selectableUnits = []) => {

    let unitMatch = savedUnits.find(key => key.id ===  units.value);

    if (unitMatch) {
        unitMatch['unitIds'].forEach(item => {
            selectableUnits.push({value: item, label: language.t(item), race: unitMatch.id});
        });
    }

    return selectableUnits;

};

export default prepareSelectValues;