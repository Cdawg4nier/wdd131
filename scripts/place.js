const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

const windChillElement = document.querySelector("#wind-chill-value");
const temperatureElement = document.querySelector("#temp-value");
const windSpeedElement = document.querySelector("#wind-value");
let currentTemperature = parseFloat(temperatureElement.textContent);
let currentWindSpeed = parseFloat(windSpeedElement.textContent);
if (currentTemperature >= 50 || currentWindSpeed < 3) {
    windChillElement.textContent = `NA`;
}
else {
    windChillElement.textContent = `${calculateWindChill(currentTemperature, currentWindSpeed)} °F`;
}

function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2);
}