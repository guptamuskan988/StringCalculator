//Handling the string seperated by multiple commas
class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        
        const numberArray = numbers.split(",");
        let sum = 0;
        
        for (let number of numberArray) {
            sum += parseInt(number, 10);//Short Hand Operators
        }
        
        return sum;
    }
}
const calculator = new StringCalculator();
console.log(calculator.add(""));     
console.log(calculator.add("1"));     
console.log(calculator.add("1,2,3"));
