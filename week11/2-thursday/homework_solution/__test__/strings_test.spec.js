let should = require('should')
Strings = require('../strings')

describe('Strings Module', () => {
    let strings;
    beforeEach(() => {
        strings = new Strings()
    })

    describe('reverse function', () => {
        it('should return a reversed string', () => {
            reversed = strings.reverse('hello world')
            should.exist(reversed)
            reversed.should.be.eql('dlrow olleh')
        })
    })

    describe('is-pallindrome function', () => {
        it('should return true for a pallindrome', () => {
            let candidate = 'tacocat'
            actual = strings.detectPallindrome(candidate)
            should.exist(actual)
            actual.should.be.true
        })

        it('should return false for a non-pallindrome', () => {
            let candidate = 'not a pallindrome'
            actual = strings.detectPallindrome(candidate)
            should.exist(actual)
            actual.should.be.false
        })

        it('should return true if valid and spaces are present', () => {
            let candidate = '  taco cat  '
            actual = strings.detectPallindrome(candidate)
            should.exist(actual)
            actual.should.be.true
        })
    })

    describe('shift function', () => {
        it('should shift letters correctly', () => {
            let candidate = "abcdefg"
            actual = strings.shift(candidate)
            should.exist(actual)
            actual.should.be.eql('bcdefgh')
        })

        it('should wrap around at z', () => {
            let candidate = "zzz"
            actual = strings.shift(candidate)
            should.exist(actual)
            actual.should.be.eql('aaa')
        })
    })

    describe('is-number function', () => {
        it('should detect integers correctly', () => {
            let candidate = '1234'
            actual = strings.isNumber(candidate)
            should.exist(actual)
            actual.should.be.true 
        })

        it('should detect floats correctly', () => {
            let candidate = '88.1241'
            actual = strings.isNumber(candidate)
            should.exist(actual)
            actual.should.be.true
        })

        it('should detect monitary amounts correctly', () => {
            let candidate = '$14.25'
            actual = strings.isNumber(candidate)
            should.exist(actual)
            actual.should.be.true
        })

        it('should detect percentages correctly', () => {
            let candidate = '56.128%'
            actual = strings.isNumber(candidate)
            should.exist(actual)
            actual.should.be.true
        })

        it('should fail on non-numbers', () => {
            let candidate = 'ABCD'
            actual = strings.isNumber(candidate)
            should.exist(actual)
            actual.should.be.false
        })

        it('should fail on mixed content', () => {
            let candidate = '1234ABCDEF'
            actual = strings.isNumber(candidate)
            should.exist(actual)
            actual.should.be.false
        })
    })
})