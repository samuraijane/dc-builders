const { TestScheduler } = require("jest");

const isLeapYear = require('./leapYear')

test('is leap year - 2020', ()=> {
    expect(isLeapYear(2020)).toBeTruthy();
})

test('not a leap year 2019', ()=> {
    expect(isLeapYear(2019)).toBeFalsy();
})