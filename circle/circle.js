const circelEl = document.querySelectorAll(".circle");

for(let circle of circelEl){
     circle.addEventListener('click', (e)=>{
          console.log(e.target.textContent)
          for(let c of circelEl){
               c.style.backgroundColor= "blue";
          }
               c.style.backgroundColor= "red";
     })
}