//Usage of spread and unshift

const array = [1,2,3,4,5];

const newArray = [...array,6,7];

const intialArr = [-1,0];
newArray.unshift(...intialArr);
console.log(newArray); //[-1,0,1,2,3,4,5,6,7]



const obj = {name : "anusree", age: "30"}
const education = {qualification : "degree"}
const newObj = {...obj, ...education }

console.log(newObj); // { age: "30", name: "anusree", qualification: "degree"}

