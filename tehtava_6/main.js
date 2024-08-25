var integer = prompt("Enter a positive number:");
parseInt(integer);
let sum = 0;

for (let i = 1; i <= integer; i++) {
  var tr = document.createElement("TR");
  tr.setAttribute("id", "myTr" + i);
  document.getElementById("response").appendChild(tr);
  var rownumber = i;
  for (let i = 1; i <= integer; i++) {
    sum = rownumber * i;
    var td = document.createElement("TD");
    var text = document.createTextNode(sum);
    td.appendChild(text);
    document.getElementById("myTr" + rownumber).appendChild(td);
  }
}
