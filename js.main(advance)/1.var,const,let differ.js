///////////////////////////  var ////////////////////////////
// 1 var - ES5 (old js)
// 2 var - function scope hota hai 

function abcd (){
    for (var i = 1; i<12; i++){
        console.log(i);
        
    }
    console.log(i);
    
}
abcd();

// 3 var add itself to the window object ( borraw from window )

var a = 12;

///////////////////////  let, const //////////////////////////

// 1 Let & Const - ES6 ( new js )
// 2 let - braces scoped hota h 

function abcde (){
    for (let i = 1; i<12; i++){
        console.log(i);
        
    }
    //console.log(i);
    
}
abcde();
// 3 let doesn't add 

let b = 12;


