const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomText = "";

const generateRandomText = () => {
    randomText = "";
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
        randomText += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    updateRandomText(randomText);
}

const updateRandomText = (randomText) => {
    let text = document.getElementById("randomText");
    text.innerHTML = randomText;
}

const submitInformation = () => {
    let text = document.getElementById("text").value;
    let position = document.getElementById("position").value;

    let result = verifyText(randomText, text, position);
    updateInformation(result);
}

const verifyText = (randomText, text, position) => {
    return result = randomText.withStart(text, position);
}

const updateInformation = (result) => {
    let textResult = document.getElementById("result");
    textResult.innerHTML = `The result is: ${result}`;
}

String.prototype.withStart = function (textToCompare, startIndex = 0) {
    debugger;
    let charactersToIndexInserted = this.toString().substring(startIndex);

    let textToCompareLength = textToCompare.length;

    let originalStringToCompare = charactersToIndexInserted.slice(0, textToCompareLength)

    return originalStringToCompare === textToCompare;
};

