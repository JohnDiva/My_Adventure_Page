function fclear() {
    document.getElementById("output").innerHTML = "0";
}

function XZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function display(value) {
    XZero()
    document.getElementById("output").innerHTML = value;
}

function equate() {
    XZero()
    var equation = document.getElementById("output").innerHTML;
    var solve = eval(equation);
    document.getElementById('output').innerHTML = solve;
}

function sqrt() {
    var result = math.sqrt(equation);
    document.getElementById("output").innerHTML = result;
}
