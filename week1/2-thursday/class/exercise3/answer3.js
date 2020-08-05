// Answer to class exercise 3
// using variables outside the function
let two= 2;
let oneFourth= "1/4";
let theSauce= function(two,oneFourth){
    console.log('Heat a medium-large saucepan over medium heat.');
    console.log('Add '+two +' tsp of oil and 5 garlic cloves, cook until golden, about ' +two+' minutes.');
    console.log('Add '+oneFourth+' cup water, '+two+' cans of crushed tomatoes, and salt and season with black pepper to taste');
    console.log('Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes');
    console.log('Stir in '+oneFourth+' cup of roughly chopped, fresh basil, salt and pepper as needed.');
}
theSauce(two,oneFourth);
//using the parameter/arguments to change the variable to anything
let theSauce= function(two, oneFourth){
    console.log('Heat a medium-large saucepan over medium heat.');
    console.log(`Add ${two} tsp of oil and 5 garlic cloves, cook until golden, about ${two} minutes.`);
    console.log(`Add ${oneFourth} cup water, ${two} cans of crushed tomatoes, and salt and season with black pepper to taste`);
    console.log('Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes');
    console.log(`Stir in ${oneFourth} cup of roughly chopped, fresh basil, salt and pepper as needed.`);
}
theSauce(2,'1/4')
