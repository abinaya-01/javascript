function Tip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.20 * bill;
    return tip;
}

function Result(bill, tip) {
    const Amount = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the
     total value ${Amount}.`);
}

const ret = Tip(430);
console.log(ret)

function add(a, b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
}
const result=add(3,4);
console.log(result);