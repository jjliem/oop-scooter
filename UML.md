User Stories (Use Cases)
As an {X}, I want to {Y}, by {Z}
X == Kind of user Y == Action Z == Behavior

As a customer, I want to sign up for an account by email and password
As a customer, I want to rent a scooter by checking out from a charging station
As a customer, I want to return a scooter by checking in to a charging station
As a customer, I want to pay for a scooter by credit card
As a customer, I want to mark a scooter as broken by flagging it


Class Diagram (Pseudo-OOP)

class ScooterApp {
    users: ARRAY
    stations: ARRAY
    addUser()
    addStation()
    rentScooter()
    returnScooter
    //authorizeUser()
}

class Station {
	id: INTEGER
	location: STRING
    scooters: ARRAY
}

class Scooter {
    id: INTEGER
    battery: INTEGER
    broken: BOOLEAN
    available: BOOLEAN
} 

class User {
	id : INTEGER
	email : STRING
    password: STRING
    age: INTEGER
}

