const max=prompt("Enter the maximum range");
const random=(Math.floor(Math.random()*max)+1);
let guess=prompt("Guess the number:");
while(true){
   if(guess=="quit"){
      console.log("you quite");
      break;
   }
   if(guess==random){
      console.log("CONGRATS you guess the number i.e",random);
      break;

   }else if(guess<random){
      guess=prompt("Hint: You enter too small number .Please try again")
      

   }else{
      guess=prompt("Hint: You enter too large number.Please try again")

   }
}