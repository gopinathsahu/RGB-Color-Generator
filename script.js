const btn=document.getElementById("button");
const rendomcolor=()=>{
    let value="1234567890ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
         cons=cons+value[Math.floor(Math.random()*16)];
         
    }
return cons;
}
const randomcolorchanger=()=>{
document.body.style.backgroundColor=rendomcolor();
}
btn.addEventListener("click",randomcolorchanger);