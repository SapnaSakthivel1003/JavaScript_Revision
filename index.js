// 1. Find Largest & Smallest Word 
// HTML Design 
// • Title: Find Largest & Smallest Word 
// • Layout: 
//  Label: Enter Sentence 
//  Textarea → user types sentence (ex: I love my country) 
//  Error div → shows validation message 
//  Button: Find Words 
//  Result div 
// UI Example 
// Enter Sentence: 
// [ I love my country            ] 
 
// Error: (shown here) 
 
// [ Find Words ] 
 
// Result: (shown here)


// function called(){
// const val=document.getElementById("value").value  
// let min="";
// let max="";
// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a string value"
// }
// else{
//     let input=val.split(" ");
// input.forEach((ele)=>{
//     console.log(ele);
    
//      if (!min ||ele.length < min.length) {
//             min = ele;
//         }
//         if (!max || ele.length > max.length) {
//             max = ele;
//         }

     
 
// })

// document.getElementsByClassName("result")[0].textContent=`Min word and Max word [${min , max }]`;
// console.log(min,max);
// }
// }

// 2. Vowel or Not 
// HTML Design 
// • Title: Vowel Checker 
// • Textbox → input single letter 
// • Error div 
// • Button: Check 
// • Result div 
// UI 
// Enter Letter: 
// [ A ] 
 
// Error message here 
 
// [ Check ] 
 
// Result: Vowel / Not Vowel

// function vowel(){
// const val=document.getElementById("value").value  ;
// console.log(val);

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a single charater";
// }
// if( val.length>1){
// document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a single charater";

// }
// else{
//     if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'||val=='A'||val=='E'||val=='I'||val=='O'||val=='U'){
//  document.getElementsByClassName("result")[0].innerHTML="vowel";
// }
// else{
 
//       document.getElementsByClassName("result")[0].innerHTML=" NOT vowel";
// }

// }
// }

// 3. Check First & Last Character Same 
// HTML Design 
// • Title: First & Last Character Checker 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// UI 
// Enter String: 
// [ level ] 
 
// Error here 
 
// [ Check ] 
 
// Result here 
 
// Alert appears if first and last characters match. 

// function checker(){
// const val=document.getElementById("value").value  ;
// console.log(val);

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a single charater";
// }

// else{
//  if(val[0]===val[val.length-1]){
//        alert("first and last characters match.")
//     }
// else{
 
//       document.getElementsByClassName("result")[0].innerHTML=" NOT  match";
// }

// }
// }

// 4. Reverse String 
// HTML Design 
// • Title: Reverse String 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// UI 
// Enter String 
// [ javascript ] 
 
// Error here 
 
// [ Reverse ] 
 
// Result: tpircsavaj

// function reverse(){
// const val=document.getElementById("value").value  ;
// console.log(val);

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a single charater";
// }

// else{
//   let result="";
//   for(let char of val) {
//     result=char+result;
    
//   };
 
//       document.getElementsByClassName("result")[0].innerHTML=result;
// }

// }

// 5. Find Largest Number 
// HTML Design 
// • Title: Largest Number Finder 
// • Textbox → input like 1,2 
// • Error div 
// • Button 
// • Result div 
// UI 
// Enter Numbers 
// [ 4,8 ] 
 
// Error here 
 
// [ Find Largest ] 
 
// Result: 8 

// function largest(){
// const val=document.getElementById("value").value  ;
// console.log(val);
// let num=val.split(",");
// console.log(num)

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a number";
// }
// else{
//     let large=0;
//    for(let ele of num){
//     if(!Number(ele)){
//         document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a number";
//     }
//     else{
//          if(large<ele){
//           large=ele;
//     }

//     }
   

//    }
//   document.getElementsByClassName("result")[0].innerHTML=large;
// }

// }

// 6. Checkbox Controls 
// HTML Design 
// • Title: Checkbox Manager 
// • 5 Checkboxes 
// • 3 Buttons 
// UI 
// ☐ Option 1 
// ☐ Option 2 
// ☐ Option 3 
// ☐ Option 4 
// ☐ Option 5 
 
// [Check All]  [UnCheck All]  [Toggle]


// function checkall(value){
//     const element=document.querySelectorAll(".checkbox-selection");
//   element.forEach((e)=>{
//     e.checked=value.checked;
// })

// }

// 7. Sum & Multiply Numbers 
// HTML Design 
// • Title: Sum and Multiply 
// • Input textbox 
// • Output textbox (readonly) 
// • Error div 
// • Add button 
// • Multiply button 
// UI 
// Input Numbers 
// [1,2,3,4] 
 
// Output 
// [          ] 
 
// Error here 
 
// [Add]  [Multiply]

// function add(){
// const val=document.getElementById("value").value;
// const out=document.getElementById('output');
// console.log(val);
// let num=val.split(",");
// console.log(num)

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a number";
// }
// else{
//     let sum=0;
//    for(let ele of num){
//     if(!Number(ele)){
//         document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a number";
//     }
//     else{
        
