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
//     e.checked=true;
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

// function search(){
//     const result =document.getElementById("result");
// const urlstring="https://www.mitrahsoft.com/?technology=coldfusion&people=veryNice";

// const url = new URL(urlstring);
// const technology = url.searchParams.get('technology');
// const people = url.searchParams.get('people');
// console.log(people);
// console.log(technology);
// result.innerText=`Technology : ${technology}
// People :${people}`

// }

// 14. Count Words in a Sentence 
// HTML Design 
// • Title: Word Counter 
// • Textarea → user enters a sentence 
// • Error div 
// • Button: Count Words 
// • Result div 
// UI Example 
// Enter Sentence 
// [ I love javascript programming ] 

// Error here → [ Count Words ] 

// Result  → Total Words = 4 

//  function counter(){
// const val=document.getElementById("value").value;
// let count=0;  
// const cleaned =/[^a-zA-Z0-9\s]/g; 
//     let input=cleaned.split(" ");
// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML= "Please enter a sentence" ;
// }
// if(cleaned.test(val)){
//      res.innerText="";
//      document.getElementsByClassName("errorDiv")[0].innerHTML="Special characters not allowed";
// }


// else{

// input.forEach((ele)=>{
//     console.log(ele);
//     count++;
// })

// document.getElementsByClassName("result")[0].textContent=`Result  → Total Words = ${count}`;

// }
//  }

// 15. Palindrome Checker 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input → madam 

// Result → This is a Palindrome
// Validation Rules 
// • Empty → Please enter a word 
// • Numbers not allowed 
// • Special characters not allowed 


// function Palindrome(){
// const val=document.getElementById("value").value  ;
// const cleaned = /[^a-zA-Z0-9\s]/g; 
// const res=document.getElementsByClassName("result")[0];

// if(val=="" ){
//     res.innerText="";
//   document.getElementsByClassName("errorDiv")[0].innerHTML="* Please enter a word";
// }
// if(Number(val)){
//     res.innerText="";
//   document.getElementsByClassName("errorDiv")[0].innerHTML="* Please enter a word";
// }

// if(cleaned.test(val)){
//     res.innerText="";
//      document.getElementsByClassName("errorDiv")[0].innerHTML="Special characters not allowed";
// }
// else{
//   let result="";
//   for(let char of val) {
//     result=char+result;

//   };
//   if(val==result){
//       res.innerText=`Input → ${val}
//       Result → This is a Palindrome`;

//   }
//   else{
//       res.innerText=`Input → ${val}
//       Result → This is Not a Palindrome`;

//   }


// }

// }

// 16. Count Vowels and Consonants 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Output Example 
// Input → javascript 

// Vowels: 3 
// Consonants: 7 
// Validation Rules 
// • Empty input not allowed 
// • Numbers not allowed 
// • Special characters not allowed

// function vowel_consonants(){
// const val=document.getElementById("value").value  ;
// const cleaned = /[^a-zA-Z0-9\s]/g; 
// console.log(val);
// let vowels=0;
// let consonants=0;

// if(val==""){
//   document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a single charater";
// }
// if(cleaned.test(val)){
// document.getElementsByClassName("errorDiv")[0].innerHTML="*please enter a single charater";

// }
// else{

//    for(let char of val){
//       if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
//         vowels++;

// }
// else{

//      consonants++;
// }

//    }


// }
//  document.getElementsByClassName("result")[0].innerText=`Input → ${val}
//  Vowels: ${vowels} 
// Consonants: ${consonants}`;
// }

// 17. Remove Duplicate Elements from Array 
// HTML Design 
// • Textbox → input array 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input  → A,B,C,A,B,D 

// Result → A,B,C,D

// function Replace(){
// const arr=document.getElementById("array-element").value;
// let originalArr=arr.split(",");
// let valuError=document.getElementsByClassName("errorDiv")[0];
// const res= document.getElementsByClassName("result")[0];

// let arrvalue=[];

// if(arr==""){
// valuError.innerHTML="*please enter an array value";

// }
// if(originalArr.length<2){
//     valuError.innerHTML="*please enter more then 1 value ";

// }
// else{
//     for(let i=0;i<originalArr.length;i++){

//         let count=0;
//         for(let j=i;j<originalArr.length;j++){

//             if(originalArr[i]==originalArr[j]){

