class Scooter {

    static lastId = 0;
    id;

    constructor(){
        this.id = ++Scooter.lastId
        this.battery = 100
        this.available = true
        this.broken = false
    }

}

module.exports = Scooter