let circles = document.querySelector(".circles");
let submit = document.querySelector(".submit");
let span = document.getElementsByTagName("span");
let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");


circles.addEventListener("click",(e) => {
  if(e.target.classList.contains("one")){
    e.target.style.backgroundColor=`rgb(127,136,150)`;
    e.target.style.color="white";
    sec1.style.visibility = "hidden";
    
    
  }
  else if(e.target.classList.contains("two")){
    e.target.style.backgroundColor=`rgb(127,136,150)`;
    e.target.style.color="white";
    console.log("2 clicked");
    }
    else if(e.target.classList.contains("three")){
        e.target.style.backgroundColor=`rgb(127,136,150)`;
        e.target.style.color="white";
        console.log("3 clicked");
    }
    else if(e.target.classList.contains("four")){
        e.target.style.backgroundColor=`rgb(127,136,150)`;
        e.target.style.color="white";
        console.log("4 clicked");
    }
    else if(e.target.classList.contains("five")){
        e.target.style.backgroundColor=`rgb(127,136,150)`;
        e.target.style.color="white";
        console.log("5 clicked");
    }
   else{
    console.log("other element clicked");
   }
 
})




  
submit.addEventListener("click",()=>{
  sec1.style.visibility = "hidden";


  span.innerText = e.target.innerText
  })