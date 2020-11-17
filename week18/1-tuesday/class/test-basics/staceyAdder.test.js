//This file is a Test Suite
const dansAdder = require('./staceyAdder');
//Test Case here
test("one plus two equals three", ()=> {
    expect(dansAdder(1,2)).toBe(3);
})

