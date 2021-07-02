const Station = require('../src/Station')
const Scooter = require('../src/Scooter')

describe('Station object', () => {
    const testStation1 = new Station('Dallas')
    const testStation2 = new Station('Austin')
    const testScooter = new Scooter()

    test('Station has location', () => {
        expect(testStation1.location).toBe('Dallas')
    })

    test('Station has incrementing id', () => {
        expect(testStation2.id).toBe(2)
    })

    test('Station adds scooter', () => {
        testStation1.addScooter(testScooter)
        expect(testStation1.scooters.length).toBe(1)
    })

    test('Station removes scooter', () => {
        testStation1.removeScooter(testScooter)
        expect(testStation1.scooters.length).toBe(0)
    })
})
