class Station {

    static lastId = 0;
    id;

    constructor(location){
        this.id = ++Station.lastId
        this.location = location
        this.scooters = []
    }

    addScooter(scooter) {
        this.scooters.push(scooter)
    }

    removeScooter(scooter) {
        this.scooters.pop(scooter)
    }
}

module.exports = Station