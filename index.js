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
