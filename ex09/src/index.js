function myFunction(myObj, checkProp){

   myObj = {

      title: 'Titanic'
      song: 'My Heart Will Go On'
      genre: 'drama'

   }

   if(myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
  }
  return "Not Found";

   
}

module.exports = myFunction;

console.log(myObj());