var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

//Sort an Array 2

var lenSort = people.sort(function(x,y) {
    return x.length - y.length
});

console.log(lenSort);

var lenSort2 = people.sort(function(x,y) {
    return y.length - x.length
});

console.log(lenSort2);