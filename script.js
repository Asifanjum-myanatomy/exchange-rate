const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Audio elements
const clickSound = document.getElementById('clickSound');
const swapSound = document.getElementById('swapSound');
const calculateSound = document.getElementById('calculateSound');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(4)} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      calculateSound.play();
    });
}

// Event Listeners with audio feedback
currencyEl_one.addEventListener('change', () => {
  clickSound.play();
  calculate();
});
amountEl_one.addEventListener('input', () => {
  clickSound.play();
  calculate();
});
currencyEl_two.addEventListener('change', () => {
  clickSound.play();
  calculate();
});
amountEl_two.addEventListener('input', () => {
  clickSound.play();
  calculate();
});

swap.addEventListener('click', () => {
  swapSound.play();
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();