//                 count++;
//             }
//         }
//         if(count==1&& originalArr[i]!=""){
//             arrvalue.push(originalArr[i])
//         }

//     }
//     console.log(arrvalue);


// }
//  res.innerText=`Input  → ${originalArr}
// Result→${arrvalue}`;

// }

// 18. Character Counter 
// HTML Design 
// • Textarea 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input → Hello World 

// Result → Characters = 11 
// Validation Rules 
// • Empty sentence not allowed 

// const counter=()=>{
//     const val=document.getElementById("value").value;
//     let error=document.getElementsByClassName("errorDiv")[0];
//      let result=document.getElementsByClassName("result")[0];
//      let count=0;

//      if(val==""){
//         error.innerText=`*Empty sentence not allowed `

//      }
//      else{
//          for(let char of val){
//         count++;

//      }

//     result.innerText=`Input → ${val}
//     Result →Characters= ${count}`
//      }
//     }

// 19. Number Even or Odd 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input: 8 

// Result: Even Number 
// Validation Rules 
// • Empty → "Please enter a number" 
// • Letters not allowed 
// • Special characters not allowed

// const check=()=>{
//     const val=document.getElementById("value").value;
//     let error=document.getElementsByClassName("errorDiv")[0];
//      let result=document.getElementsByClassName("result")[0];


//      if(val==""){
//         result.innerText="";
//          return error.innerText=`*Please enter a number`;

//      }
//        if( /[^a-zA-Z0-9\s]/g.test(val)){
//          result.innerText="";
//          return error.innerText=`*Special characters not allowed `;

//      }
//      if(!Number(val)){
//          result.innerText="";
//          return error.innerText=`*Letters not allowed `;
//      }
//    else{
//         if(Number(val)%2==0){
//             error.innerText="";
//                 result.innerText=`Input: ${val}
//     Result:Even Number `;

//         }
//         else{
//              error.innerText="";
//              result.innerText=`Input: ${val}
//     Result:Odd Number `;

//         }

//      }


//      }

// 20. Generate Random Number 
// HTML Design 
// • Textbox for Min 
// • Textbox for Max 
// • Error div 
// • Button 
// • Result div 
// Example 
// Min: 1 
// Max: 100 

// Result: Random Number = 54 
// Validation Rules 
// • Empty fields not allowed 
// • Only numbers allowed 
// • Max must be greater than Min 

// const random=()=>{
//     const min=document.getElementById("value1").value;
//        const max=document.getElementById("value2").value;
//     let error=document.getElementsByClassName("errorDiv")[0];
//      let result=document.getElementsByClassName("result")[0];


//      if(min=="" || max==""){
//         result.innerText="";
//          return error.innerText=`*Empty fields not allowed `;

//      }
//       if(!Number(min,max)){
//          result.innerText="";
//          return error.innerText=`*Only numbers allowed  `;
//      }
//      if(max<min){
//          return error.innerText=`*Max must be greater than Min `;

//      }
//    else{

//             error.innerText="";
//                 result.innerText=Math.floor(Math.random() * (max - min)) +Number(min);

//         }

//      }

// 21. Live Character Counter (Textarea) 
// HTML Design 
// • Textarea 
// • Character count display below 
// • Maximum 200 characters 
// Behaviour 
// • As the user types, character count updates. 
// • If more than 200 characters, show error. 
// Example 
// Message → Hello world 

// Characters → 11 / 200

// const val=document.getElementById("value").addEventListener('input',(ele)=>{
//     let element=ele.target.value;
//     console.log(element)
//     console.log(element.length);

//     if(element.length>200){
//        return document.getElementsByClassName("errorDiv")[0].innerText="morethen 200 words"

//     }

//   document.getElementsByClassName("resultdiv")[0].innerText=`Message →${element} 

// Characters → ${element.length}/ 200`

// })

// 22. Password Strength Checker 
// HTML Design 
// • Password textbox 
// • Error div 
// • Strength indicator 
// Strength Rules 
// Password must contain: 
// • Minimum 8 characters 
// • Uppercase 
// • Lowercase 
// • Number 
// • Special character 
// Output Example 
// Weak 
// Medium 
// Strong

