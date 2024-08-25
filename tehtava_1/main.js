const user_input = prompt("Enter celsius");
const farenheit = (user_input * 9) / 5 + 32;
document.getElementById("response").innerHTML = farenheit + " farenheit";
