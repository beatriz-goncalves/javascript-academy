const dice =
    [
        { name: "Dice 1", faces: 4 },
        { name: "Dice 2", faces: 6 },
        { name: "Dice 3", faces: 8 },
        { name: "Dice 4", faces: 10 },
        { name: "Dice 5", faces: 12 },
        { name: "Dice 6", faces: 20 },
    ];

const firstOption = "Select the number of faces";

const initPage = () => {
    const options = fillDropdown(getAllFaces());
    showDataByOptionSelected(options);
}

const getAllFaces = () => {
    let facesArray = [firstOption];
    dice.forEach((item) => {
        facesArray.push(item.faces)
    });
    return facesArray;
}

const fillDropdown = (options) => {
    var dropdown = document.getElementById("dropdownList");

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        dropdown.add(option);
    }

    return dropdown;
}

const showDataByOptionSelected = (dropdownOptions) => {
    dropdownOptions.addEventListener("change", (() => {
        const face = Number(document.getElementById("dropdownList").value);
        let result = generateRandomData(face);
        updateInformation(result, face);
    }))
}

const generateRandomData = (faceNumber) => {
    let min = 1;
    return Math.floor(Math.random() * (faceNumber - min + 1)) + min;
}

const updateInformation = (numberGenerated, face) => {
    let result = document.getElementById("result");
    result.innerHTML = `The number generated, choosing a die of ${face} faces is: ${numberGenerated}`;
}

window.addEventListener("load", initPage);