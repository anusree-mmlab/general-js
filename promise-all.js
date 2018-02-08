//Native browser support is now available for promise


const p1 = new Promise((resolve, reject) => {
    //Normally some asynchronous operations are performed here
    setTimeout(()=> {
      
      resolve({user:'anusree'});
      
      //reject({user:null});
     
    }, 2000)
  });
  
  
const p2 = new Promise((resolve, reject) => {
    //Normally some asynchronous operations are performed here
    setTimeout(()=> {
      
      resolve({user:'unni'});
      
      //reject({user:null});
     
    }, 3000)
}) 
    
  
  
  
  Promise.all([p1, p2]).then((data) => {
    console.log('data', data);
  }).catch((err) => {
    console.log("Error is ", err);
  });