const res=document.getElementById("res");

function run(){
 let n=+ngons.value;
 if(!n && n!==0){res.innerText="Enter value";return;}
 res.innerText=n>0?"Topology issues detected":"Clean topology";
}

