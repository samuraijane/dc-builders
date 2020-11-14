// This file is a test suite which is a bunch of test cases that are run against function

const adder = require('./adder');

// Test Case
test("one plus two equals three", () => {
    expect(adder(1,2)).toBe(3)
})

test("Strings: one plus two equals three", () => {
    expect(adder("1","2")).toBe(3)
})

test("Strings: one plus nothing", () => {
    expect(adder("1",undefined)).toBe(1)
})