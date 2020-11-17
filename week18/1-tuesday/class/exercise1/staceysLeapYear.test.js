//This file is a Test Suite
const isLeapYearCheck = require('./staceysLeapYear');

//Test Case here
test("year is divisible by 4", ()=> {
    expect(isLeapYearCheck(2020)).toBe(true);
})

test("year is divisible by 100", ()=> {
    expect(isLeapYearCheck(2020)).toBe(true);
})

test("year is divisible by 400", ()=> {
    expect(isLeapYearCheck(2020)).toBe(true);
})

test("year is divisible by 4", ()=> {
    expect(isLeapYearCheck(2016)).toBe(true);
})

test("year is divisible by 100", ()=> {
    expect(isLeapYearCheck(1700)).toBe(false);
})