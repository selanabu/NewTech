
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

//// Ex3.1 - Growth Of population
function nb_year(p0, percent, aug, p) {
    let n = 0;
    while (p0 < p) {
        p0 = p0 + (p0 * percent) / 100 + aug;
        n+=1;}
    return n;
}
console.log(nb_year(1500000, 2.5, 10000, 2000000));


/////Ex3.2 - People on the Bus - i dont undersand the task because  there is no examples
function PeopleOnBus(busStops) {
    let lastPeople = 0;
    for (let i = 0; i < busStops.length; i++) {
        lastPeople += busStops[i][0];
        lastPeople -= busStops[i][1];
    }
    return lastPeople;
}
console.log(PeopleOnBus([[10,0],[3,5],[5,8]]));


/////Ex4.1 1 - Fibonacci - 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, … 

function Fibonacci(n) {
    let sum =0;
    let prev =1;
    if (n === 0) {
        return 0;
    }   
    if (n === 1) {
        return 1;
    }   

    while (n>0){
        let temp = sum;
        sum = sum + prev;
        prev = temp;
        n--;
    }
    return sum;
}
console.log(Fibonacci(6));

////Ex4.2 - Tribonacci - 
////function Tribonacci(n) 


////Ex5.1 - trimming string 
function TrimString(str){
    let size = str.length;
    str = str.slice(1, size - 1);
    return str;
}
console.log(TrimString("SELAN"));

////Ex5.2 - String Repeat 
function repeatStr(n, str){
    let  result ="";
    while(n>0){
        result+=str;
        n--;
    }
    return result;
}
console.log(repeatStr(5, "Hello"));

////Ex5.3 - To Camel Case 
function toCamelCase(str){
    let result ="";
    for (let i =0; i<str.length; i++){
        if (str[i] === "-" || str[i] === "_"){
            i++;
            result += str[i].toUpperCase();
        }else{
            result += str[i];
        }   
    }
    return result;
}
console.log(toCamelCase("the-stealth-warrior"));

////Ex5.4 - To Weird Case 
function toWeirdCase(str){
    let result ="";
    for (let i =0; i<str.length; i++){
        if (i % 2 === 0){
            result += str[i].toUpperCase();
        }else{
            result += str[i].toLowerCase();
        }
    }
    return result;
}
console.log(toWeirdCase("Weird string case"));


////Ex5.5 - Abbreviate two words 
function abbrevName(name){
    let result=name[0];
    for(let i=0; i<name.length; i++){
        if ( name[i]===" "){
            result= result + "." + name[i+1]
        }
    }
    return result;



}
console.log(abbrevName("Sam Harris"));