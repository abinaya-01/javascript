//;


let date =new Date(); 
function  ages(){
  console.log(date.getFullYear());
  return date.getFullYear() - 2001;
}
const result=ages();
console.log(result);

let num="string type";
let num2=4;

console.log(typeof(num));
console.log(typeof(num2));

//explicit  and implicit
let stR="want to acheive our goal";
console.log(Number(stR));
console.log(typeof(Number(stR)));

console.log("Iam "+ 12+124);
console.log(12+12+" hello");
console.log("1"-1+"str");
console.log(Boolean(0));
console.log(Boolean(" "));

let money=0;
if(money){
  console.log("i have a money");
}else{
  console.log("no dont");
}

 let z= true + "100";
 console.log(z);
 let text1 =10;
 let text2 =20;
 console.log(text1+=text2);

 //function declaration 

 function swap (a,b){
  let temp=a;
  a=b;
  b=temp;
  console.log("a:"+a +" b:"+b);
 }

 swap(2,3) 
 
 let x=84;
 let y=++x;
 console.log(x,y);

console.log("13"-10-true);

let n="1"+1;
n=n-1;
console.log(n);

//function expression 

const dates= new Date ();
const age =function(year){ 
  return dates.getFullYear() - 2001;
}
const tss= age();
console.log(tss);

//arrow function

const age2=year=>dates.getFullYear-year;
console.log(age2(2001));


//map method 

let data=["television", 12000,"1 year","white"]

data.map((val,index,arr)=>{
  console.log(val,index,arr)
})

//filter
const data1=[25,78,65,98,263]

const filter=data1.filter((val)=>{
  console.log(val>40);

})
//reduce -- previous value and remaining all current value

function red (pre,current){
  console.log(pre,current);
}
const abi = data1.reduce(red);
console.log(abi);

//foreach method -val ,index,array

data1.forEach((val)=> {
  if(val>50){
    console.log(val+300);
  }
})

// one example for above methods

let product=[

  {name : "television",price:2000,color:"red",warenty:"1 year"},
  {name : "computer system",price:3000,color:"green",warenty:"2 year"},
  {name : "laptop",price:5000,color:"rose",warenty:"4 year"},
  {name : "fridge",price:8000,color:"brown",warenty:"5 year"}
]
product.map((val)=>{
  console.log(val);
})
product.map((val)=>{
  console.log(val.name,val.color,val.price,val.warenty);
})

const resu=product.filter((val)=>

{
  return val.price>3000;
});
resu.map((val)=>
{
  console.log(val.price,val.name,val.warenty,val.color)
})

// spread operator -used to concenate array

let datas=["tv",12000,"1 year","black"]
let datas1=["tv soft",13000,"2 year","white ","white"]

const resultes=[...datas,...datas1];
console.log(resultes);

const babu=[...datas,"thts awesome","i know im a mad",...datas1];
console.log(babu);

// set duplicate remove:

const newArr=[...new Set(datas1)];
console.log(newArr);


//array destructing :
const [one,two,three, four]=datas
console.log(one,two,three,four);




