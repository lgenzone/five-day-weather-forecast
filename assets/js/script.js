
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
            //console.log(data);
            //return data; 
            console.log(data);
            
        }

    function getLocation() {
        var searchInput = $('#cityname').val().trim();
        console.log(searchInput);
        getCity(searchInput);
    }

    function getWeather() {}

    


    
    // event listener 

     //  var searchButton = document.getElementById('submitBtn');
     //  console.log(searchButton)
     //  searchButton.click(function(){
     //   console.log('button was clicked')
    //    getCity();       });

    var searchButton = document.getElementById('submitBtn')
    searchButton.addEventListener('click', getLocation);
    

       

       

        



        

         


