
walkDog(() => {
    cleanRoom(() => {
        takeOutTrash(() => {
            console.log('All done!');
        });
    });
});


function walkDog(callback){
  setTimeout(() => {
    console.log('Walking the dog done!')
    callback();
   }, 2000);

}

function cleanRoom(callback){
    setTimeout(() => {
            console.log('Cleaning the room done!')
            callback();
        }, 2500);
}

function takeOutTrash(callback){
    setTimeout(() => {
         console.log('Taking out the trash done!')
         callback();
        }, 500); 

      }