
// API key is d165ca26185edc2c0c03ddfd0e1f6ef7
// api.openweathermap.org/data/2.5/weather?q=
// https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&units=imperial&appid=${apikey}



var recentSearches = [];



      var apiKey = "d165ca26185edc2c0c03ddfd0e1f6ef7"; 
   

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
        };

    

    function getLocation() {
        var searchInput = $('#cityname').val().trim();
        console.log(searchInput);
        getCity(searchInput);

            
            //console.log(recentSearches);
            var prevCities = JSON.parse(localStorage.getItem('city'));
            
            console.log(prevCities);

            // send to local storage
            localStorage.setItem('city', JSON.stringify(searchInput));

            var historyButton = document.createElement('button');
            historyButton.innerHTML = searchInput;
            var searchSection = document.getElementById('history');
            searchSection.appendChild(historyButton);
            recentSearches.push(searchInput);


        };


    function getWeather(latStg, lonStg) {
        var weatherURL = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + latStg + "&lon=" + lonStg  + "&units=imperial&appid=" +
         apiKey;
        //var getWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apikey}
        //var weatherURL = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + latStg + "&lon=" + lonStg + "&appid=" + apiKey;

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
                    todayTemp.text(data.list[0].main.temp + "??F");
                    // displays current wind speed
                    var todayWind = $("#wind")
                    todayWind.text(data.list[0].wind.speed + " mph");
                    // displays current humidity
                    var todayHumid = $("#humid")
                    todayHumid.text(data.list[0].main.humidity + "%");
                    //display current date
                    var currentDate = dayjs();
                    $('#date').text(currentDate.format('dddd' + ' MMM D, YYYY'));
                    // display icon
                    var currentIcon = data.list[0].weather[0].icon;
                    var iconUrl = `https://openweathermap.org/img/w/${currentIcon}.png`
                    $('#icon').attr('src', iconUrl);

                   

                    for (let i = 1; i<5; i++) {

                    var forecast = $('#weather-forecast');

                    // target data 
                    var weekday = dayjs([i]).format('dddd')
                    //var date = data.list[i].dt_txt;
                    var temp = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humid = data.list[i].main.humidity;
                    var icon = data.list[i].weather[0].icon;    

                    // create card container
                    var card = document.createElement('div');
                    card.classList.add('card', 'text-center', 'mx-auto', 'mt-3', 'my-2', 'px-5');
                    card.style.width = '17rem';
                    forecast.append(card);

                    // create card body 
                    var cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');
                    card.append(cardBody); 

                    // create forecast date
                    var forecastDate = document.createElement('h5');
                    forecastDate.classList.add('card-title');
                    forecastDate.innerHTML = weekday;
                    cardBody.append(forecastDate);

                    // create forecast temp
                    var forecastTemp = document.createElement('h4');
                    forecastTemp.classList.add('card-title');
                    forecastTemp.innerHTML = temp + '??F';
                    cardBody.append(forecastTemp);
                    

                    // create unorder list
                    var ul = document.createElement('ul');
                    ul.classList.add('list-group', 'list-group-flush');

                    // create wind speed
                    var forecastWS = document.createElement('li');
                    forecastWS.classList.add('list-group-item');
                    forecastWS.innerHTML = 'Wind Speed: ' + wind + ' mph';
                    cardBody.append(forecastWS);

                    // create humidity
                    var forecastHumid = document.createElement('li');
                    forecastHumid.classList.add('list-group-item');
                    forecastHumid.innerHTML = 'Humidity: ' + humid + '%';
                    cardBody.append(forecastHumid);

                    // create icons
                    var forecastIcon = document.createElement('img');
                    forecastIcon.classList.add('card-img-top');
                    forecastIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
                    cardBody.append(forecastIcon);


                
                    }
                    
                
                 })
            } else {
                window.alert('response failed')
            }
        })
    };
    // event listener 
    var searchButton = document.getElementById('submitBtn')
    searchButton.addEventListener('click', getLocation);

   






    





 





       

       

        



        

         


