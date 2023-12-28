// let myBoolean = confirm("ok === True \n cancel === false");
// console.log(myBoolean);

// let nama = prompt("please enter your name");
// if (nama) {
//   console.log(nama.length);
//   console.log(nama.trim().length)
//   console.log(nama.trim());
// } else {
//   console.log("you didn't eenter your name");
// }

// //lets game
// let play = confirm("Do you want to play Rock Papper Scissors?");
// //ask wanna play or not
// if (play) {
//   //loop if wanna play again
//   for (let i = 0; i < 100000; i++) {
//     let playerChoice = prompt("write your choice (rock, papper, or scissors");
//     if(playerChoice) {
//       let playerOne = playerChoice.toLowerCase().trim();
//       //checking typo
//       if (playerOne === "rock" || playerOne === "papper" || playerOne === "scissors") {
//         //computer and how rock papper scissors work
//         let computerChoice = Math.floor(Math.random() * 3 + 1);
//         let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "papper" : "scissors";
//         let result =
//         playerOne === computer
//           ? `player: ${playerOne} \n computer: ${computer} \n Tie game!!!`
//         : playerOne === "rock" && computer === "scissors"
//           ? `player: ${playerOne} \n computer: ${computer} \n player wins!!!`
//         : playerOne === "papper" && computer === "rock"
//           ? `player: ${playerOne} \n computer: ${computer} \n player wins!!!`
//         :playerOne ==="scissors" && computer === "papper"
//           ? `player: ${playerOne} \n computer: ${computer} \n player wins!!!`
//         : `player: ${playerOne} \n computer: ${computer} \n computer wins!!!`
//         alert(result);
//         //computer and how rock papper scissors work ends

//         //play again
//         let playAgain = confirm("wanna play again?")
//         if (playAgain) {
//           continue;
//         }else{
//           alert("maybe next time");
//           break;
//         }
//         //play again ends

//       } else {
//         let typo = confirm ("you have a typo, wanna write again?")

//         //desicion if player typo 
//         if (typo) {
//           continue;
//         } else{
//           alert("okay, maybe next time");
//           break;
//         }
      
//       }
//       //checking typo ends

//     } else{
//       let notChoice = confirm("you dont choice, wanna play maybe?");

//       //decision if player not choice rock, papper, or scissors
//       if (notChoice) {
//         continue;
//       }else{
//         alert("okay, maybe next time");
//         break;
//       }

//     }

//   }
//   //end of loop
// } else{
//   alert("okay, maybe next time.");
// }

