const submitInformation = () => {
    let numbers = document.getElementById("numbers").value;
    let numbersArray = transformInArray(numbers);
    // Option 1
    // let arrayNumberAscendingOrder = ascendingOrder(numbersArray);

    // Option 2
    let arrayNumberAscendingOrder = sortArray(numbersArray);

    let arrayNumbersNotRepetead = removeDuplicates(arrayNumberAscendingOrder);
    updateScreen(arrayNumberAscendingOrder, arrayNumbersNotRepetead);
}

/* 
    Option 1 - Ascending Order
    1) Put the numbers inserted by user in an array
    2) Put them in ascending order after they are in an array.
*/

const transformInArray = (numbers) => {
    let arrayNumbers = numbers.split(",").map((nrm) => {
        return Number(nrm);
    });
    console.log('ARRAY: ', arrayNumbers);
    return arrayNumbers;
}

const ascendingOrder = (arrayNumbers) => {
    arrayNumbers.sort((nr1, nr2) => {
        return nr1 - nr2;
    })
    console.log('ASCENDING ORDER: ', arrayNumbers);
    return arrayNumbers;
}

// Option 2 - without array

const sortArray = (arrayNumbers) => {
    let copyArrayNumbers = [...arrayNumbers];
    return copyArrayNumbers.sort(function (nr1, nr2) {
        return nr1 - nr2;
    })
};

const removeDuplicates = (arrayNumbersInAscendingOrder) => {
    return arrayNumbersInAscendingOrder.filter(
        (item, index) => arrayNumbersInAscendingOrder.indexOf(item) === index);
}


const updateScreen = (arrayNumberAscendingOrder, arrayNumbersNotRepetead) => {
    let arrayInAscendingOrderText = document.getElementById('arrayInAscendingOrderText');
    let arrayNotRepeated = document.getElementById('arrayNotRepeated');

    arrayInAscendingOrderText.innerHTML = 'The numbers entered earlier is ascending order: ' + arrayNumberAscendingOrder;
    arrayNotRepeated.innerHTML = 'The numbers entered earlier is ascending order (not repeated): ' + arrayNumbersNotRepetead;
}


