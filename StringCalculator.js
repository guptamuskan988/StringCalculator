//Handling new lines as delimiters
class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        
        numbers = numbers.replace(/\n/g, ",");
        const numberArray = number.split(",");
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
console.log(calculator.add("-1,-3")); //Will fail because we are not handling negative numbers
console.log(calculator.add("1\n2,3")); 
