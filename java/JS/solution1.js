
///// Ex1.1 - Yes or No
function YesOrNo(bool){
    if (bool === true){
        return "Yes";
    }else{
        return "No";
    }
}

console.log(YesOrNo(true));


///// Ex2.1 - Sum of two lowest positive integers
function SumOfLowestNumbers(numbers) {
 let sortedNumbers = numbers.sort((a, b) => a - b);
 return sortedNumbers[0]+sortedNumbers[1];
}

console.log(SumOfLowestNumbers([19, 5, 42, 2, 77])); // Output: 7


/////Ex2.2 - One and Zero - Binary
function BinaryArrayToNumber(arr) {
   let k = 1;
   let i = arr.length - 1;
   let sum=0;

    while(i>=0){
        sum +=arr[i]*k;
        k = k*2;
        i--;
    }   
    return sum;
}

console.log(BinaryArrayToNumber([1,0,1,1])); 


///// Ex2.3 - Find the Next Perfect Square
function FindNextPerfectSquare(sq) {
    let root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
}
console.log(FindNextPerfectSquare(11));


/////Ex2.4 - Unique
function Uniq(arr) {
    arr.sort((a, b) => a - b);
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }   

}
console.log(Uniq([ 1, 1, 1, 0.55, 1, 1 ]));

/////Ex2.5 - Summation
function Summation(num) {
    let sum = num;
    while (num > 0) {
        num -= 1;
        sum += num;
    }
    return sum;
}
console.log(Summation(8));

/////Ex2.6 - Years and Centuries
function Century(year) {
    if (year % 100 === 0) {
        return year / 100;
    }else{
        return Math.ceil(year / 100);
    }

}
console.log(Century(1600));

//// Ex2.7 -  Basic Math
function BasicMath(operation, value1, value2) {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
    }
}

console.log(BasicMath("+", 4, 7));

