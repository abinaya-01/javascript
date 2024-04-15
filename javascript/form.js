const form = document.getElementById("myform");
const username = document.getElementById("username");
const password = document.getElementById("password"); 
const email = document.getElementById("email")

function checkRequired(inputs){   
   inputs.forEach((input)=>{
    if(input.value.trim()==""){
        return error(input,it)
    }else{
        return success(input)
    }
   })
}

//function getAttri(input){
 //   return input.getAttribute("div-name");
//}
function error(input,msg){
const formParent = input.parentElement;
formParent.className ="form-grp error";
const p = formParent.querySelector("p");
p.innerHTML =msg;
}

function success(input){
    const formParent = input.parentElement;
formParent.className ="form-grp success";
const p = formParent.querySelector("p");
p.innerHTML ="";
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkRequired([username,password,email]);
})