const sec1 = document.querySelector(".sec1");
const btns = document.querySelectorAll(".btn");
const content = document.querySelector(".content");
const submit = document.querySelector(".submit");
const sec2 = document.querySelector(".sec2");
const circles = document.querySelector(".circles");

let selected ;

ev.forEach((btn)=>{
  btn.addEventListener("click",(event)=>{
    console.log(event.target);
selected = btn.value
console.log(selected);
  });
});

