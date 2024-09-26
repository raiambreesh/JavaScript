///////////////////   foreach   ////////////////////
// foreach loop sirf array pe chlta hai mtlb ki jab bhi tumhare pass ek array ho , tab use mein kaun aata hai foreach loop 

var a = [1,2,23,34,24,56,34,2,55,];

a .forEach(function(val){               // forEach use to perform something on each element 
    console.log(val+2);
    
})


/////////////     forin   //////////////

// object pr loop krne k lia use hota hai 

var obj = {
    name : "ambreesh",
    age : 22,
    city : "varanasi"
}
for(var key in obj){
    console.log(key, obj[key]);
    
}



///////////   do-while  ////////////////
var a=22;
do{
    console.log("hey");
    a++
    

}
while (a < 33)
    
