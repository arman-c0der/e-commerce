const menuIcon = document.getElementById
("menu-icon");
const navMenu = document.getElementById
("menu");
menuIcon.addEventListener("click",()=>
{
  if(navMenu.classname="hidden"){
   navMenu.classList.remove("hidden");
  }else{
    navMenu.classList.add("hidden");
 }
});