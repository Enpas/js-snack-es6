const arrAnimali = [

  {
    nome: 'rospo',
    famiglia: 'Bufonidae',
    classe: 'anfibi'
  },
  {
    nome: 'dodo',
    famiglia: 'Columbidae',
    classe: 'uccelli'
  },
  {
    nome: 'bradipo',
    famiglia: 'Bradypodidae',
    classe: 'mammiferi'
  },
  {
    nome: 'quaglia',
    famiglia: 'Phasianidae',
    classe: 'uccelli'
  },
  {
    nome: 'leopardo delle nevi',
    famiglia: 'Felidae',
    classe: 'mammiferi'
  },
  {
    nome: 'ornitorinco',
    famiglia: 'Ornithorhynchidae',
    classe: 'mammiferi'
  }
 
];

const arrMammiferi = arrAnimali.filter((animale) => animale.classe === 'mammiferi');

console.log(arrMammiferi);


