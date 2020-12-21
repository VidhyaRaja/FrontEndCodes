"use strict"
/*Data Types
 undefined, null,boolean,string,symbol,number,and object */

 /*variable
 var myname=null;
 console.log(myname);
 myname =8;
 let ourName="freecodecamp";
 const pi=3.14;
 console.log(myname);*/
/*var myVar =8;
myVar ++;
console.log(myVar);
myVar --;
ourArray=[["hello",90],["gehben",746]];
var myData=ourArray[0][0];
console.log(myData);
myData.push() --> appends in the end
myData.pop() --> removes the last item and returns the removed value
myData.shift() -->removes the first item from the array and returns the same
myData.unshift("Hello")-->appends at the beginning
var myList = [["Cerela",3],["milk",2],["bananas",3],["Juice",2],["eggs",34]];
if we dont put the var keyword before a variable inside a function then it becomes global variabe
ex:
var myGlobal=10;
function fun1(){
     var oopsGlobal=5;
}

function fun2(){
    var output="";
    if(typeof myGlobal !="undefined"){
        output+="myGlobal:"+myGlobal;
    }
    if(typeof oopsGlobal !="undefined"){
        output += "oopsGlobal:"+ oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
 */

 /*
 if we console the function output without 'return' then it will display undefined
var sum=0;
function addThree(){
    sum=sum+3;
}

function addFive(){
    sum += 5; 
}

console.log(addFive());


function nextLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var testArr =[1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr));
console.log(nextLine(testArr,6));
console.log("After: "+ JSON.stringify(testArr));
*/
 /*Object
var testObj = {
    "an entree":"hamburgur",
    "myside":"veggies",
    "the drink":"water"
};
testObj.myside="campur";
testObj.legs=4;
var entreeValue = testObj["an entree"];
let drinkValue = testObj['myside'];


console.log(testObj);
delete testObj.legs;
console.log(testObj);

function checkObj(checkProp){
    if(testObj.hasOwnProperty(checkProp)){
        return testObj[checkProp];
    }
    return "Change Me!!";
}

console.log(checkObj("hello"));

conditional operatorh
function check(num){
    return num>0?"positive" : num<0 ? "negative" : "zero"
}
console.log(check(10));*/