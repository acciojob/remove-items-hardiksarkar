//your JS code here. If required.
let selectedElem = document.getElementById("colorSelect");
let allOptions = Array.from(selectedElem.children);
let btn = document.getElementById("btn");
const removeOption = ()=>{
     for(let i=0;i<allOptions.length;i++){
          if(selectedElem.value===allOptions[i].value){
               allOptions[i].remove();
               return;
          }
     }
}

btn.addEventListener("click",removeOption);