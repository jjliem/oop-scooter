const App = require('../src/App')
const User = require('../src/User')
const Station = require('../src/Station')
const Scooter = require('../src/Scooter')

describe('App object', () => {
    const testApp = new App()
    const testUser1 = new User("jody@gmail.com", "123ABC", 18)
    const testUser2 = new User("julie@gmail.com", "123ABC", 17)
    const testStation1 = new Station('1st Street')
    const testStation2 = new Station('2nd Street')
    const testScooter1 = new Scooter()
    const testScooter2 = new Scooter()

    test('App adds station', () => {
        testApp.addStation(testStation1)
        expect(testApp.stations.length).toBe(1)
    })

    test('App adds user if >=18', () => {
        testApp.addUser(testUser1)
        expect(testApp.users.length).toBe(1)
    })

    test('throws error if user if <18', () => {
        expect(() =>{
            testApp.addUser(testUser2)
        }).toThrow()
    })

})
