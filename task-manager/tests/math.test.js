const { calculateTip } = require('../src/math')

test('Hello world!', () => {

})

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .4)
    expect(total).toBe(14)
})

test('should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})
