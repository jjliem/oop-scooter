const Station = require('../src/Station')

class User {

    static lastId = 0;
    id;

    constructor(email, password, age) {
        this.id = ++User.lastId
        this.email = email
        this.password = password
        this.age = age
        this.scooters = []
    }

    addScooter(station, scooter) {
        this.scooters.push(scooter)
    }
}

module.exports = User