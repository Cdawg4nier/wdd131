const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

const burgerButton = document.querySelector('#BurgerMenu')
const navMenu = document.querySelector('nav')
let isVisible = true;
burgerButton.addEventListener("click", function () {
    navMenu.classList.toggle("isVisible")
    isVisible = !isVisible;
    if (!isVisible) { burgerButton.textContent = "❎"; }
    else { burgerButton.textContent = "☰"; }
})

if (window.innerWidth >= 640) {
    burgerButton.textContent = "☰";
    navMenu.classList.remove("isVisible");
    isVisible = true;
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1913, August, 26",
        area: 88562,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/1280x800/cardston-canada-temple-lds-1072764-wallpaper.jpg"
    },
    {
        templeName: "Denver Temple",
        location: "Denver, Colorado, USA",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-43090.jpg"
    },
    {
        templeName: "Fukuoka Japan Temple",
        location: "Fukuoka-shi, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14623.jpg"
    },
];

let templeCardArray = [];
temples.forEach((element) => {
    let templeCard = {
        name: element.templeName,
        location: `Location: ${element.location}`,
        dedicated: `Dedicated: ${element.dedicated}`,
        size: `Size: ${element.area} sq ft`,
        imageUrl: element.imageUrl
    };
    templeCardArray.push(templeCard);
});

const imageContainer = document.querySelector('#Image-Primary-Container');

function displayTemples(cardArray, firstLoad) {
    if (!firstLoad) {
        while (imageContainer.firstChild) { imageContainer.removeChild(imageContainer.firstChild) };
    }
    cardArray.forEach(function (templeCard) {
        createHTMLCard(templeCard);
    })
}

function createHTMLCard(templeCard) {
    const container = document.createElement('div');
    container.className = 'image-Container';

    const nameElement = document.createElement('h3');
    nameElement.textContent = templeCard.name;
    container.appendChild(nameElement);

    const locationElement = document.createElement('p');
    locationElement.textContent = templeCard.location;
    container.appendChild(locationElement);

    const dedicatedElement = document.createElement('p');
    dedicatedElement.textContent = templeCard.dedicated;
    container.appendChild(dedicatedElement);

    const sizeElement = document.createElement('p');
    sizeElement.textContent = templeCard.size;
    container.appendChild(sizeElement);

    const imageElement = document.createElement('img');
    imageElement.src = templeCard.imageUrl;
    imageElement.loading = "lazy";
    imageElement.alt = `A picture of the ${templeCard.name} temple`
    container.appendChild(imageElement);

    imageContainer.appendChild(container)
}


/* This is the default behavior when loading the page*/
displayTemples(templeCardArray, true);

const homeLink = document.querySelector('a[href="#home"]');
const oldLink = document.querySelector('a[href="#old"]');
const newLink = document.querySelector('a[href="#new"]');
const largeLink = document.querySelector('a[href="#large"]');
const smallLink = document.querySelector('a[href="#small"]');


homeLink.addEventListener('click', function (e) {
    e.preventDefault();
    displayTemples(templeCardArray, false)
})

oldLink.addEventListener('click', function (e) {
    e.preventDefault();
    let filteredTemples = templeCardArray.filter(function (card) {
        let dedicationYear = card.dedicated.split(',')[0];
        dedicationYear = dedicationYear.slice(-4);
        return parseInt(dedicationYear) < 1900;
    })
    displayTemples(filteredTemples, false);
})
newLink.addEventListener('click', function (e) {
    e.preventDefault();
    let filteredTemples = templeCardArray.filter(function (card) {
        let dedicationYear = card.dedicated.split(',')[0];
        dedicationYear = dedicationYear.slice(-4);
        return parseInt(dedicationYear) > 2000;
    })
    displayTemples(filteredTemples, false);
})
largeLink.addEventListener('click', function (e) {
    e.preventDefault();
    let filteredTemples = templeCardArray.filter(function (card) {
        let totalArea = card.size.match(/\d+/)[0];
        return parseInt(totalArea) > 90000;
    })
    displayTemples(filteredTemples, false);
})
smallLink.addEventListener('click', function (e) {
    e.preventDefault();
    let filteredTemples = templeCardArray.filter(function (card) {
        let totalArea = card.size.match(/\d+/)[0];
        return parseInt(totalArea) < 10000;
    })
    displayTemples(filteredTemples, false);
})