//primitive and reference

// primitive = number , string, null, undefined, boolean
// reference = [], {}, ()

// aise koi bhi value jisko copy krne pr real copy ni hota balki us main value ka reference pass ho jata hai use hum reference value khte hai , or jiska copy krne pe real copy ho jai wo value primitive type value hoti hai .

////////////////////////////////////reference/////////////////////////////////////////
var a = 12;
var b = a;
b = b+2; 
console.log(a,b);

var a = [1,2,3,4];
var b = a;
b.pop();
console.log(a,b);

