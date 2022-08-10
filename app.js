const sec1 = document.querySelector(".sec1");
const btns = document.querySelectorAll(".btn");
const content = document.querySelector(".content");
const submit = document.querySelector(".submit");
const sec2 = document.querySelector(".sec2");
// const circles = document.querySelector(".circles");
const span = document.querySelector("span");

let selected ;


sec1.addEventListener("click", (e) =>{
selected =  e.target.value
e.target.style.backgroundColor ="grey";
  console.log(selected);

    submit.addEventListener("click", () =>{
      sec2.style.display="block"
      sec1.style.display = "none"
      span.innerHTML = selected

      console.log( `${selected} kullanildi`);
    })
})
