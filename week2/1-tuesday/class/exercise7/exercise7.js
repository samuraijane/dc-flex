const raceResults = [
    {country: "Bulgaria", time: 201}, 
    {country: "Swaziland", time: 243},
    {country: "Latvia", time: 210},
    {country: "Kyrgyzstan", time: 213},
    {country: "Azerbaijan", time: 238}
];

function bestTime(results){
    for(var i = 0; i < results.length; i++){
        console.log(results[i].country + ": " + results[i].time);
    }
}

bestTime(raceResults);