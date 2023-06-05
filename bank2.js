document.getElementById('diposit').style.borderRadius='10px'
document.getElementById('diposit').style.color='white'
document.getElementById('diposit').addEventListener('click',function(){
    document.getElementById('diposit').style.boxShadow='2px 4px 10px red'
})

document.getElementById('btn-withdraw').style.borderRadius='10px'
document.getElementById('btn-withdraw').style.color='white'
document.getElementById('btn-withdraw').addEventListener('click',function(){
    document.getElementById('btn-withdraw').style.boxShadow='2px 4px 10px red'
})
//step NO 1
document.getElementById('diposit').addEventListener('click',function(){
    //step-2 get the diposit amount from the input field
 const dipositfiled=document.getElementById('dposit-email')
 const newdipositamountString=dipositfiled.value;
 const newdipositamount=parseFloat(newdipositamountString)
 dipositfiled.value=' '
    if(isNaN(newdipositamount)){
        alert('plase enter valid number')
        return;
    }
 
 //step-3
 const diposittotalElement=document.getElementById('diposit-total')
 const previousdepoasitotalString=diposittotalElement.innerText;
 const previousdepoasitotal=parseFloat(previousdepoasitotalString)
 //step-4 add numbere to set the total deposit
 const currentdipositamount=previousdepoasitotal+newdipositamount
//set the diposit total
 diposittotalElement.innerText=currentdipositamount
//step-5 get ballacnce current total
const balenceTotalElement=document.getElementById('blaance-total')
const previousBalanceTotalstring=balenceTotalElement.innerText
const previousblacetotal=parseFloat(previousBalanceTotalstring)
//step-6 calculate current total balance
const currentBlanceTotal=previousblacetotal+newdipositamount
// set the blance total
balenceTotalElement.innerText=currentBlanceTotal




//step-6..
dipositfiled.value=' '
})

