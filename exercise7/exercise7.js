const cats =
    [
        { name: "Zé", race: "American Wirehair", age: 1, color: "Black and White" },
        { name: "Pimpolho", race: "Azul Russo", age: 3, color: "Grey" },
        { name: "Simba", race: "Asian", age: 2, color: "Black" },
        { name: "Boneca", race: "Bengal", age: 5, color: "White" },
        { name: "Zé", race: "Bombaim", age: 5, color: "Black" },
        { name: "Pimpolho", race: "Burmês", age: 3, color: "Orange" },
        { name: "Simba", race: "British ShortHair", age: 8, color: "Brown" },
        { name: "Boneca", race: "Burmilla", age: 12, color: "Black and White" },
    ];

const initPage = () => {
    buildCatsInformation();
    const options = fillDropdownName(getAllNames());
    showInformationByCatNameSelected(options);
}

const getAllNames = () => {
    let nameArray = ['Select the name'];
    cats.forEach((cat) => {
        nameArray.push(cat.name);
    })

    // Using SET allows you to create an array of unique values
    return [...new Set(nameArray)];

}

const fillDropdownName = (optionsName) => {
    var dropdown = document.getElementById("dropdownList");

    for (var i = 0; i < optionsName.length; i++) {
        var option = document.createElement("option");
        option.text = optionsName[i];
        dropdown.add(option);
    }

    return dropdown;
}

const buildCatsInformation = () => {
    const result = document.getElementById("result");
    result.innerHTML = "";

    cats.forEach(cat => {
        const catNameDiv = document.createElement("div");
        const raceCatDiv = document.createElement("div");
        const ageCatDiv = document.createElement("div");
        const colorCatDiv = document.createElement("div");
        const paragraf = document.createElement("div");
        catNameDiv.innerHTML = `<b>Name:</b> ${cat.name}`;
        raceCatDiv.innerHTML = `<b>Race:</b> ${cat.race}`;
        ageCatDiv.innerHTML = `<b>Age:</b> ${cat.age}`;
        colorCatDiv.innerHTML = `<b>Color:</b> ${cat.color}`;
        paragraf.innerHTML = `<p></p>`;
        result.appendChild(catNameDiv);
        result.appendChild(raceCatDiv);
        result.appendChild(colorCatDiv);
        result.appendChild(paragraf);
    });
}

const showInformationByCatNameSelected = (dropdownOptions) => {
    dropdownOptions.addEventListener("change", (() => {
        const catName = document.getElementById("dropdownList").value;
        const cat = findFirstCat(cats, catName);
        buildInformation(cat);
    }))
}

const findFirstCat = (cats, catName) => {
    return cats.find(cat => cat.name === catName);
}

const buildInformation = (cat) => {
    let informationCat = document.getElementById("informationCat");
    informationCat.innerHTML = `The first cat found with this name (${cat.name}) has these characteristics: <p></p>
    <b>Race:</b> ${cat.race}, <b>Age:</b>${cat.age}, <b>Color:</b>${cat.color}.`
}

const changeCatsPositions = () => {
    let catsSort = cats.sort(() => Math.random() - 0.5);
    buildCatsInformationSort(catsSort);
}

const buildCatsInformationSort = (cats) => {
    const result = document.getElementById("result");
    result.innerHTML = "";

    cats.forEach(cat => {
        const catNameDiv = document.createElement("div");
        const raceCatDiv = document.createElement("div");
        const ageCatDiv = document.createElement("div");
        const colorCatDiv = document.createElement("div");
        const paragraf = document.createElement("div");
        catNameDiv.innerHTML = `<b>Name:</b> ${cat.name}`;
        raceCatDiv.innerHTML = `<b>Race:</b> ${cat.race}`;
        ageCatDiv.innerHTML = `<b>Age:</b> ${cat.age}`;
        colorCatDiv.innerHTML = `<b>Color:</b> ${cat.color}`;
        paragraf.innerHTML = `<p></p>`;
        result.appendChild(catNameDiv);
        result.appendChild(raceCatDiv);
        result.appendChild(ageCatDiv);
        result.appendChild(colorCatDiv);
        result.appendChild(paragraf);
    });
}

window.addEventListener("load", initPage);