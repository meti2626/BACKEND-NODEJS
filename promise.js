

  // this is call back hell

// walkDog(() => {
//     cleanRoom(() => {
//         takeOutTrash(() => {
//             console.log('All done!');
//         });
//     });
// });

// walkDog().then(value =>{console.log(value); return cleanRoom();})
// .then(value =>{console.log(value); return takeOutTrash();})
// .then(value =>{console.log(value); console.log('All done!');}).catch(err =>{console.log(err);});

function walkDog(){
  return new Promise((resolve , reject) =>{
       setTimeout(() => {
        const walkDog= false;
        if (walkDog)
         resolve('Walking the dog done!')
       else 
        reject('Walking the dog not done!')
   }, 2000);
    });
}

function cleanRoom(){

  return new Promise((resolve , reject) =>{
        setTimeout(() => {
           const CleanRoom = true;

           if(CleanRoom)
           resolve('Cleaning the room done!')
           else
            reject('Cleaning the room not done!')
        }, 2500);
        });
}

function takeOutTrash(){
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
          const Trash = true;

         if(Trash) 
          resolve('Taking out the trash done!')
         else
          reject('Taking out the trash not done!')
        }, 500);
  })
  }

  async function doChores()
  {
     try{ const walkDogResult = await walkDog();              
      console.log(walkDogResult);
      
      const cleanRoomResult = await cleanRoom();
      console.log(cleanRoomResult);

      const takeOutTrashResult = await takeOutTrash();
      console.log(takeOutTrashResult);

      console.log('All done!');}
      catch(err){
        console.log(err);
      }
  }

  doChores()
