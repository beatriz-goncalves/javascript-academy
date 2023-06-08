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

const firstOption = "Select the origin";

const initPage = () => {
    buildFoodInformation();
    const options = fillDropdown(getAllOrigins());
    showInformationByOptionSelected(options);
}

const buildFoodInformation = (infoFood) => {
    let foodArray;
    const result = document.getElementById("result");
    result.innerHTML = "";

    infoFood === undefined ? foodArray = food : foodArray = infoFood;

    foodArray.forEach(food => {
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
    let originArray = [firstOption];
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

        if (origin === firstOption) return buildFoodInformation();

        const foodFiltered = filterFoodByOrigin(food, origin);
        const foodUpdated = updatePriceFood(foodFiltered);
        buildFoodInformation(foodUpdated);
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

window.addEventListener("load", initPage);