// const val=document.getElementById("value").addEventListener('input',(ele)=>{
//     const length= document.getElementsByClassName("errorDiv")[0];
//     const uppercase= document.getElementsByClassName("errorDiv")[1];
//     const lower= document.getElementsByClassName("errorDiv")[2];
//     const number= document.getElementsByClassName("errorDiv")[3];
//     const special= document.getElementsByClassName("errorDiv")[4];
//       const result= document.getElementsByClassName("resultdiv")[0];
//     let element=ele.target.value;

//     // length

//     if(element.length<8){

//         length.innerText="Minimum 8 characters ";

//     }else{
//          length.innerText="";
//       result.innerText="week"
//     }

//     // uppercase
//      if(/[A-Z]/.test(element)){
//         result.innerText="week";
//         uppercase.innerText="";

//      }else{


//          uppercase.innerText=" minimum one Uppercase "

//      }

//     //    lower
//       if(/[a-z]/.test(element)){
//         result.innerText="week";
//         lower.innerText="";

//     }
//     else{

//          lower.innerText=" minimum one Lowercase "
//     }

//     // number
//     if(/\d/.test(element)){
//        number.innerText="";
//        result.innerText="medium"

//     }else{
//         number.innerText=" minimum one number"
//     }
// //  special char
// if(/[^a-zA-Z0-9\s]/g.test(element)){
//        result.innerText="strong";
//        special.innerText=""

//     }
//     else{
//         special.innerText=" minimum one special character"
//     }

// })

// 23. Email Domain Extractor 
// HTML Design 
// • Textbox for email 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input: user@gmail.com 

// Result: Domain = gmail.com 
// Validation Rules 
// • Empty input → "Please enter email" 
// • Invalid email → "Enter valid email" 

// function validation(){
//     const value=document.getElementById("value").value;
//     const error=document.getElementsByClassName('errorDiv')[0];
//      const result=document.getElementsByClassName('resultdiv')[0];

//     if(value==""){
//         return error.innerText="Please enter email" ;

//     }
//     if( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
//          return error.innerText= "Enter valid email";

//     }
//     else{
//         error.innerText=""
//          let domain=value.split('@').pop();

//         result.innerText=`Input:${value} 

// Result: Domain = ${domain}`;
//     }

// }


// 24. Copy Text to Clipboard 
// HTML Design 
// • Textbox 
// • Copy button 
// • Message div 
// Behaviour 
// Click Copy 
// Text copied to clipboard 

// This uses: navigator.clipboard.writeText()

// function copy() {
//     const value = document.getElementById("value").value;

//     const result = document.getElementsByClassName('resultdiv')[0];


//     navigator.clipboard.writeText(value).then(() => console.log("text copied to clipbox"));

// }

// 25. Show / Hide Password 
// HTML Design 
// • Password textbox 
// • Checkbox 
// Structure 
// <input type="password" id="password"> 
 
// <input type="checkbox" id="toggle"> 
// <label>Show Password</label> 
// Behaviour 
// If checkbox checked 
// password type → text 
// Otherwise:  text → password 
    
// document.getElementById("toggle").addEventListener('change',(ele)=>{

//     if(ele.target.checked){
//     document.getElementById('password').type='text';
//     }
//     else{
//      document.getElementById('password').type='password';
//     }
// })

// 26. Filter List Search 
// HTML Design 
// • Search textbox 
// • List of items 
// Behaviour 
// Typing man 
// Visible result 
// Mango 
// Other items hidden. 

  
    // const filterInput = document.getElementById('search');
    //     const listItems = document.querySelectorAll('.list-find');
    //     const result=document.getElementById("result");
    //    let res="";
    //     filterInput.addEventListener('input', function () {
    //         const filterValue = filterInput.value.toLowerCase();
    //         listItems.forEach(function (item) {
    //             const text = item.innerText.toLowerCase();
                  
    //             if (text.includes(filterValue)) {
                   
    //                 res=res+`<li> ${item.innerText}</li> \n`;
    //                 console.log(item.innerText);
              
                    
    //                   result.innerHTML=res;
                  
    //             } 
               
                    
              
    //         });
    //           res=res.innerHTML="";
    //     });


//     27. Dynamic Table Row Add 
// HTML Design 
// • Name textbox 
// • Age textbox 
// • Add button 
// • Table 
// Structure 
// <input type="text" placeholder="Name"> 
// <input type="text" placeholder="Age"> 
 
// <button>Add</button> 
 
