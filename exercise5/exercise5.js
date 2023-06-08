const food =
    [
        { name: "Pastel de Nata", origin: "Portugal", price: 0.80 },
        { name: "Francesinha", origin: "Portugal", price: 12 },
        { name: "Pizza", origin: "Italia", price: 10 },
        { name: "Pasta", origin: "Italia", price: 15 },
        { name: "Croissants", origin: "France", price: 1.5 },
        { name: "Baguettes", origin: "France", price: 1.25 },
        { name: "Gazpacho", origin: "Spain", price: 13 },
        { name: "Tortilla", origin: "Spain", price: 7.5 }
    ];
// ao selection 'select', voltar a aparecer a lista toda
// ver se o código esta bom ou é necessário melhorar

const initPage = () => {
    initFoodInformation();
    const options = fillDropdown(getAllOrigins());
    showInformationByOptionSelected(options);
}

const initFoodInformation = () => {
    const result = document.getElementById("result");
    result.innerHTML = "";

    food.forEach(food => {
        const foodNameDiv = document.createElement("div");
        const foodPriceDiv = document.createElement("div");
        const foodOriginDiv = document.createElement("div");
        const paragraf = document.createElement("div");
        foodNameDiv.innerHTML = `<b>Food:</b> ${food.name}`;
        foodPriceDiv.innerHTML = `<b>Preço:</b> ${food.price.toFixed(2)} euros`;
        foodOriginDiv.innerHTML = `<b>Origin:</b> ${food.origin}`;
        paragraf.innerHTML = `<p></p>`;
        result.appendChild(foodNameDiv);
        result.appendChild(foodPriceDiv);
        result.appendChild(foodOriginDiv);
        result.appendChild(paragraf);
    });
}

const getAllOrigins = () => {
    let originArray = ['Select the origin'];
    food.forEach((item) => {
        originArray.push(item.origin)
    });

    // Using SET allows you to create an array of unique values
    return [...new Set(originArray)];
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


const showInformationByOptionSelected = (dropdownOptions) => {
    dropdownOptions.addEventListener("change", (() => {
        const origin = document.getElementById("dropdownList").value;

        const foodFiltered = filterFoodByOrigin(food, origin);
        const foodUpdated = updatePriceFood(foodFiltered);
        buildInformation(foodUpdated);
    }))
}

const filterFoodByOrigin = (food, origin) => {
    return food.filter(foodItem => foodItem.origin === origin)
}

const updatePriceFood = (foodFiltered) => {
    return foodFiltered.map(foodItem => {
        return {
            ...foodItem,
            price: foodItem.price * 3
        }
    })
}

const buildInformation = (foodUpdated) => {
    const result = document.getElementById("result");
    result.innerHTML = "";

    foodUpdated.forEach(food => {
        const foodNameDiv = document.createElement("div");
        const foodPriceDiv = document.createElement("div");
        const paragraf = document.createElement("div");
        foodNameDiv.innerHTML = `<b>Food:</b> ${food.name}`;
        foodPriceDiv.innerHTML = `<b>Preço:</b> ${food.price.toFixed(2)} euros`;
        paragraf.innerHTML = `<p></p>`;
        result.appendChild(foodNameDiv);
        result.appendChild(foodPriceDiv);
        result.appendChild(paragraf);
    });
}

window.addEventListener("load", initPage);