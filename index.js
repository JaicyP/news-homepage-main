
function openNav(){
   const overall = document.querySelector(".container");
   overall.classList.toggle("container-overlay");

   const outerGrid = document.querySelector(".outer-grid");
   outerGrid.classList.toggle("outer-grid-overlay");

  
   const navElement= document.getElementById("myNav");
   navElement.style.width = "70%"; 
   navElement.style.display = "block";
}
function closeNav(){
   const overall = document.querySelector(".container");
   overall.classList.toggle("container-overlay");

   const outerGrid = document.querySelector(".outer-grid");
   outerGrid.classList.toggle("outer-grid-overlay");

   const close= document.getElementById("myNav")
   close.style.width = "0%"; 
}