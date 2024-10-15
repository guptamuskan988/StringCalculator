// Added the negative numbers exceptions with try and catch block
class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }

        let delimiter = ",";
        if (numbers.startsWith("//")) {
            const delimiterEnd = numbers.indexOf("\n");
            delimiter = numbers.substring(2, delimiterEnd);
            numbers = numbers.substring(delimiterEnd + 1);
        }

        numbers = numbers.replace(/\n/g, delimiter);
        const numberArray = numbers.split(delimiter);
        let sum = 0;
       const negativeNumbers = [];
        
       for (let number of numberArray) {
            const parsedNumber = parseInt(number, 10);
            if (parsedNumber < 0) {
                negativeNumbers.push(parsedNumber);
            }
            sum += parsedNumber;
        }
         if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return sum;
    }
}
const calculator = new StringCalculator();
try {
console.log(calculator.add(""));           
console.log(calculator.add("1"));            
console.log(calculator.add("1,2,3"));        
console.log(calculator.add("1\n2,3"));  
console.log(calculator.add("//|\n1,2,3"));//TDD test case which will provide output as 1 because delimiter is changed to | this but seperated by ,
console.log(calculator.add("//;\n1;2"));  //Changed the delimiter to ;   
console.log(calculator.add("//|\n1|2|3"));//Changed the delimiter to |
    console.log(calculator.add("1,-2,3,-4"));   // Exception: negative numbers not allowed: -2, -4
} catch (e) {
    console.error(e.message);
}
