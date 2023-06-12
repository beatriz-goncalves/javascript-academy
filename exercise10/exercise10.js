const submitInformation = () => {
    let age = Number(document.getElementById("age").value);
    let ageInformation = validateAge(age);
    updateInformation(ageInformation);
}

const validateAge = (age) => {
    return age >= 18 ? true : false;
}

const updateInformation = (ageInfo) => {
    let information = document.getElementById("information");
    information.innerHTML = `The result is: ${ageInfo}.`;
}