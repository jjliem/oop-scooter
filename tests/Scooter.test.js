const Scooter = require('../src/Scooter')

describe('Scooter object', ()  => {
    const testScooter1 = new Scooter()
    const testScooter2 = new Scooter()

    test('Scooter has incrementing id', () => {
        expect(testScooter2.id).toBe(2)
    })

    test('Scooter has battery', () => {
        expect(testScooter1.battery).toBe(100)
    })

    test('Scooter is available', () => {
        expect(testScooter1.available).toBeTruthy
    })
})