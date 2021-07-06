const User = require('./User')
const Station = require('./Station')
const Scooter = require('./Scooter')

class App {
    constructor() {
        this.users = []
        this.stations = []
    }

    addStation(station) {
        this.stations.push(station)
    }

    rentScooter(user, station) {
        let firstAvailable = station.scooters.filter(scooter => scooter.available == true)[0];
        user.scooter = firstAvailable;
        user.scooter.available = false;
        let remainingScooters = station.scooters.filter((scooter) => {
            if(scooter.id != firstAvailable.id) {
                return scooter
            }
        })
        station.scooters = remainingScooters
    }

    returnScooter(user, station) {
        station.scooters.push(user.scooter)
        user.scooter = {}
        user.bill = 5.00
    }

    flagScooterAsBroken(user, station) {
        user.scooter.broken = true
        console.log("Maintenance has been alerted")
        station.scooters.push(user.scooter)
        user.scooter = {}
    }
}

module.exports = App