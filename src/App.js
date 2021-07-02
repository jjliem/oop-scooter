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

    isLegalAge(user) {
        if (user.age >= 18) {
            return true
        }
    }

    signUp(user) {
        let isLegalAge = this.isLegalAge(user)
        if (isLegalAge) {
            this.users.push(user)
        } else {
            throw new Error('User must be 18 or over to rent scooter')
        }   
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
    }
}

module.exports = App