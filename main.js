// Personal note: this exercise is the most clear I've had it presented. This felt liek a breakthrough. Rememebr teh feeling of teh "click" just liek BloodBorne! You're officially feeling it, Mr. Krabs. 3:47pm Aug 25th 2022

// Produce a car chassis (no input, outputs new chassis object)
// Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
// Add an engine to chassis (input is a chassis, output is chassis with an engine)
// Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
// Add a body to chassis (input is a chassis, output is chassis with a body)
// Add a drive train to chassis (input is a chassis, output is chassis with a drive train)

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}
	return newChassisObject
}

let emptyChassisObject = createChassis()

const addwheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = '4.8L'
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = 'Tilting'
    return chassisObject
} 

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = 'Two wheel drive'
    return chassisObject
}

let chassisWithWheels = addwheels(emptyChassisObject)
let chassisWithEngine = addEngine(emptyChassisObject)
let chassisWithSteeringWheel = addSteeringWheel(emptyChassisObject)
let chassisWithDriveTrain = addDriveTrain(emptyChassisObject)

let assembledChassis = emptyChassisObject

console.log(assembledChassis)