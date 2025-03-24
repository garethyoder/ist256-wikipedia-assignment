
console.log("Hello, World!")

console.error("This is an error")

let cars = ["Saab", "Volvo", "BMW"]

let cars_details = {
    "Saab": {
        "color": "red",
        "year": 2010
    },
    "Volvo": {
        "color": "blue",
        "year": 2012
    },
    "BMW": {
        "color": "black",
        "year": 2014
    }
}

let BLANK1 = cars_details.Volvo.color
let BLANK2 = cars_details.BMW.year - cars_details.Saab.year
let BLANK3 = (cars_details.Volvo.color + ", " +cars_details.Saab.color + ", and " + cars_details.BMW.color)

let blue_cars = 0
for (let i = 0; i < cars.length; i++) {
    //console.log(cars[i])
    if (cars_details[cars[i]].color !== "blue") {
        console.log(cars[i])
        blue_cars += 1
    }
}

console.log(`Volvo is the color ${BLANK1}`)
console.log(`The BMW is ${BLANK2} years older than the Saab`)
console.log(`The cars are ${BLANK3} colors`)
console.log(`There are ${blue_cars} cars not the color blue`)



//// DATE EXAMPLE

let date = new Date()

console.log(`Midnight will be in blank hours, blank minutes, and blank seconds`)
