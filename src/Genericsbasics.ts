const names:Array<string> =[];

// function loging(a:any,b:any):any {
//     console.log(a,b);     // Wriring this method as I'm unable to access Object.assign method from VS editor
// }

// function merge<T ,U > (objA:T,objB:U){
//   return loging(objA,objB);         //Generics allows us to pass any value irrespective of types
// }

// const mergeObj =merge({name:'Jeevan'},28)
// console.log(mergeObj);

// Working with constraints use extends keyword
function loging(a:any,b:any):any {
    console.log(a,b);     // Wriring this method as I'm unable to access Object.assign method from VS editor
}

function merge<T extends object ,U extends object > (objA:T,objB:U){
  return loging(objA,objB);         //Generics allows us to pass any value irrespective of types
}

const mergeObj =merge({name:'Jeevan'},{age:28}) // here 28 cant be passed as object constraint is defined
console.log(mergeObj);

interface Lenghty{
    length:number;
}
function countandDesctiption<T extends Lenghty>(element:T):[T,string]{
let description='Got no Value';
if(element.length===1){
 description='Got 1 element';
} else if (element.length > 1){
    description='Got ' + element.length + ' Value'
}
return [element,description]
}
const valueDescription = countandDesctiption('Hi There')
console.log(valueDescription);

//Keyof used to obtain the type of object in key
function extractandConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key]
}
console.log(extractandConvert({name:'Jeevan', age:30},'name'));