//Creating the basic StringCalculator method to accept string and return zero is string is empty 
class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        return parseInt(numbers, 10);
    }
}

const calculator = new StringCalculator();
console.log(calculator.add(""));  
console.log(calculator.add("1"));
