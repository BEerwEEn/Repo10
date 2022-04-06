function myFunction(){
   var myMusic = {
       001: {
           artist: "Billy Joel",
           title: "Piano Man",
           relase_year: 1073,
           formats: {
               1: "CD",
               2: "8T",
               3: "LP"
   
           },
           gold: true
       },
       002: {
           artist: "Red Hot Chili Peppers",
           title: "Mothers Milk",
           relase_year: 1989,
           formats: {
               1: "CD",
               2: "CS",
               3: "LP"
   
           },
           gold: true
       }
   };
   return myMusic;
   }
   console.log(myFunction());
   myFunction()[2];
   module.exports = myFunction;
