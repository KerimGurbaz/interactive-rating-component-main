const sec1 = document.querySelector(".sec1");
const submit = document.querySelector(".submit");
const sec2 = document.querySelector(".sec2");
const span = document.querySelector("span");

let selected ;


sec1.addEventListener("click", (e) =>{
selected =  e.target.value
e.target.classList.contains("btn") ? (e.target.style.color="white") &&  (e.target.style.backgroundColor = "rgb(127,135,151") : 

  console.log(selected);

    submit.addEventListener("click", () =>{
      sec2.style.display="block";
      sec1.style.display = "none";
      span.innerHTML = selected;

      console.log( `${selected} kullanildi`);
    })
})
