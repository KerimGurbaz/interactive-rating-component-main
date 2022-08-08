let circles = document.querySelector(".circles");
let submit = document.querySelector(".submit");


circles.addEventListener("click",(e) => {
  if(e.target.classList.contains("one")){
    e.target.style.backgroundColor=`rgb(127,136,150)`;
    e.target.style.color="white";
    console.log("one clicked");
    
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
   submit.addEventListener("click",()=>{
    document.getElementsByTagName("span").innerText = e.target.innerText
    })
})



