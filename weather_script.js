const apiKey = "a31cf403b5e93166d5e143300b27faae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kolkata";


const searchBox=document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weathericon");


/* const apiKey = "06234cd8b3022632c78ed2be3ca96fc4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=London";*/
async function checkWeather(city){
/*const response = await fetch(apiUrl + '&appid=${apiKey}');*/
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?appid=a31cf403b5e93166d5e143300b27faae&units=metric&q=' + city);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML   = data.name;
    document.querySelector(".temp").innerHTML   = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML   = data.main.humidity +'%';
    document.querySelector(".wind").innerHTML   = data.wind.speed + 'kmph';

    if(data.weather[0].main == 'Mist'){
        weather_icon.src='https://cdn3.iconfinder.com/data/icons/weather-ios-11-1/50/Partly_Cloudy_Cloudy_Sun_Cloud_Nebulosity_Apple_Weather-1024.png';
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src='https://cdn3.iconfinder.com/data/icons/weather-ios-11-1/50/Sunny_Clear_Sun_Sunlight_Apple_Weather-512.png';
    }
    else if(data.weather[0].main == "Clouds"){
        weather_icon.src='https://cdn2.iconfinder.com/data/icons/weather-24/256/Cloud_Cover-512.png';/*https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png*/
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src='https://whatemoji.org/wp-content/uploads/2020/07/Cloud-With-Rain-Emoji-1024x1024.png';
    }
    else if(data.weather[0].main == "Drizzle"){
        /*weather_icon.src='';*/
        weather_icon.src='https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png';
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weather_icon.src='https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-10.jpg';
    }
    else if(data.weather[0].main == "Haze"){
        weather_icon.src='https://files.softicons.com/download/web-icons/android-weather-icons-by-bharath-prabhuswamy/png/512x512/Haze.png';
    }
    else if(data.weather[0].main == "Snow"){
        weather_icon.src='snow.png';
    }
}
    searchBtn.addEventListener("click", () =>{
        checkWeather(searchBox.value);
    });