// <table> 
// <tr> 
// <th>Name</th> 
// <th>Age</th> 
// </tr> 
// </table> 
 
// Behaviour 
// Add new rows dynamically. 
// Example 
// Name: John 
// Age: 25 
 
// Table becomes 
// Name   Age 
// John   25 

// const addRow=()=>{
//     const name=document.getElementById("name").value;
//     const age=document.getElementById('age').value;
//      let body=document.getElementById('body');
//     let row=document.createElement('tr');
//     let data1=document.createElement('td');
//     let data2=document.createElement('td');
//      data1.textContent=name;
//      data2.textContent=age;
//      row.appendChild(data1);
//      row.appendChild(data2);
//      body.appendChild(row);
// }

// 28. Toggle Dark Mode 
// HTML Design 
// • Button (<button>Toggle Dark Mode</button>_ 
// Behaviour 
// Switch between 
// Light mode 
// Dark mode 
 
// Use: document.body.classList.toggle()

// const switched=document.getElementById("event");
// const body=
// switched.addEventListener('click',()=>{
//     document.body .classList.toggle('dark_theme') ;

// })

// 29. Form Auto Uppercase 
// HTML Design 
// • Textbox 
// Behaviour 
// User types → john 
// Automatically converts to → JOHN 


// 30. Countdown Timer 
// HTML Design 
// • Input for seconds 
// • Start button 
// • Display timer 
// Example 
// Input → →10 
// Output 
// 10 
// 9 
// 8 
// 7 
// ... 
// 1 
// 0

// const countdown=()=>{
//     const val=document.getElementById('value').value ;
//     const res=document.getElementsByClassName('result')[0];
//     let count=Number(val);
//     let res1="";
//       setInterval(()=>{
//         if(count>=0){
//             res1+=`${count+"\n"}`;
//               console.log(count);
//             count--;
//             res.innerText=`Input → ${val}
//           Output:
//            ${res1}`
     

//         }
//            },1000)
// }



// 31. Basic Drag & Drop Between Two Boxes 
// HTML Design 
// • Two containers 
// o Available Items 
// o Selected Items 
// UI Example 
// Available Items          Selected Items 
 
// [Item 1]                 (Drop Here) 
// [Item 2] 
// [Item 3] 
// Behaviour 
// • Drag item from left box 
// • Drop into right box

let dragged1;
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
dragged1 = event.target;
});
let dragged2;
const source2 = document.getElementById("draggable1");
source2.addEventListener("dragstart", (event) => {
dragged2 = event.target;
});
let dragged3;

const source3= document.getElementById("draggable2");
source3.addEventListener("dragstart", (event) => {
dragged3 = event.target;
});


const target = document.getElementById("drop-target1");
target.addEventListener("dragover", (event) => {
  event.preventDefault();
});
target.addEventListener("drop", (event) => {
event.preventDefault();

if (event.target.classList.contains("dropzone1")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged1);
    // event.target.appendChild(dragged2);
    // event.target.appendChild(dragged3);
 }
});


// 38. Debounce Search Input 
// HTML Design 
// Search Products 
 
// [ Search box ] 
// Behaviour 
// Search should trigger after 500ms pause 
// Example 
// Typing → lap 
 
// Search triggers once.


// let timeout;
// const val=document.getElementById("searchBox").addEventListener('input',(a)=>{
//     let result=document.getElementById('res');
//     clearTimeout(timeout);
//     timeout=setTimeout(()=>{
//         let out=a.target.value;
//         console.log(out);
//         result.innerText=`Typing → ${out}
//         Search triggers once.  `

       

//     },500)
     
// })

// 39. Debounced API Search 
// HTML Design 
// Search GitHub Users 
 
// [ search username ] 
// Behaviour 
// Call API → https://api.github.com/search/users?q= 
// Use debounce 500ms 

// let timeout;
// const val=document.getElementById("searchBox").addEventListener('input',(a)=>{
//     let result=document.getElementById('res');
//     clearTimeout(timeout);
//     timeout=setTimeout(()=>{
//         let out=a.target.value;
//         console.log(out);

//         let url=fetch(`https://api.github.com/search/users?q=${out}`)
//         url.then((res)=>res.json()).then((val)=>{
//                 result.innerText=JSON.stringify(val);

//         })
    

       

//     },500)
     
// })