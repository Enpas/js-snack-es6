const arrCar = [
    {
      marca: 'Fiat',
      modello: 'Panda',
      alimentazione: 'benzina'
    },
    {
      marca: 'Abarth',
      modello: 'Grande Punto',
      alimentazione: 'diesel'
    },
    {
      marca: 'Alfa Romeo',
      modello: 'Giulietta',
      alimentazione: 'gpl'
    },
    {
      marca: 'Aston Martin',
      modello: 'DB11',
      alimentazione: 'benzina'
    },
    {
      marca: 'Tesla',
      modello: 'Model S',
      alimentazione: 'elettrico'
    },
    {
      marca: 'BMW',
      modello: 'X6',
      alimentazione: 'diesel'
    },
    {
      marca: 'Citroen',
      modello: '2CV',
      alimentazione: 'benzina'
    },
    {
      marca: 'Tesla',
      modello: 'Model 3',
      alimentazione: 'elettrico'
    },
    {
      marca: 'Ford',
      modello: 'C-Max',
      alimentazione: 'benzina'
    },
    {
      marca: 'Dacia',
      modello: 'Daster',
      alimentazione: 'metano'
    }

];

  const arrBenza = arrCar.filter((car) => 
    car.alimentazione === 'benzina'
  );
  console.log(arrBenza);
  
  const arrDiesel = arrCar.filter((car) => 
    car.alimentazione === 'diesel'
  );
  console.log(arrDiesel);

  const arrOtherAlim = arrCar.filter((car) => {
    if(car.alimentazione === 'gpl' || car.alimentazione === 'elettrico' || car.alimentazione === 'metano'){

      return true;
    }
    

  });
  console.log(arrOtherAlim);
 


    
