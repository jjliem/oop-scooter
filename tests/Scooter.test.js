const Scooter = require('../src/Scooter')

describe('Scooter object', ()  => {
    const testScooter = new Scooter(0)
    test('Scooter has id', () => {
        expect(testScooter.id).toBe(0)
    })

    test('Scooter has battery', () => {
        expect(testScooter.battery).toBe(100)
    })

    test('Scooter is not broken', () => {
        expect(testScooter.isBroken).toBeFalsy
    })
})