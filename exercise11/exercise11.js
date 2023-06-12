const submitInformation = () => {
    let text = document.getElementById("text").value;
    let character = document.getElementById("character").value;

    let validateCharacter = validateLastCharacter(text, character);
    updateInformation(validateCharacter);
}

const validateLastCharacter = (text, character) => {
    return character === text.slice(-1) ? true : false;
}

const updateInformation = (validateCharacter) => {
    let information = document.getElementById("information");
    information.innerHTML = `The result is: ${validateCharacter}`;
}