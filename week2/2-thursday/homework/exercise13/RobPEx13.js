//Acronym

var acronym = function ax(x) {
    var newA = "";
    for(var i = 0; i<x.length;i++) {
       newA += x[i][0];
    }
    console.log(newA.toUpperCase());
};
acronym(['very', 'important', 'person']);
acronym(['national', 'aeronautics', 'space', 'administration'])

var acronym2 = function ax(x) {
    var newA = "";
    x.forEach(function(item) {
       newA += item[0];
    });
    console.log(newA.toUpperCase());
};

acronym2(['very', 'important', 'person']);
acronym2(['national', 'aeronautics', 'space', 'administration'])