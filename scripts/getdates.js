const yearElement = document.querySelector("#currentyear");
let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const modifiedElement = document.querySelector("#lastModified");
modifiedElement.textContent = `Last Modification: ${document.lastModified}`;