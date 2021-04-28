$(function(){
  
  const arrTeam = [];
  const limit = 3;
  let players = 10;

  while(players > 0){

    let newstat = generateStat(limit, limit);
    let newAverage = randomNumberGen (50, 0);
    let newSuccRate = randomNumberGen (100, 0);

    arrTeam.push({
      ID_Player: newstat,
      Average: newAverage,
      Success_Rate: newSuccRate
    });

    players--;

  }

  console.log(arrTeam);
  
});

/* FUNCTIONS */

const randomNumberGen = (max) => Math.floor(Math.random() * max)

const randomLetterGen = () => {
  const letters = "ABCDEFGHILMNOPQRSTUVYXZ";
  let letter = letters[randomNumberGen((letters.length - 1), 0)];
  return letter;
}

function generateStat(maxLetter, maxNumber){
  let stat = "";
  for (let i = 0; i < maxLetter; i++){
    stat += randomLetterGen();
  }
  for (let i = 0; i < maxNumber; i++){
    stat += randomNumberGen(9, 0);
  }
  return stat;
}