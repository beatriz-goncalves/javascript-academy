const submitInformation = () => {
    let number = Number(document.getElementById("number").value);
    let staticNumber = 25;
    let result = calculateDifference(number, staticNumber);
    updateScreen(staticNumber, number, result)
}

const calculateDifference = (number, staticNumber) => {
    return number > 25 ? result = (number - staticNumber) * 2 : result = number - staticNumber;
}

const updateScreen = (number, staticNumber, result) => {
    let text = document.getElementById("result");
    text.innerHTML = 'The difference between ' + number + ' and ' + staticNumber + ' is: ' + result;
}
