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

    addUser(user) {
        let isLegalAge = this.isLegalAge(user)
        if (isLegalAge) {
            this.users.push(user)
        } else {
            throw new Error('User must be 18 or over to rent scooter')
        }
        
    }

    rentScooter(station, user) {
        
    }

    
}

module.exports = App