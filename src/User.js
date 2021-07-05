const Station = require('./Station')

class User {

    static lastId = 0;
    id;

    constructor(email, password, age) {
        this.id = ++User.lastId
        this.email = email
        this.password = password
        this.scooter = {}
        this.bill = 0

        if (age >=18){
            this.age = age
        } else {
            throw new Error('User must be 18 or older to sign up')
        }
    }


}

module.exports = User