//         sum+=Number(ele);
//     }

//     }
//    out.value=sum;
//   document.getElementsByClassName("result")[0].innerHTML=`sum : ${sum}`;
// }
//    }
 

// function multiply(){
// const val=document.getElementById("value").value;
// const out=document.getElementById('output');
// console.log(val);
// let num=val.split(",");
// console.log(num)

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a number";
// }
// else{
// let mul=1;
//    for(let ele of num){
//     if(!Number(ele)){
//         document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a number";
//     }
//     else{
//         mul*=ele;
//     }

//     }
//    out.value=mul;
//   document.getElementsByClassName("result")[0].innerHTML=`multiple : ${mul}`;
//    }

// }

// 8. Replace Element in Array 
// HTML Design 
// • Textbox 1: Array elements (A,B,C,D) 
// • Textbox 2: Position 
// • Textbox 3: New element 
// • Error div 
// • Button 
// • Result div 
// UI 
// Array: [A,B,C,D] 
// Position: [2] 
// New Element: [X] 
 
// Error here 
 
// [Replace] 
 
// Result: A,X,C,D 

// function Replace(){
// const arr=document.getElementById("array-element").value;
// const out=document.getElementById('index').value;
// const new_position=document.getElementById("new-element").value;
// let originalArr=arr.split(",");
// console.log(arr);
// console.log(new_position)
// console.log(out);
// let valuError=document.getElementsByClassName("errorDiv")[0];
//  let arrerror= document.getElementsByClassName("errorDiv")[0];
//   let indexerror=document.getElementsByClassName("errorDiv")[0];


// if(arr==""){
//  indexerror.innerHTML="";
//  arrerror.innerHTML="";
//  arrerror.innerHTML="*please enter an array value";

// }
// if(new_position>1){
//      arrerror.innerHTML="";
//      indexerror.innerHTML="";
//     valuError.innerHTML="*please enter a single  array value";
// }
// if(out==""){
//     arrerror.innerHTML=""
//     valuError.innerHTML="";
   
//     indexerror.innerHTML="*please enter a Number";
// }
// else{
//    originalArr[out]=new_position;

// }
//   document.getElementsByClassName("result")[0].innerHTML=`changed array :${originalArr}`;
// console.log(originalArr);
// }

// 9. Show Date & Time 
// HTML Design 
// • Single Button 
// • Result div 
// UI 
// [ Show ] 
 
// Current Date & Time: 16 Mar 2026 10:30 AM 

// function date_time(){
//     const date=new Date();
//     const output=date.toLocaleString();
//     console.log(output);
//     document.getElementsByClassName("result")[0].innerHTML=`Current Date & Time:${output}`;
// }

// 10. Registration Form 
// HTML Design 
// Fields: 
// • First Name * 
// • Last Name * 
// • Email * 
// • Phone * 
// • Zipcode 
// • Address 
// • Submit Button 
// • Error message div 
// Structure 
// <form> 
 
// First Name*  <input type="text"> 
// Last Name*   <input type="text"> 
// Email*       <input type="text"> 
// Phone*       <input type="text"> 
// Zipcode      <input type="text"> 
// Address      <textarea></textarea> 
 
// <div id="error"></div> 
 
// <button type="submit">Register</button> 
 
// </form> 

//     const register=(event)=>{
//  const fname =document.getElementsByClassName("name1")[0].value;
// const lname=document.getElementsByClassName("name2")[0].value;
// const email =document.getElementsByClassName("email")[0].value;
// const Phone=document.getElementsByClassName("phone")[0].value;
// const zipcode=document.getElementsByClassName("zip")[0].value;
// const address=document.getElementsByClassName("addresss")[0].value;
// const error =document.getElementById("error");
// const result =document.getElementById("result");
// if(zipcode==""&&address==""){
//     error.innerHTML="*please enter all the feilds"
// }
// else{
//     result.innerText=`• First Name : ${fname} 
// • Last Name : ${lname} 
// • Email : ${email} 
// • Phone : ${Phone} 
// • Zipcode  : ${zipcode}  
// • Address : ${address} `
     
// }
// event.preventDefault();
// }

// 11. Get Full URL 
// HTML Design 
// Button + Result 
// <button onclick="getURL()">Get URL</button> 
// <div id="result"></div> 
 
// JS concept → window.location.href


// function getURL(){
//     const resultdiv =document.getElementById("result");
//     const result= window.location.href ;
//     console.log(result);
//     resultdiv.innerText=`The current window /tab url: 
//     ${result}`
// }

// 12. Get Query Parameters 
// Example URL → http://www.mitrahsoft.com?technology=coldfusion&people=veryNice 
 
// HTML 
// <button>Get Params</button> 
// <div id="result"></div> 
// Output 
// Technology: coldfusion 
// People: veryNice

function search(){
    const url="https://www.mitrahsoft.com/?technology=coldfusion&people=veryNice";
    let res=URL(url);
    const output=res.searchParams;
    const val=output.get(technology);
    console.log(val);
}