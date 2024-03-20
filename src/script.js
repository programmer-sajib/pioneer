//Login Btn
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  loginAlert();
});
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    loginAlert();
  }
});

function loginAlert() {
  const userId = document.getElementById("user").value;
  const userPassword = document.getElementById("password").value;
  if (userId == "user" && userPassword == "admin") {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
    const title = document.querySelector("title");
    title.innerText = "Dashboard";
  } else {
    alert("Incorrect User/Password.");
  }
}

//Deposit Btn
const depositKey = document.getElementById("depositDollarAmount");
depositKey.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    depositDollar();
  }
});
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  depositDollar();
});

function depositDollar() {
  const depositAmountNumber = getInputValue("depositDollarAmount");
  if (depositAmountNumber > 0) {
    updateDollarAmount("deposit", depositAmountNumber);
    updateDollarAmount("balance", depositAmountNumber);
  } else {
    alert("Wrong amount");
  }
  document.getElementById("depositDollarAmount").value = "";
}
//Withdraw Btn
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", () => {
  withdrawDollar();
});
const withdrawKey = document.getElementById("withdrawDollarAmount");
withdrawKey.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    withdrawDollar();
  }
});
function withdrawDollar() {
  const withdrawAmountNumber = getInputValue("withdrawDollarAmount");
  const balanceAmount = document.getElementById("balance").innerText;
  const balanceAmountNumber = parseFloat(balanceAmount);
  if (withdrawAmountNumber > 0) {
    if (
      balanceAmountNumber >= withdrawAmountNumber &&
      balanceAmountNumber > 0
    ) {
      updateDollarAmount("withdraw", withdrawAmountNumber);
      updateDollarAmount("balance", -1 * withdrawAmountNumber);
    } else {
      alert("Insufficient balance. Please Deposit first.");
    }
  } else {
    alert("Wrong amount");
  }
  document.getElementById("withdrawDollarAmount").value = "";
}

//Functionality
function getInputValue(id) {
  const amountInString = document.getElementById(id).value;
  const amountInNumber = parseFloat(amountInString);
  return amountInNumber;
}
function updateDollarAmount(id, amountInNumber) {
  const recentAmount = document.getElementById(id);
  const recentAmountString = recentAmount.innerText;
  const recentAmountNumber = parseFloat(recentAmountString);
  const totalAmount = amountInNumber + recentAmountNumber;
  recentAmount.innerText = totalAmount;
}
