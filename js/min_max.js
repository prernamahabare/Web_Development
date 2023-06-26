// console.log("hey");

function max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
function min(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
let a = 20;
let b = 10;
// console.log(max(a,b));

let ans = max(a,b);
console.log(ans);

// console.log(`The greater number from ${a} and ${b} is ${max(a,b)}`);
// console.log(`The smaller number from ${a} and ${b} is ${min(a,b)}`);
