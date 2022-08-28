const apiKey = "d6923e7a2a6f4109b7c3d3c1bbf86eab";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature");
const descElement = document.querySelector("#description");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity");
const windElement = document.querySelector("#wind");

const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};

searchBtn.addEventListener("click", async (e) => {
  console.log("Opa");

  e.preventDefault();

  const searchValue = cityInput.value;

  const data = await getWeatherData(searchValue);

  console.log(data);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;
});
