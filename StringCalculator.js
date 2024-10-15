//Updated number to numbers in line no 9 and added test case for negative number which will add the negative numbers without throwing exception
class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        
        numbers = numbers.replace(/\n/g, ",");
        const numberArray = numbers.split(",");
        let sum = 0;
        
        for (let number of numberArray) {
            sum += parseInt(number, 10);
        }
        
        return sum;
    }
}
const calculator = new StringCalculator();
console.log(calculator.add(""));          
console.log(calculator.add("1"));       
console.log(calculator.add("1,2,3"));  
console.log(calculator.add("-1,-3")); //Will add the negative numbers here because we are not handling negative numbers test case
console.log(calculator.add("1\n2,3")); 
