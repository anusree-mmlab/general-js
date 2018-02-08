const fetch = require('node-fetch');


function timeoutFn() {
    setTimeout(() => {
        console.log('inside async fun');
        return 5;
    }, 2000);
    
}


async function myFunction() {
    try{
        //anAsynchronous operation call
        //const res = await fetch('https://catappapi.herokuapp.com/users/123');
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        let t = 'bla' // This line will be executed only after the asynchronous call is executed
        res.json().then((post) => {
            return post
         }).then((data) => {
            console.log('post', data)
         }).catch((err) => {
             console.log('err', err);
         });
    }
    catch(err) {
        console.log(err);
    }    
  }
  
  myFunction();
