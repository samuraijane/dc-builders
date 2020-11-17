//This file is a Test Suite
const dansAdder = require('./staceyAdder');
//Test Case #1 here
test("one plus two equals three", ()=> {
    expect(dansAdder(1,2)).toBe(3);
})

//test #2
test("strings: one plus two equals three", ()=> {
    expect(dansAdder("1","3")).toBe(4);
})

//test #3
test ("strings: one plus nothing", ()=> {
    expect(dansAdder("1", undefined)).toBe(1);
})