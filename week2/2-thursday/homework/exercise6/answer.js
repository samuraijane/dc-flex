// Cities 1
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

  var coolerCities = cities.filter(function(el) {
      return el.temperature < 70.0;
  });

  console.log(coolerCities);