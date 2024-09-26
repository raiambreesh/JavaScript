// js me ek concept hai jiska mtlb hota hai aap function ko use kr skte ho as a value \

function abcd(a){
    a();
}
abcd(function(){
    console.log("hello");
    
} )