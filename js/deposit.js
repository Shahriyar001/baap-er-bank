document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositeAmount = depositField.value;

  const depositeTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositeTotalElement.innerText;
  depositeTotalElement.innerText = depositeAmount;
});
