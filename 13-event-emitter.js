const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// when someone rings the bell , you have to do this
customEmitter.on('response', (name , id)=>{
   console.log(`data received successfully: ${name} with id : ${id}` )
})
customEmitter.on('response', ()=>{
  console.log('some other logic here' )
})

//ringing the bell
customEmitter.emit('response', 'john', 34);


