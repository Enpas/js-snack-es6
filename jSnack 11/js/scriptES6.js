const arrIndividui = [

  {
    nome: 'Pietro',
    cognome: 'Smusi',
    età: 36
  },
  {
    nome: 'Iacopino',
    cognome: 'Iacopini',
    età: 8
  },
  {
    nome: 'Anziano',
    cognome: 'Degli Anziani',
    età: 101
  },
  {
    nome: 'Rinaldo',
    cognome: 'Dei Rinaldi',
    età: 86
  },
  {
    nome: 'Concettina',
    cognome: 'Dei Concettini',
    età: 17
  },
  {
    nome: 'Ambrogio',
    cognome: 'Ambrogietto',
    età: 27
  },
  {
    nome: 'NeoN',
    cognome: 'Patentato',
    età: 18
  }

];


const arrDrive_over18 = arrIndividui.map((individuo) => {
  let {nome, cognome, età} = individuo;
  if (età >= 18) {
    return `${nome} ${cognome} può guidare!`
  } else {
    return `${nome} ${cognome} non può guidare!`
  }

});
console.log(arrDrive_over18)

/* const arrDrive_under75 = arrIndividui.map((individuo) => {
  let {nome, cognome, età} = individuo;
  if (età <= 75) {
    return `${nome} ${cognome} può guidare!`
  } else {
    return `${nome} ${cognome} non può guidare!`
  }

});
console.log(arrDrive_under75) */