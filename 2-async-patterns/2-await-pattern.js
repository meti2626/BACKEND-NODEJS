const {readFile} = require('fs');


const getText = (path)=>{
    return new Promise((resolve, reject)=>{
    readFile(path,'utf8',(err,result)=>{
    if(err){
        reject(err)
    }
    else{
        resolve(result)
    }
       })
})
}

// getText('./content/first.txt').then((result)=>{console.log(result)
// }).catch((err)=>{console.log(err)});

const start = async() =>{
  try{
    const first = await getText('./content/first.txt');
    console.log(first)
   }
   catch(err)
   {
    console.log(err)
   }

}

start()










const {readFile , writeFile} = require('fs');
const util= require('util')
const readFilePromise = util.promisify(readFile)
const readWritePromise = util.promisify(writeFile)

const start = async()=>{
  
  try{
      const first = await  readFilePromise('./content/first.txt');
      const second = await getText('./content/second.txt')
      console.log(first);
      console.log(second)
}
catch(error){
   console.log(error)
}
}

start();
