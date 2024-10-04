//1. selection of element

// var a = document.querySelector("h1")
// console.log(a);

//2. changing html
// var a = document.querySelector("h1")
// a.innerHTML = "changed HTML"

//3. changing css
// document.querySelector("h1")
// a.style.color="red"
// a.style.backgroundColor="black"


//4. event listner
//  var a = document.querySelector("h1")
//  a.addEventListener("click", function(){
//     console.log("chl n ");
    
//  })


var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")


var flag = 0

btn.addEventListener("click", function(){
    if(flag==0){
        bulb.style.backgroundColor = "yellow"
        console.log("clicked");
        flag=1
        
    }else{
        bulb.style.backgroundColor = "transparent"
        console.log("again clicked");
        flag=0
        
    }
    
})                 