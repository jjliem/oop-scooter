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

    async charge(scooter) {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
        scooter.battery = 100;
        scooter.available = true;
        
        console.log('Charge complete');   
   }
}

module.exports = Station