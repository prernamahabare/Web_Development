console.log('This is module.js')

function sum(a, b){
    sum = 0;
    sum = a + b;
    return sum;
}

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    average,
   sum,
   name : "prerna",
   surname : 'mahabare'

}