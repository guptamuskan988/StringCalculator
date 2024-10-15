# String Calculator Project

This project is a step-by-step evolution of a simple string calculator in JavaScript, demonstrating how to handle various delimiter and scenarios for adding numbers from a string input.

## Features

- Handles basic input for empty and single numbers
- Supports multiple comma-separated numbers
- Can handle newlines as delimiters
- Allows custom delimiters defined by the user
- Throws exceptions for negative numbers
- Accepts user input from the command line

## Evolution Steps

### Step 1: Basic String Calculator

**Commit Message**: Creating the basic StringCalculator method to accept string and return zero is string is empty 

- Created a basic string calculator class with a method `add(String numbers)` that returns `0` for an empty string.
- Can parse a single number and return it as an integer.
- Example:
    ```javascript
    console.log(calculator.add(""));  // Output: 0
    console.log(calculator.add("1")); // Output: 1
    ```

### Step 2: Add Support for Multiple Comma-Separated Numbers

**Commit Message**: `Handling the string seperated by multiple commas

- Enhanced the `add()` method to handle multiple comma-separated numbers and return their sum.
- Example:
    ```javascript
console.log(calculator.add(""));     
console.log(calculator.add("1"));     
console.log(calculator.add("1,2,3")); 
    ```

### Step 3: Handle Newlines as Delimiters

**Commit Message**: `Handling new lines as delimiters`

- Modified the code to allow newlines (`\n`) as valid delimiters, in addition to commas.
- Example:
    ```javascript
  console.log(calculator.add(""));          
console.log(calculator.add("1"));       
console.log(calculator.add("1,2,3"));  
console.log(calculator.add("-1,-3")); //Will fail because we are not handling negative numbers
console.log(calculator.add("1\n2,3"));
    ```

### Step 4: Support Custom Delimiters

**Commit Message**: `Changed the delimiters to ; and | and for TDD I have changed delimiter but not changed the delimiters in inputs provided`

- Enabled the use of custom delimiters. If a string starts with `//[delimiter]\n`, it uses the specified delimiter.
- Example:
    ```javascript
console.log(calculator.add(""));           
console.log(calculator.add("1"));            
console.log(calculator.add("1,2,3"));        
console.log(calculator.add("1\n2,3"));  
console.log(calculator.add("//|\n1,2,3"));//TDD test case which will provide output as 1 because delimiter is changed to | this but seperated by ,
console.log(calculator.add("//;\n1;2"));  //Changed the delimiter to ;   
console.log(calculator.add("//|\n1|2|3"));//Changed the delimiter to |
    ```

### Step 5: Throw Exception for Negative Numbers

**Commit Message**: `Added the negative numbers exceptions with try and catch block`

- Enhanced error handling to throw an exception if the input string contains negative numbers.
- The exception message will list all the negative numbers found.
- Example:
    ```javascript
    console.log(calculator.add("1,-2,3,-4")); 
    // Exception: negative numbers not allowed: -2, -4
    ```

### Step 6: Accept User Input from Command Line

**Commit Message**: `Taking the user defined input for the number and removed all the test cases`

- Updated the program to accept user input from the command line using Node.js `readline` module.
- The user can type a string of numbers, and the calculator will process it and display the sum or throw an error if there are negative numbers.
- Example:
    ```bash
    $ node stringCalculator.js
    Enter a string of numbers to calculate the sum:
    1,2,3
    Sum: 6
    ```

## How to Run

1. Clone the repository.
    ```bash
    git clone https://github.com/yourusername/string-calculator.git
    cd string-calculator
    ```
2. Install Node.js if not already installed.
3. Run the program:
    ```bash
    node stringCalculator.js
    ```
