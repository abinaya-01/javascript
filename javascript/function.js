function triangle(height,base) {
    console.log("The area of the triangle is:");
    return 0.5 * base * height
}

console.log(triangle(2,3));

function kilometersToMeters(kilometers,meters){
    console.log(kilometers + " kilometers is equal to " + meters + " meters.");
    return kilometers*1000
}
console.log(kilometersToMeters(1,1000));


let a=6;
let b=5;

let temp =a;
a =b;
b =temp;

console.log("after swapping:");
console.log("a=",a)
console.log("b=",b)

