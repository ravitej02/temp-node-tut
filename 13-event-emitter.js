//get back the class
//If want custom extend from class
//otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter() //instance 

//on and emit methods
//keep track of the order
//additional arguments
//built-in modules utilizes it

//first we have to listen for the event, then we have to emit the event
customEmitter.on('response',(name, age) => { //on methods listens for an event
    console.log(`data received user name is ${name} with age:${age}`)
})
customEmitter.on('response',() => { //on methods listens for an event
    console.log(`do some other work`)
})

customEmitter.emit('response','raviteja',19)//emit method emits an event