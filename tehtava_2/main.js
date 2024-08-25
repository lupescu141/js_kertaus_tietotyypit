const x1 = prompt("Enter point x1");
const y1 = prompt("Enter point y1");
const x2 = prompt("Enter point x2");
const y2 = prompt("Enter point y2");
const distance = (x2 - x1) ^ (2 + (y2 - y1)) ^ 2;

document.getElementById("response").innerHTML =
  "distance between points: " + distance;
