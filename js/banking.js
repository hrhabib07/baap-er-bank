document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + newDepositAmount;
    depositInput.value = '';
    // adding total balance 
    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalBalanceText = previousTotalBalance.innerText; 
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceText); 
    const newTotalBalance = previousTotalBalanceAmount + newDepositAmount;
    previousTotalBalance.innerText = newTotalBalance;

});

// withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawText = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const totalNewWithdraw = newWithdrawAmount + previousWithdrawAmount;
    totalWithdraw.innerText = totalNewWithdraw;
    withdrawInput.value = '';
    // updating total balance 
    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalBalanceText = previousTotalBalance.innerText; 
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceText); 
    const newTotalBalance = previousTotalBalanceAmount - newWithdrawAmount;
    previousTotalBalance.innerText = newTotalBalance;
});