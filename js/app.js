//! Selectors
const panels = document.querySelectorAll(".panel");

// Harbitta panelni olish
panels.forEach((panel) =>{
     panel.addEventListener("click", () =>{
          removeActiveClassis();
          panel.classList.add("active");
          
     })

})

function removeActiveClassis (){
     panels.forEach( (panel) =>{
          panel.classList.remove("active")
     })
}