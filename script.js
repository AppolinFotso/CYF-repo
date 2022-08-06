/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var amount, item, earnings, expenses, value;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


amount = [0];
earnings = [0];
expenses = [0];
value = 0;
amount.shift();


document.getElementById('button').addEventListener('click', (event) => {
  amount.push(getNumberOrString(document.getElementById('text').value));

});

document.getElementById('total').addEventListener('click', (event) => {
  amount.forEach((item) => {
    if (item >= value) {
      earnings.push(item);
      let element_list_1 = document.getElementById('list_1');
      let new_li = document.createElement('li');
      new_li.innerText = item;

      element_list_1.appendChild(new_li);
    } else {
      expenses.push(item);
      let element_list_2 = document.getElementById('list_2');
      let new_li2 = document.createElement('li');
      new_li2.innerText = item;

      element_list_2.appendChild(new_li2);
    }
  });
  let element_earnings = document.getElementById('earnings');
  element_earnings.innerText = earnings.reduce((a,b) => a+b, 0);
  let element_expenses = document.getElementById('expenses');
  element_expenses.innerText = expenses.reduce((a,b) => a+b, 0);
  let element_balance = document.getElementById('balance');
  element_balance.innerText = amount.reduce((a,b) => a+b, 0);

});
