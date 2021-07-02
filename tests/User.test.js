const User = require('../src/User')
const App = require('../src/App')
const Scooter = require('../src/Scooter')

describe('User object', () => {
    const testUser1 = new User('jody@gmail.com', '123ABC', 18)
    const testUser2 = new User('julie@gmail.com', '123ABC', 18)
    const testScooter = new Scooter()
    

    test('User has email', () => {
        expect(testUser1.email).toBe('jody@gmail.com')
    })

    test('User has password', () => {
        expect(testUser1.password).toBe('123ABC')
    })

    test('User has age', () => {
        expect(testUser1.age).toBe(18)
    })

    test('User has incrementing id', () => {
        expect(testUser2.id).toBe(2)
    })

    test('User rents scooter', () => {
        testUser1.addScooter(testScooter)
        expect(testUser1.scooters.length).toBe(1)
    })

    
})