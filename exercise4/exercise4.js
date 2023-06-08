function submitNumber() {
    let number = Number(document.getElementById("number").value);

    // Option 1
    // let numbersArray = createArray(number);
    // let sum = sumOfNumbers(numbersArray);

    //Option 2
    let sum2 = sumOfNumbers2(number);
    updateScreen(sum2);
}


/* 
    Option 1 - Most inefficient way
    1) Create a number array up to the value entered by the user
    2) Once have the array, sum all the numbers that are in the array
*/

const createArray = (number) => {
    let array = [];
    for (let index = 0; index <= number; index++) {
        array.push(index);
    }
    return array;
}

const sumOfNumbers = (array) => {
    let sum = array.reduce((partialSum, atualNr) => partialSum + atualNr, 0);
    console.log('SUM: ', sum);
    return sum;
}

// Option 2 - without array

const sumOfNumbers2 = (number) => {
    let total = 0;
    for (number; number >= 0; number--) {
        total += number;
    }
    return total;
}

const updateScreen = (sum) => {
    let sumOfNumbers = document.getElementById("sumOfNumbers");
    sumOfNumbers.innerHTML = "Sum of all natural numbers from 0 up to the given number is: " + sum;
}




