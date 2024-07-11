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
}

result = eval(expression);

console.log("Expression: " + expression);
console.log("Result:", result)