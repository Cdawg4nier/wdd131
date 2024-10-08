const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.querySelector('select');
function fillForm() {
    products.forEach(product => {
        let newOption = document.createElement("option");
        newOption.textContent = product.name;
        selectElement.appendChild(newOption);
    })
}

fillForm();

let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
});