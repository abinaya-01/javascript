function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } 
    else {
        return bill * 0.20;
    }
}

const testBill = 100;
const tipForTestBill = calcTip(testBill);
console.log("Tip for bill value $100:", tipForTestBill);

function testPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const prime=testPrime(37);
  console.log(prime);
