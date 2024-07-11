let operators = ['+', '-', '*', '/', '%'];
let expression = "";
let result = 0;

// Generate random string of digits and operators
function genRandStr() {
    for (let i = 0; i < 5; i++) {
        let rand = Math.floor(Math.random() * 10);
        expression += rand;
        if (i < 4) {
            expression += operators[Math.floor(Math.random() * operators.length)];
        }
    }
    result = eval(expression);
    if (isNaN(result) || !Number.isInteger(result)) {
        expression=""
        genRandStr();
    }
}

genRandStr();

document.getElementById("n1").innerText = expression[0];
document.getElementById("o1").innerText = expression[1];
document.getElementById("n2").innerText = expression[2];
document.getElementById("o2").innerText = expression[3];
document.getElementById("n3").innerText = expression[4];
document.getElementById("o3").innerText = expression[5];
document.getElementById("n4").innerText = expression[6];
document.getElementById("o4").innerText = expression[7];
document.getElementById("n5").innerText = expression[8];
document.getElementById("res").innerText = result;

Array.from(document.getElementsByClassName("operator")).forEach(opInput => opInput.addEventListener("change", function() { 
    var val = this.value;
    if (!operators.includes(val)) {
        this.value = "";
    }
}));

function checkOperators() {
    var allOpFilled = true;
    Array.from(document.getElementsByClassName("operator")).forEach(function(op) {
        if (!op.value) {
            allOpFilled = false;
        }
    });
    if (!allOpFilled) {
        alert("Please fill all the operators!");
        return;
    }
    var userExp = "";
    var thingsToInclude = [".num #n1", "#o1", ".num #n2", "#o2", ".num #n3", "#o3", ".num #n4", "#o4", ".num #n5"];
    // Some are h1 tags (innerText) and others are input tags (value)
    thingsToInclude.forEach(thing => {
        if (thing[0] == "#") {
            userExp += document.querySelector(thing).value;
        } else {

            userExp += document.querySelector(thing.slice(-3)).innerText;
        }
    });
    console.log(userExp);
    if (eval(userExp)==result) {
        alert("Correct!");
    } else {
        alert("Incorrect! Try again!");
    }
}