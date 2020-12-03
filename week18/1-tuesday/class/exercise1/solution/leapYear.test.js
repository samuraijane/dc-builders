
const isLeapYear = require('./leapYear')

test('is leap year - 2020', ()=> {
    expect(isLeapYear(2020)).toBeTruthy();
})

test('not a leap year 2019', ()=> {
    expect(isLeapYear(2019)).toBeFalsy();
})

test('not a leap year 2100', ()=> {
    expect(isLeapYear(2100)).toBeFalsy();
})

test('is a leap year 2000', ()=> {
    expect(isLeapYear(2000)).toBeTruthy();
})