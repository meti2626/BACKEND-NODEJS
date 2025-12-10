//OS 

const OS =  require('os')


// INFO ABOUT CURRENT USER 

const user = OS.userInfo()
console.log(user)


//methode returns the system uptime in second
 

console.log(`Tye System up time is ${OS.uptime()} seconds`)

const currentOs ={
  name:OS.type(),
  release:OS.release(),
  totalMem:OS.totalmem(),
  freeMem:OS.freemem(),
}

console.log(currentOs)