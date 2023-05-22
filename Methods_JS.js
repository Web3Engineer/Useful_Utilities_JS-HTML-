var MainObj = {

prop1: "prop1MainObj",
Obj1:{
      prop1: "prop1Obj1",
      prop2: "prop2Obj1",    
      Obj2: {
            prop1: "prop1Obj2",
            prop2: "prop2Obj2"
            }
  },
      
  Obj3:{
      prop1: "prop1Obj3",
      prop2: "prop2Obj3"
      },
    
  Obj4:{
      prop1: "prop1Obj4",
      prop2: "prop2Obj4"
      }  

};

  console.log( MainObj.Obj1.Obj2.prop1 ); //"prop1Obj2"

const obj1={
obj1_Key1:"obj1 value1",
obj1_Key2:"obj1 value2"
};
const obj2={
obj2_Key1: obj1
};
const obj3={
obj3_Key1: obj2
};
const nestedObj={
nestedObj_Key1: obj3
};

var string1="ab.c1.23";
var int_zeroTrailing=1230;
var int_dec_zeroTrailing=12.30;


//////////////////////////--->>>Object Type Methods
// Searches for an Objects Key or Value via index number>>>Object.keys(OBJECT_HERE)[INDEX_NUMBER_HERE]
console.log(     Object.keys(obj1)[0]        ); // obj1_Key1
console.log(     Object.values(obj1)[0]      ); // "obj1 value1"

//Searches an Objects Keys via matching String argument, then returns its relative Value>>>OBJECT_NAME_HERE["STRING_VALUE_HERE"]
console.log(       obj1["obj1_Key1"]        ); // "obj1 value1"
console.log(       nestedObj["nestedObj_Key1"]["obj3_Key1"]["obj2_Key1"]["obj1_Key1"]       ); // "obj1 value1"


////////////////////////////--->>>Array Type Methods
const numbersArray=["1","2","3","4"];
numbersArray.splice(2);
console.log(     numbersArray    );// ['1', '2']

const lettersArray=["A", "B", "C", "D"];
lettersArray.splice(2, 1, "x", "y");
console.log(     lettersArray     );// ['A', 'B', 'x', 'y', 'D']

// DATA_HERE.toString() converts to string
/////////////////--->>>Primative Type Methods (Strings, Integers etc.)
//💢no Integer types!💢
console.log(     string1.slice(2)      );// "c1.23"  "ab.c1.23"
console.log(     string1.slice(-1)      );// "3"  "ab.c1.23"
console.log(     string1.slice(1,-1)      );// "b.c1.2"  "ab.c1.23"

//💢no Integer types!💢
console.log(     string1.charAt(2)     );// "." //💢

//Picks out the character of a Primative data Type via Index Number
console.log(  string1.toString()[3]               );// "c"   //"ab.c1.23"
console.log(  int_zeroTrailing.toString()[3]      );// "0"   //1230
console.log(  int_dec_zeroTrailing.toString()[3]  );// "3"   //12.30


/////////////////////////--->>>Loop Conditionals
//while(){}
fishTank=0;
while(fishTank<3)
{fishTank++;console.log('Fish Tank Has '+fishTank+' Small Fish.');}

//do{}while()
fishPond=0;
do{fishPond++;console.log('Fish Pond Has '+fishPond+' Big Fish.');}
while(fishPond<3)

//for(){}
for(let i=0; i<5; i++){
  console.log(obj1);
  console.log(numbersArray);
}
for(let i=0; i<numbersArray.length; i++){
  console.log(obj1);
  console.log(numbersArray);
}
for(let i=0; i<Object.keys(obj1).length; i++){
  console.log(obj1);
  console.log(numbersArray);
}
//for(key in OBJECT){}
for(let key in obj1){console.log(key);}

//for(element of ARRAY){}
for(let element of numbersArray){console.log(element);}

//Runs a function EVERY 7 seconds
setInterval(function(){ console.log("interval"); }, 7e3);

//Runs a function ONCE AFTER 9 seconds
setTimeout(function(){ console.log("timeout"); }, 9e3); 

//Exits a running terminal proccess (the '0' parameter just means exit w/ out an error code), Proccess killed where method is invoked!!!
//// process.exit(0) ////$$$$
 
//Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];

console.log(combinedArr); // [1, 2, 3, 4, 5, 6]


//Discard all characters except keep explicitly desired character(s)
const str = "a1b2c3d4e5f6g7h8i9j0";
const charsToKeep = ["0","g", "5", "7", "9"];
const result = str.split("").filter((char) => charsToKeep.includes(char)).join("");

console.log(result); // "5g790"


//Search inside a String
let string = "Hello World!";
let position = str.search("World");
console.log(position); // Output: 6


//Minimum & Maximum
const numbers_array = [7, 15, 3];

let min;
let max;

for (let element of numbers_array){
if (element == Math.max(...numbers_array)){max=element;}
if (element == Math.min(...numbers_array)){min=element;}
}

console.log(`Minimum: "${min}"! Maximum: "${max}"!`);



//////////---OPERATORS---/////////
//
//                          NOT  !
//                           OR  ||
//                          AND  &&
//                        EQUAL  ==
//                    NOT EQUAL  !=
//               INCRIMENT by 1  VAR++
//          INCRIMENT by NUMBER  VAR+=NUMBER
//                    DECREMENT  --
//         EQUAL AND EQUAL TYPE  ===
//  NOT EQUAL OR NOT EQUAL TYPE  !==
//  
///////////////////////////////////
