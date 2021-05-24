const caloriesCalculator = (personalInformation) => {
    const {
        weight,
        height,
        age,
        gender,
        activityLevel,
        weightGoal,
    } = personalInformation;

    if (gender === 'man') {
        var mba = 66 + (13.7 * weight) + (5 * height) - (6.75 * age);
    } else {
        var mba = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
    if (weightGoal < weight) {
        var deficit1 = 0.8;
        var deficit2 = 0.75;
    } else {
        var deficit1 = 1.2;
        var deficit2 = 1.25;
    }

    const caloriesToMaintain = mba * activityLevel;

    const results = {
        caloriesToMaintain: parseInt(caloriesToMaintain),
        caloriesObjetive1: parseInt(caloriesToMaintain * deficit1),
        caloriesObjetive2: parseInt(caloriesToMaintain * deficit2),
        daysForGoal: Math.abs(parseInt(((weight - weightGoal) / 0.5) * 7))
    }

    return results;
}
export default caloriesCalculator;