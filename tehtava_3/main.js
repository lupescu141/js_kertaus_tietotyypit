const side1 = prompt("Enter triangle side 1:");
const side2 = prompt("Enter triangle side 2:");
const side3 = prompt("Enter triangle side 3:");

if (side1 == side2 && side1 == side3) {
  document.getElementById("response").innerHTML =
    "Triangle type is: equilateral (all sides are equal)";
} else if (
  (side1 == side2 && side1 != side3) ||
  (side1 == side3 && side1 != side2) ||
  (side2 == side3 && side2 != side1)
) {
  document.getElementById("response").innerHTML =
    "Triangle type is: isosceles (two sides are equal)";
} else if (side1 != side2 && side1 != side3) {
  document.getElementById("response").innerHTML =
    "scalene (no sides are equal)";
}
