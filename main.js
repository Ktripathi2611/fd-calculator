// main.js

const calculateButton = document.querySelector('.calculato_Button');
const principalInput = document.getElementById('principal');
const interestRateInput = document.getElementById('interest_rate');
const tenureInput = document.getElementById('tenure');
const resultElement = document.getElementById('result');
const totalInterestElement = document.getElementById('total_interest');
const totalAmountElement = document.getElementById('total_amount');
const monthlyInterestElement = document.getElementById('monthly_interest');

calculateButton.addEventListener('click', () => {
  const principal = parseFloat(principalInput.value);
  const interestRate = parseFloat(interestRateInput.value);
  const tenure = parseFloat(tenureInput.value);

  if (isNaN(principal) || isNaN(interestRate) || isNaN(tenure)) {
    alert('Please enter valid numbers for principal, interest rate, and tenure.');
    return;
  }

  // Calculate FD maturity amount
  const interest = (principal * interestRate * tenure) / 100;
  const maturityAmount = principal + interest;

  // Calculate monthly interest
  const monthlyInterest = interest / (tenure * 12);

  // Display results
  resultElement.textContent = maturityAmount.toFixed(2);
  totalInterestElement.textContent = interest.toFixed(2);
  totalAmountElement.textContent = maturityAmount.toFixed(2);
  monthlyInterestElement.textContent = monthlyInterest.toFixed(2);
});
