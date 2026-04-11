const res=document.getElementById("res");

function run(){
 let u=+unused.value;
 if(!u){res.innerText="Enter value";return;}
 res.innerText=`You can remove ${u} unused nodes`;
}

