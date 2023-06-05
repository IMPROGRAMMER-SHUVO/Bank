document.getElementById('hello').style.color='white'
document.getElementById('btn').style.borderRadius='10px'
document.getElementById('btn').style.color='white'
document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('btn').style.boxShadow='2px 4px 10px red'
})
//step No-1 addeventLisitner
document.getElementById('btn').addEventListener('click',function(){
  //Step No-2 getId
  //always remember to use .value to get text from ab input filed
   const emailfield =document.getElementById('user-email')
  const email=emailfield.value;
  
 
  const passwordfild=document.getElementById('user-password')
  const passsword=passwordfild.value
   if(email ==='xyz1102@gmail.com'&& passsword ==='xyz1102'){
    window.location.href="bank.html"
   }
   else{
    alert('plase enter valid email&passord')
   }
})
