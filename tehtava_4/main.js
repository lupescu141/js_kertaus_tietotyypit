const score = prompt("Enter score (0-100):");

if (score < 40) {
  document.getElementById("response").innerHTML = "Grade is: 0";
} else if (score > 39 && score < 52) {
  document.getElementById("response").innerHTML = "Grade is: 1";
} else if (score > 51 && score < 64) {
  document.getElementById("response").innerHTML = "Grade is: 2";
} else if (score > 63 && score < 76) {
  document.getElementById("response").innerHTML = "Grade is: 3";
} else if (score > 75 && score < 88) {
  document.getElementById("response").innerHTML = "Grade is: 4";
} else if (score > 87) {
  document.getElementById("response").innerHTML = "Grade is: 5";
}
