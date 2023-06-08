validateInformation = () => {
    let nr1 = Number(document.getElementById("nr1").value);
    let nr2 = Number(document.getElementById("nr2").value);
    const result = validateNrsOrSum(nr1, nr2);
    updateInformation(result);

}

const validateNrsOrSum = (nr1, nr2) => {
    if (nr1 === 100) return true;
    if (nr2 === 100) return true;
    if (nr1 + nr2 === 100) return true;
    return false;
}

const updateInformation = (result) => {
    let information = document.getElementById("information");
    information.innerHTML = `O resultado é: ${result}`;
}