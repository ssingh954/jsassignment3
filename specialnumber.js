// program to find whether a given number is special number or not

// Function to find Factorial
function factorial(n){
	let fact = 1;
	
	while (n != 0){
		fact = fact * n;
		n--;
	}	
	return fact;
}

// Function to check if number
function isNumber(n){
	let sum = 0;
	let temp = n;
	
	while (temp != 0){		
		sum = sum + factorial(temp % 10);
		temp = parseInt(temp / 10);
	}
	return sum == n;
}

let n = 145;

if (isNumber(n))
	console.log("YES");
else
console.log("NO");
