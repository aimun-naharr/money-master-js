// calculate button handler added---------------------------------------------------
document.getElementById('calculate-btn').addEventListener('click', function(){
balanceUpdate()
})

function balanceUpdate(){
    const foodInput = document.getElementById('food-input')
const foodAmount = parseFloat(foodInput.value)
const rentInput = document.getElementById('rent-input')
const rentAmount = parseFloat(rentInput.value)
const clothesInput = document.getElementById('clothes-input')
const clothesAmount = parseFloat(clothesInput.value)
// all the expenses added------------------------------------------------------------------------------
const totalExpense = foodAmount+ rentAmount + clothesAmount
const totalExpenseAmount = document.getElementById('total-cost')

const incomeInput = document. getElementById('income-input')
const incomeAmount = parseFloat(incomeInput.value)
// balance left after calculating total expense------------------------------------------------------
const totalBalance = incomeAmount - totalExpense
const balanceAmount = document.getElementById('balance-amount')
// condition added------------------------------------------------------------------------
if(foodInput.value< 0 || rentInput.value < 0 || clothesInput.value< 0 || incomeInput.value<0){
    
    document.getElementById('balance-error').style.display = 'block'
}
else if(isNaN(foodInput.value) || isNaN(rentInput.value) || isNaN(clothesInput.value) || isNaN(incomeInput.value)){
    document.getElementById('balance-error').style.display = 'block'
}
else if(incomeAmount<totalExpense){
   document.getElementById('income-error').style.display = 'block'
}
else if(incomeAmount>totalExpense){
   document.getElementById('income-error').style.display = 'none'
   balanceAmount.innerText = totalBalance
   totalExpenseAmount.innerText = parseFloat(totalExpense).toFixed(2)
}
else {
    balanceAmount.innerText = totalBalance
    totalExpenseAmount.innerText = parseFloat(totalExpense).toFixed(2)
}
foodInput.value = ''
rentInput.value = ''
clothesInput.value = ''
incomeInput.value = ''
}

// save button handler added-------------------------------------------------------
document.getElementById('save-btn').addEventListener('click', function(){
    savingsUpdate()
   
})

function savingsUpdate(){
    const saveInput = document.getElementById('save-input')
    const saveAmount = parseInt(saveInput.value) / 100
    const incomeInput = document.getElementById('income-input') 
    const incomeAmount = parseInt(incomeInput.value)
    const savingAmount = incomeAmount * saveAmount
    const saveTotal = document.getElementById('save-total')
    
    const balanceInput = document.getElementById('balance-amount')
    const balanceAmount = parseFloat(balanceInput.innerText)
    // condition added--------------------------------------------------------------------------
    if(savingAmount> balanceAmount){
        document.getElementById('saving-error').style.display = 'block'
    }
    else if(savingAmount>0){
        saveTotal.innerText = parseFloat(savingAmount).toFixed(2)
        document.getElementById('saving-error').style.display = 'none'
    }
    const remainInput = document.getElementById('remain-input')
    // const remainingAmount = parseFloat(remainInput.innerText)
   const totalRemaining = balanceAmount - savingAmount
   if(totalRemaining> 0){
    remainInput.innerText = totalRemaining
   }
   else if(saveInput.value<0){
       remainInput.innerText = balanceAmount
   }
}