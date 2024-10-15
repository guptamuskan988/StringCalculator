// Changed the delimiters to ; and | and for TDD I have changed delimiter but not changed the delimiters in inputs provided
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
console.log(calculator.add("1\n2,3"));  
console.log(calculator.add("//|\n1,2,3"));//TDD test case which will provide output as 1 because delimiter is changed to | this but seperated by ,
console.log(calculator.add("//;\n1;2"));  //Changed the delimiter to ;   
console.log(calculator.add("//|\n1|2|3"));//Changed the delimiter to |
