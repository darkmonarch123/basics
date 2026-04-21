// let A , B , C , D;
// A = true;
// B = false;
// C = true ;
// D = false;

// console.log(A || C) // True
// console.log(A || B) // True
// console.log(B || D) // false


// console.log(A && C) // true
// console.log(B && D) // false

// console.log(Math.random(100)*100)

// // // school requirement
// // // age should be 18 of age
// // // u must have a jmab score of 250
// // // you msut be a citizen of lagos or abuja
// // // you must be light in complexion
// // // if the person met all requirement print accepted else rejected

let age = Math.random(20)*50;

let jamb_score , resident , complexion ;

jamb_score = Math.random(20)*50;
resident = "kwara";
complexion = "light"; 

     if((jamb_score >=250) && (age >= 18)){
          if((resident === abuja || lagos) && (complexion === light)){
               console.log("You have being granted admission into U1!!!!")
               console.log("Accept or Decline")
          }else{
          console.log(" Unforntnately ,you dont meet to the the requirement,we will keep you informed if there is any avaliable slot")
          }
     }else{
          console.log(" Unforntnately ,you dont meet to the the requirement,we will keep you informed if there is any avaliable slot")
     }