    

const input = document.querySelector("#inputEl");
    async function fetchApi(cityName){
      try{

const apiKey="bab90a721db4e0ccfdb26535d22093ea";
// const cityName=input.value;

const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);

if(!response.ok){
throw new Error("could not retrieve resource");



}
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind");


const data = await response.json();
console.log(data);
const weather_image = document.querySelector(".weather-icon");
if(data.weather[0].main=="Clouds"){

  weather_image.src = "clouds.png"
}
else if(data.weather[0].main=="Clear"){

  weather_image.src = "clear.png"
}else if(data.weather[0].main=="Rain"){

  weather_image.src = "rain.png";
}
else if(data.weather[0].main=="Drizzle"){

  weather_image.src = "drizzle.png"
}else if(data.weather[0].main=="Mist"){

  weather_image.src = "mist.png"
}
city.textContent=data.name;
temperature.textContent= data.main.temp+' °C';
humidity.textContent = data.main.humidity;
wind_speed.textContent = data.wind.speed+' km/h';



                    }





      catch(error){
console.error(error);

                    }
            
    }
    const btn = document.querySelector(".img-container");

    btn.addEventListener("click",()=>{
      var name =input.value;

      fetchApi(name)
      ;
    })
