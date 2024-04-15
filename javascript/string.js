// string methods

let  data="Be a frd for everyone";

console.log(data.length);
console.log(data.indexOf("n"));
console.log(data.lastIndexOf("n"));
console.log(data.charAt(3));
console.log(data.charCodeAt(2));
console.log(data.includes("frd"));
console.log(data.repeat(2));
console.log(data.replace("frd","mad👻"));
console.log(data.toLocaleUpperCase());
console.log(data.toLocaleLowerCase());
console.log(data.trimEnd());
console.log(data.trimStart());

let number= "500";
console.log(number.padStart(7,"B"));
console.log(number.padEnd(9,"A"));

//date objects--get,set,to

let date = new Date();
console.log(date.getDate());
