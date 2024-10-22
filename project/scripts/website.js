const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

