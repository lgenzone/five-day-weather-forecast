
// Your API key is d165ca26185edc2c0c03ddfd0e1f6ef7
// api.openweathermap.org/data/2.5/weather?q=


// request log and lat from openweathermap.org
function getApi(city) {

    var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "d165ca26185edc2c0c03ddfd0e1f6ef7";

    fetch(requestURL)
        .then(function(response) { 
            // checks if request went through and alerts user if it fails
            if (response.ok) {
                response.json().then(function(data) {
                    currentWeather(data);
                });
            } else {
                window.alert("Request Failed")
            }


        })
}


// city search function 
var currentWeather = function(event){
    event.preventDefault(); //blocks the page from refreshing
    
    var cityName = document.getElementById("cityname");

// get city weather if user types in a city name
    if (cityName) {
        getApi(cityName);

// if a valid city is not entered, return response to user
    } else {
        window.alert("Please enter a city");
    }
};

// event listener for search button 
var searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', getApi);