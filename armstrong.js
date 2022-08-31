// program to find whether a given number is armstrong number or not

let sum = 0;
const number = 153;


let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;
//console.log(remainder);
    sum += remainder * remainder * remainder;
    //console.log(sum);
    
    temp = temp / 10;
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}