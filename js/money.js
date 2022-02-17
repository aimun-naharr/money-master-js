document.getElementById('calculate-btn').addEventListener('click', function(){
const foodInput = document.getElementById('food-input')
const foodAmount = parseFloat(foodInput.value)
const rentInput = document.getElementById('rent-input')
const rentAmount = parseFloat(rentInput.value)
const clothesInput = document.getElementById('clothes-input')
const clothesAmount = parseFloat(clothesInput.value)
const totalExpense = foodAmount+ rentAmount + clothesAmount
const totalExpenseAmount = document.getElementById('total-cost')
totalExpenseAmount.innerText = parseFloat(totalExpense).toFixed(2)
const incomeInput = document. getElementById('income-input')
const incomeAmount = parseFloat(incomeInput.value)
const totalBalance = incomeAmount - totalExpense
const balanceAmount = document.getElementById('balance-amount')
balanceAmount.innerText = totalBalance
if(isNaN(foodInput.value)){
    
}
})