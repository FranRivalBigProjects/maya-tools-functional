const res=document.getElementById("res");

function run(){
 let s=+samples.value;
 if(!s){res.innerText="Enter value";return;}
 let opt=Math.max(16,Math.round(s*0.7));
 res.innerText=`Recommended samples: ${opt}`;
}

