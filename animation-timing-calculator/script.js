const res=document.getElementById("res");

function run(){
 let f=+frames.value,fps=+fps.value;
 if(!f||!fps){res.innerText="Enter values";return;}
 let seconds=f/fps;
 res.innerText=`Duration: ${seconds.toFixed(2)} sec`;
}

