class Scooter {

    static lastId = 0;
    id;

    constructor(){
        this.id = ++Scooter.lastId
        this.battery = 100
        this.isBroken = false
        this.available = true
    }
}

module.exports = Scooter