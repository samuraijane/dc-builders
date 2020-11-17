const leapYear = require('./leapYear');

test('shows if 1984 is a leap year', () => {
    expect(leapYear(1984)).toBeTruthy();
})

test('shows if 1983 is a leap year', () => {
    expect(leapYear(1983)).toBe(false);
})