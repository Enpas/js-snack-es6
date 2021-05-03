const arrStr = [
  'Pippo',
  'PLUTO',
  'PaperIno', 
  'TiZio',
  'cAiO', 
  'semProNio'
];

const arrLow = arrStr.map((str) => {
  let lowerCase = str.toLowerCase();
  return toCapitalize(lowerCase);
});

console.log(arrLow)

/* FUNCTION */

function toCapitalize(str) {
  let capLetter = str.charAt(0).toUpperCase();
  let strClone = str.slice(1, str.length)
  return capLetter + strClone;
}
