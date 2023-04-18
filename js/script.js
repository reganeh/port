// let links = document.querySelectorAll(".links li");
// let bodyId = document.querySelector("body").id;

// for(let link of links){
//     if(link.dataset.active == bodyId){
//         link.classList.add("active);")
//     }
// }

let links = document.querySelectorAll(".links li");

for(let link of links){
  if(link.firstChild.href === window.location.href){
    link.classList.add("active");
  }
}