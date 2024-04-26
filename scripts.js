// Prompt the user for their name
const name = prompt("Please enter your name:");

// Prompt the user to choose the number of holes (3 or 6)
const numHoles = parseInt(
  prompt("Would you like to play 3 or 6 holes of mini golf?")
);

// Validate the user input for the number of holes
while (numHoles !== 3 && numHoles !== 6) {
  numHoles = parseInt(
    prompt("Please enter either 3 or 6 for the number of holes:")
  );
}

// Set the course par based on the number of holes
const coursePar = numHoles * 3;
let totalPutts = 0;

// Prompt the user for the number of putts for each hole
for (let i = 1; i <= numHoles; i++) {
  const putts = parseInt(prompt(`Enter the number of putts for hole ${i}:`));
  totalPutts += putts;
}

// Calculate the golfer's total par for the round
const totalPar = totalPutts - coursePar;

// Display the message based on the golfer's total par
if (totalPar > 0) {
  console.log(`Nice try, ${name}... Your total par was: +${totalPar}.`);
} else if (totalPar < 0) {
  console.log(`Great job, ${name}! Your total par was: ${totalPar}.`);
} else {
  console.log(`Good game, ${name}. Your total par was: 0.`);
}
