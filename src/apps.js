let now = new Date();
let selecteddate = document.getElementById("date");
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();

selecteddate.innerHTML = `${day} ${month} ${date} ${year}`;

function search() {
  event.preventDefault();
  alert("Searching");
}
let form = document.getElementById("search-form");
form.addEventListener("submit", search);

let apiKey = "7337ae1caef2e97c56088747f95bcff5";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={7337ae1caef2e97c56088747f95bcff5}";

let city = "London";
let units = "imperial";

function showTemperature(response) {
  console.log(response);
}

axios.get(apiUrl).then(showTemperature);
