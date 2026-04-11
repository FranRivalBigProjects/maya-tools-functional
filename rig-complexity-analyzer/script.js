const res=document.getElementById("res");

function run(){
 let b=+bones.value,c=+constraints.value;
 if(!b||!c){res.innerText="Enter values";return;}
 let score=b+(c*2);
 res.innerText=score>200?"High complexity":"Optimized rig";
}

