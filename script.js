let stars = document.querySelector("#star")
let moon = document.querySelector("#moon")
let mount3 = document.querySelector("#mount3")
let mount4 = document.querySelector("#mount4")
let nov = document.querySelector("#nov")
let boat6 = document.querySelector("#boat6")
let main = document.querySelector(".main")

b=document.querySelector(".b")
window.onscroll = function(){
   let value = scrollY;
   stars.style.left = value + 'px' 
  
   moon.style.top = value * 3 + 'px'
  
     if(scrollY >= 101){
      moon.style.display = "none"
    }else{
        moon.style.display = "block"
        
    }
    boat6.style.left = value *2 + 'px'

    nov.style.fontSize = value + "px"
    if(scrollY >= 79 ){
        nov.style.fontSize = 79 + 'px'
    }else{
        nov.style.fontSize = value + "px"   
    }

    if(scrollY >= 79 ){
       main.style.background = 'linear-gradient(#65b9d7,#241335)'
 
    }else{
       main.style.background = 'linear-gradient(#440831,#1d0434)'
    }
    


} 


lis = document.querySelectorAll("ul li a");
lis.forEach(li => {
    li.onclick = function(e){
       lis.forEach(li=>{
        li.classList.remove("active")
       })
       e.target.classList.toggle("active")
    }
    
});
