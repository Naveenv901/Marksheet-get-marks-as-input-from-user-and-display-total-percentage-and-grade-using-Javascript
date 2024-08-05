let totals=0;
let count=0;
let rem=0;
let vall="";
let arr=["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"]
    function fors(){
        const ans=document.getElementById('inp1');
        const out=document.getElementById('op1');
        const wor=document.getElementById('wo');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
    out.innerHTML=ans.value;
    if(ans.value==100)  
        wor.innerHTML="One zero zero"
    else if(ans.value<10){
        wor.innerHTML= "ZERO " +arr[Number(ans.value)]
        console.log(wor)
     }
     else {
        // Convert number to words for numbers >= 10 and < 100
        const num = Number(ans.value);
        vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
        wor.innerHTML = vall.trim();
    }
    }
    
if(Number(ans.value)<50 ||ans.value=="u"){
    count++;

if(ans.value!="u" && ans.value<=100)
totals+=Number(ans.value)
}
    }
function fors1(){
    vall=""
    const ans=document.getElementById('inp2');
    const out=document.getElementById('op2');
    const wor=document.getElementById('wo1');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value)<50 ||ans.value=="u"){
    count++;
}
if(ans.value!="u" && ans.value<=100) 
totals+=Number(ans.value);
    }
   
}
function fors2(){
    vall=""
    const ans=document.getElementById('inp3');
    const out=document.getElementById('op3');
    const wor=document.getElementById('wo2');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value)<50 ||ans.value=="u"){
    count++;
}
if(ans.value!="u"  && ans.value<=100)
totals+=Number(ans.value);
    }
    

}
function fors3(){
    vall=""
    const ans=document.getElementById('inp4');
    const out=document.getElementById('op4');
    const wor=document.getElementById('wo3');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value ||ans.value=="u")<50){
    count++;
}
if(ans.value!="u"  && ans.value<=100)
totals+=Number(ans.value)
    }
   

}
function fors4(){
    vall=""
    const ans=document.getElementById('inp5');
    const out=document.getElementById('op5');
    const wor=document.getElementById('wo4');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value ||ans.value=="u")<50){
    count++;
}
if(ans.value!="u" && ans.value<=100)
totals+=Number(ans.value)

    }
    
}
function fors5(){
    vall=""
    const ans=document.getElementById('inp6');
    const out=document.getElementById('op6');
    const wor=document.getElementById('wo5');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value ||ans.value=="u")<50){
    count++;
}
if(ans.value!="u" && ans.value<=100)
totals+=Number(ans.value)
    }
    

}
function fors6(){
    vall=""
    const ans=document.getElementById('inp7');
    const out=document.getElementById('op7');
    const wor=document.getElementById('wo6');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value)<50 ||ans.value=="u"){
    count++;
}
if(ans.value!="u" && ans.value<=100)
totals+=Number(ans.value)
    }
    

}
function fors7(){
    vall=""
    const ans=document.getElementById('inp8');
    const out=document.getElementById('op8');
    const wor=document.getElementById('wo7');
    if(ans.value!=null && (ans.value<=100||ans.value=="u")){
 out.innerHTML=ans.value;
 wor.innerHTML=ans.value
 if(ans.value==100)  
    wor.innerHTML="One zero zero"
else if(ans.value<10){
    wor.innerHTML= "ZERO " +arr[Number(ans.value)]
    console.log(wor)
 }
 else {
    // Convert number to words for numbers >= 10 and < 100
    const num = Number(ans.value);
    vall = arr[Math.floor(num / 10)] + " " + arr[num % 10];
    wor.innerHTML = vall.trim();
}
 if(Number(ans.value)<50 ||ans.value=="u"){
    count++;
}
if(ans.value!="u" && ans.value<=100)
totals+=Number(ans.value)

    }
    total()
    result() 
}

function total(){
    console.log(totals)
    document.getElementById('tot').innerHTML="Grand total " + totals;
    percentage();
}
function percentage() {
    const average = totals / 8;
    document.getElementById('per').innerHTML = average.toFixed(2) + "%";
    
    const grad = document.getElementById('grad');
    if (average > 90) {
        grad.innerHTML = "Grade A";
    }
    else if (average <= 90 && average>=75) {
        grad.innerHTML = "Grade B";
    } 
    else if (average <= 74 && average>=61) {
        grad.innerHTML = "Grade C";
    } 
    else if (average >= 50 && average<=60) {
        grad.innerHTML = "Grade D";
    } 
     else {
        grad.innerHTML = "Fail";
    }
    console.log(average);
}
function result(){
    if(count==0){
        document.getElementById('res').innerHTML="PASS"
    }
    else
    document.getElementById('res').innerHTML="FAIL"
}
