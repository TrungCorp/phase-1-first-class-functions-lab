// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (function (array){
    return  array.slice(0,2)
});
const returnLastTwoDrivers = (array) => array.slice(2) ;
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(multiplier)
{
    return (fare) => fare*multiplier 
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers,selectingDrivers)
{
    return selectingDrivers(drivers)
}