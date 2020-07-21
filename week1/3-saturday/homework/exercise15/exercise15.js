// there is definitely a quicker way to do this one...

function matrixMultiply(arr1, arr2) {
    let a = arr1[0][0];
    let b = arr1[0][1];
    let c = arr1[1][0];
    let d = arr1[1][1];
    // so arr1 = [[a,b], [c,d]]
    let e = arr2[0][0];
    let f = arr2[0][1];
    let g = arr2[1][0];
    let h = arr2[1][1];
    // so arr2 = [[e,f], [g,h]]
    return [[((a*e) + (b*g)), ((a*f)+(b*h))],
    [((c*e) + (d*g)), ((c*f)+(d*h))]];
 }

console.log(matrixMultiply([
    [2, 4], [3,4]],
    [[5, 2], [3,1]]));
