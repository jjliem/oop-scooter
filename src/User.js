const Station = require('./Station')

class User {

    static lastId = 0;
    id;

    constructor(email, password, age) {
        this.id = ++User.lastId
        this.email = email
        this.password = password
        this.age = age
        this.scooter = {}
    }

    
}

module.exports = User