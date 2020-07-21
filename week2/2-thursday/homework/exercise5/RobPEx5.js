//Cities
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

var lowtemp = cities.filter(function(low70){
    return low70.temperature < 70
}).map(function(low2) {
    return low2.name;
});

console.log(lowtemp);

//Cities 2
var cityName = cities.map(function(cName){
    return cName.name;
});

console.log(cityName);