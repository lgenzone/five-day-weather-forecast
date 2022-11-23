
// Your API key is d165ca26185edc2c0c03ddfd0e1f6ef7
// api.openweathermap.org/data/2.5/weather?q=
// https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&units=imperial&appid=${apikey}


// request log and lat from openweathermap.org

var cityName = "";


      var apiKey = "d165ca26185edc2c0c03ddfd0e1f6ef7"; 
     //   var weatherURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=d165ca26185edc2c0c03ddfd0e1f6ef7";

     //   fetch(weatherURL)
      //      .then((data) => {console.log('response', data.json())  })

        var getCity = async (searchInput) => {
            console.log('button was clicked')
            var weatherURL = "http://api.openweathermap.org/geo/1.0/direct";
            var queryURL = `?q=${searchInput}&limit=5&appid=${apiKey}`;

            var response = await fetch(weatherURL + queryURL);

            var data = await response.json();
            
            //return data; 
            console.log(data);

            //set lat and lon variables
            var lat = data[0].lat;
            var lon = data[0].lon;

            cityName = data[0].name;
            //convert lat and lon values to a string
            var latStg = lat.toString();
            var lonStg = lon.toString();

            getWeather(latStg,lonStg);
        }

    function getLocation() {
        var searchInput = $('#cityname').val().trim();
        console.log(searchInput);
        getCity(searchInput);

    }

    function getWeather(latStg, lonStg) {
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latStg + "&lon=" + lonStg + "&appid=" + apiKey;
        fetch(weatherURL)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(data){
                    console.log(data)
                     // displays current city name
                    var currentCity = $("#current-city")
                    currentCity.text(data.name)
                    // displays current temperature
                    var todayTemp = $("#temp")
                    todayTemp.text(data.main.temp)
                    // displays current wind speed
                    var todayWind = $("#wind")
                    todayWind.text(data.wind.speed)
                    // displays current humidity
                    var todayHumid = $("#humid")
                    todayHumid.text(data.main.humidity)
                 })
            } else {
                window.alert('response failed')
            }
        })
    }

    


    
    // event listener 

     //  var searchButton = document.getElementById('submitBtn');
     //  console.log(searchButton)
     //  searchButton.click(function(){
     //   console.log('button was clicked')
    //    getCity();       });

    var searchButton = document.getElementById('submitBtn')
    searchButton.addEventListener('click', getLocation);
    

       

       

        



        

         


