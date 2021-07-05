const User = require('./User')
const Station = require('./Station')

class App {
    constructor() {
        this.users = []
        this.stations = []
    }

    addStation(station) {
        this.stations.push(station)
    }

    rentScooter(user, station) {
        let firstAvailable = station.scooters.filter(scooter => scooter.available == true)[0]
        user.scooter = firstAvailable
        firstAvailable.available = false
        let remainingScooters = station.scooters.filter((scooter) => {
            if(scooter.id != firstAvailable.id) {
                return scooter
            }
        })
        station.scooters = remainingScooters
    }

    returnScooter(user,station) {
        user.scooter.available = true
        station.scooters.push(user.scooter)
        user.scooter = {}
        user.bill = 5.00
    }
}

module.exports = App