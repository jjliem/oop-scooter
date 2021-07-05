const App = require('../src/App')
const User = require('../src/User')
const Station = require('../src/Station')
const Scooter = require('../src/Scooter')

describe('App object', () => {
    const testApp = new App()
    const testUser1 = new User("jody@gmail.com", "123ABC", 18)
    const testUser2 = new User("julie@gmail.com", "123ABC", 18)
    const testStation1 = new Station('1st Street')
    const testStation2 = new Station('2nd Street')
    const testScooter1 = new Scooter()
    const testScooter2 = new Scooter()

    test('App adds station', () => {
        testApp.addStation(testStation1)
        expect(testApp.stations.length).toBe(1)
    })

    test('User rents Scooter from Station', () => {
        testStation1.addScooter(testScooter1)
        testStation1.addScooter(testScooter2)
        testApp.rentScooter(testUser1, testStation1)
        expect(testUser1.scooter).toStrictEqual(testScooter1)
        expect(testStation1.scooters).toStrictEqual([testScooter2])
    })

    test('User returns Scooter to Station', () => {
        testStation1.addScooter(testScooter1)
        testApp.rentScooter(testUser1, testStation1)
        testApp.returnScooter(testUser1, testStation2)
        expect(testUser1.scooter).toStrictEqual({})
        expect(testStation2.scooters).toStrictEqual([testScooter2])
    })
})
