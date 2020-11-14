const leapYearChecker = require('./leapyearchecker');

// Test Case
test("2020 is a Leap Year", () => {
    expect(leapYearChecker(2020)).toEqual(true)
})

test("2000 is a special Leap Year", () => {
    expect(leapYearChecker(2000)).toEqual(true)
})

test("1900 is not a Leap Year", () => {
    expect(leapYearChecker(1900)).toEqual(false)
})
