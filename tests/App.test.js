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
    testApp.addStation(testStation1)
    testApp.addStation(testStation2)
    testStation1.addScooter(testScooter1)
    testStation2.addScooter(testScooter2)

    test('App adds station', () => {
        expect(testApp.stations.length).toBe(2)
    })

    test('User rents Scooter from Station', () => {
        testApp.rentScooter(testUser1, testStation1)
        expect(testUser1.scooter).toStrictEqual(testScooter1)
    })

    test('User returns Scooter to Station', () => {
        testApp.returnScooter(testUser1, testStation1)
        expect(testUser1.scooter).toStrictEqual({})
        expect(testStation1.scooters).toStrictEqual([testScooter1])
    })

    test('User flags Scooter as broken', () => {
        testApp.rentScooter(testUser2, testStation2)
        testApp.flagScooterAsBroken(testUser2, testStation2)
        expect(testUser2.scooter).toStrictEqual({})
        expect(testStation2.scooters[0].broken).toBe(true)
    })
})
