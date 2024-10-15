// Taking the user defined input for the number and removed all the test cases
const readline = require('readline');
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
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const calculator = new StringCalculator();
userInput.question('Enter a string of numbers to calculate the sum:\n', (input) => {
    try {
        const result = calculator.add(input);
        console.log(`Sum: ${result}`);
    } catch (e) {
        console.error(e.message);
    }
    userInput.close();
});
