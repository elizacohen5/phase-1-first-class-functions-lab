// Code your solution in this file!
const returnFirstTwoDrivers = function (nameArr) {
    let newNameArr = nameArr.slice(0,2);
    return newNameArr;
}

const returnLastTwoDrivers = function (nameArr) {
    let newNameArr = nameArr.slice(nameArr.length - 2, nameArr.length);
    return newNameArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (int) {
    let fare = int;
    return function multiply (fare) {
        return fare * 5;
    };
};

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers (nameArr, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(nameArr);
}