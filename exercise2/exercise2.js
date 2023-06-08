const submitInformation = () => {
    let text = document.getElementById("text").value;
    let character = document.getElementById("character").value;
    characterCounter2(text, character);
    let count = characterCounter(text, character);
    updateScreen(character, count);
}

// Option 1 to count the character

const characterCounter = (text, character) => {
    var regex = new RegExp(character, 'g');
    return text.match(regex || []).length;
}

// Option 2 to count the character

const characterCounter2 = (text, character) => {
    let countCharacter = 0;
    for (let index = 0; index < text.length; index++) {
        if (character === text[index]) {
            console.log('COUNT CHARACTER 2: ', countCharacter);
            countCharacter++;
        }
    }
    return countCharacter;
}

const updateScreen = (character, count) => {
    let textInformation = document.getElementById('textInformation');
    textInformation.innerHTML = ' The character ' + character + ' appears ' + count + ' times. '
}

