

//method to check if email is valid
export function isValidEmail(value) {
    let emailValid = value.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || "";
    return emailValid ? true : false;
}

//method to check if name is valid
export function isValidName(value) {
    let nameValid = value.toString().match(/^[a-zA-Z ]+$/) || "";
    return nameValid ? true : false;
}

//method to check if license number is valid, License number contains only letters and numbers
export function isValidLicenseNumber(value) {
    let licenseValid = value.toString().match(/^[a-zA-Z0-9]+$/) || "";
    return licenseValid ? true : false;
}

//method to check if description is valid 
export function isValidDescription(value) {
    let descriptionValid = value.toString().match(/^[a-zA-Z0-9_]+$/) || "";
    return descriptionValid ? true : false;
}

//method to check if object has data
export function isObjEmpty (obj) {
    return Object.keys(obj).length === 0;
}