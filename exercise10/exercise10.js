const submitInformation = () => {
    let age = Number(document.getElementById("age").value);
    let ageInformation = validateAge(age);
    updateInformation(ageInformation);
}

const validateAge = (age) => {
    return age >= 18;
}

const updateInformation = (ageInfo) => {
    let information = document.getElementById("information");
    information.innerHTML = `O resultado é: ${ageInfo}.`;
}