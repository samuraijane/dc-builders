// This file is a Test Suite
const dansAdder = require('./danAdder');

// Test Case here
test("one plus two equals three", ()=> {
    expect(dansAdder(1,2)).toBe(3);
})

// Test Case here
test("one plus two equals three", ()=> {
    expect(dansAdder(1,3)).toBe(4);
})

// Test Case here
test("strings: one plus two equals three", ()=> {
    expect(dansAdder("1","3")).toBe(4);
})

// Test Case here
test("strings: one plus nothing", ()=> {
    expect(dansAdder("1",undefined)).toBe(1);
})