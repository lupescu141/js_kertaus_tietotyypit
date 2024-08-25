const integer = prompt("Enter a positive number:");
let sum = 0;

for (let i = parseInt(integer); i > 0; i--) {
  sum += i;
}

document.getElementById("response").innerHTML = "Sum for intenger is: " + sum;
