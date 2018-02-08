//Native browser support is now available for promise


const p = new Promise((resolve, reject) => {
    //Normally some asynchronous operations are performed here
    setTimeout(()=> {
      
      resolve({user:'anusree'});
      
      //reject({user:null});
     
    }, 2000)
  }) 
  
  
  
  p.then((data) => {
    console.log('data', data);
  }).catch((err) => {
    console.log("Error is ", err);
  });


/*   Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error) */

  Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 5)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error)

  //the output will print //6