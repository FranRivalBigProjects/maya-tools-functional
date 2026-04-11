const res=document.getElementById("res");

function run(){
 let j=+joints.value;
 if(!j){res.innerText="Enter value";return;}
 res.innerText=j<200?"Valid skeleton":"Too complex";
}

