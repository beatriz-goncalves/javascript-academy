const submitInformation = () => {
    let information = document.getElementById("information").value;

    let typeOf = validateTypeof(information);
    updateScreen(typeOf);
}

const validateTypeof = (information) => {
    let typeOf;

    switch (information) {
        case "true":
        case "false":
            typeOf = "boolean";
            break;
        case String(Number(information)):
            typeOf = "integer";
            break;
        case "":
            typeOf = "Not a number, string, or boolean";
            break;
        default:
            typeOf = 'string';
            break;
    }

    return typeOf;
}

const updateScreen = (typeOf) => {
    let result = document.getElementById("result");
    result.innerHTML = `<b>The type is:</b> ${typeOf}`;
}