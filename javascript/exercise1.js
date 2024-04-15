
const grp = document.querySelectorAll("p");

for (let i=0 ;i<9;i++){
    if(i%2==0){
    grp[i].style.backgroundColor="pink";
    grp[i].style.fontSize="large";
    grp[i].style.fontFamily="cursive"
    }
    else{
        grp[i].style.backgroundColor="green";
    }

}