//1 add withdraw button
//2 get  the withdow
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawflid=document.getElementById('balnce-email');
    const newwithdrawString=withdrawflid.value;
    const newwithdrowamont=parseFloat(newwithdrawString);
    withdrawflid.value=' '
    if(isNaN(newwithdrowamont)){
        alert('plase enter valid number')
        return;
    }
    // step-3
    const withdrawtotaElement=document.getElementById('withdraw-total')
    const previousewithdrawtotalstring=withdrawtotaElement.innerText;
    const previousWithdrawTotal=parseFloat(previousewithdrawtotalstring);
   //step-4
  
 //step-5
 const balenceTotalElement=document.getElementById('blaance-total')
 const previousBalanceTotalstring =balenceTotalElement.innerText;
 const previousblacetotal=parseFloat(previousBalanceTotalstring)
 withdrawflid.value=' '

 if (newwithdrowamont>previousblacetotal){
    alert('you have no many available reachace plase!')
    return;
 }
 else{
    ('you have balnce for withdraw now')
 }
 const currentwithdrawtotal=previousWithdrawTotal+newwithdrowamont;
 withdrawtotaElement.innerText=currentwithdrawtotal;
//step-6
const newBlancetotal=previousblacetotal-newwithdrowamont
balenceTotalElement.innerText=newBlancetotal
   //step-7
   withdrawflid.value=' '

})