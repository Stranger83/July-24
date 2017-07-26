function solve(input) {
    let str = input[0];
    let numArr = str.split(" ").map(Number);
    [num1, num2, num3] = numArr;
    if (num1 + num2 === num3){
        console.log(`${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`)
    } else  if (num2 + num3 === num1){
        console.log(`${Math.min(num3, num2)} + ${Math.max(num3, num2)} = ${num1}`)
    } else  if (num1 + num3 === num2){
        console.log(`${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`)
    } else {
        console.log("No");
    }
}