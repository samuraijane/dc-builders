

const calculateBowlingScore = require('./bowlingCalculator');

test('One pin per frame is 20', ()=> {
    
    const scores = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']

    expect(calculateBowlingScore(scores)).toBe(20);
})

test('A spare counts the next ball', ()=> {
    
    const scores = ['1', '/', '6', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

    expect(calculateBowlingScore(scores)).toBe(22);
})

test('A strike counts the next two balls', ()=> {
    
    const scores = ['X', '5', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

    expect(calculateBowlingScore(scores)).toBe(26);
})

test('A perfect game is 300', ()=> {
    
    const scores = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    expect(calculateBowlingScore(scores)).toBe(300);
})


// We should also test some error cases here with invalid configurations, but I'm tired zzZZZZ
