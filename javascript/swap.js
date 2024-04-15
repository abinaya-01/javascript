let a = 6;
let b = 5;


a = a + b; 
b = a - b; 
a = a - b; 
console.log("swapping:");
console.log("a =", a);
console.log("b =", b);


function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
        months += 12;
    }

    return { years: age, months: months };
}
const dateOfBirth = '2001-11-01';
const currentAge = calculateAge(dateOfBirth);
console.log("Current age:" + currentAge.years+"years and" +currentAge.months+ "months");

function displayAgeAndMonth() {
    var today = new Date();
    var birthDate = new Date("Your birthdate here"); // Enter your birthdate in the format "YYYY-MM-DD"
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        month = 12 - birthDate.getMonth() + today.getMonth();
    }

    console.log("Current age: " + age + " years");
    console.log("Current month: " + month + " months");
}


