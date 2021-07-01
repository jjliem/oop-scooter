const User = require('../src/User')

describe('User object', () => {
    const testUser = new User('jody@gmail.com')
    test('User has email', () => {
        expect(testUser.email).toBe('jody@gmail.com')
    })
})