
const daysInAMonth = require('./daysInAMonth')

test('January 2001 has 31 days', ()=> {
    expect(daysInAMonth(1, 2001)).toBe(31);
})

test('February 2001 has 28 days', ()=> {
    expect(daysInAMonth(2, 2001)).toBe(28);
})

test('February 2004 has 29 days', ()=> {
    expect(daysInAMonth(2, 2004)).toBe(29);
})

test('February 2100 has 28 days', ()=> {
    expect(daysInAMonth(2, 2100)).toBe(28);
})

test('November 2020 has 30 days', ()=> {
    expect(daysInAMonth(11, 2020)).toBe(30);
})



