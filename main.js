var operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
operator = operator.toLowerCase();

while (operator !== 'q'){
    if(operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide' || operator === 'exponentiate'){
    var x = prompt("What is the first number in the equation?");
    var x = parseInt(x);
    var y = prompt("What is the second number in the equation?");
    var y = parseInt(y);

    switch(operator){
     case 'add':
      var sum = x + y;
      console.log("The sum of " + x + " plus " + y + " equals " + sum + ".");
      operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
      operator = operator.toLowerCase();
      break;
     case 'subtract':
      var difference = x - y;
      console.log("The difference of " + x + " minus " + y + " equals " + difference + ".");
      operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
      operator = operator.toLowerCase();
      break;
     case 'multiply':
      var product = x * y;
      console.log("The product of " + x + " times " + y + " equals " + product + ".");
      operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
      operator = operator.toLowerCase();
      break;
     case 'divide':
      var quotient = x / y;
      console.log("The quotient of " + x + " divided by " + y + " equals " + quotient + ".");
      operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
      operator = operator.toLowerCase();
      break;
     case 'exponentiate':
      var power = Math.pow(x,y);
      console.log(x + " to the " + y + "th power is " + power + ".");
      operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
      operator = operator.toLowerCase();
      break;
    }
  } else {
    switch(operator){
    case 'squareroot':
        var x = prompt("What number would you like to use?");
        var x = parseInt(x);
        var squareroot = Math.sqrt(x);
        console.log("The square root of " + x + " is " + squareroot + "x");
        operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
        operator = operator.toLowerCase();
        break;
    case 'factorialize':
      var x = prompt("What number would you like to use?");
      var x = parseInt(x);
      var factor = fact(x);
      console.log("The factorial of " + x + " is " + factor + ".");
      operator = prompt("Would you like to add, subtract, multiply, divide, exponentiate, squareroot, factorialize or (q)uit?");
      operator = operator.toLowerCase();
      break;
    }
  }
  }

function fact(x){
  var total = 1
  for(var i = 1; i <= x; i++){
    total *= i;
  }
  return total;
}
