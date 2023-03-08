let weather = {
	'apikey':'7c2bae92cf2d9eabfcfa57b500ba48a8',
	fetchWeather: function(city){
		fetch('https://api.openweathermap.org/data/2.5/weather?q='
		 + city + 
		 '&units=metric&APPID=7c2bae92cf2d9eabfcfa57b500ba48a8')
		.then(response => response.json())
		.then(data => this.displayWeather(data))
		.catch(err => this.displayError(err));
	},
	displayWeather:function(data){
		const{name} = data;
		const{country} = data.sys;
		const{icon,description} = data.weather[0];
		const{temp,humidity} = data.main;
		const{speed} = data.wind;
		// const{message} = data;
		
		let words = description.split(" ");

		for (let i = 0; i < words.length; i++) {
   			 words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}
		words = words.join(' ')
		document.getElementById('city').innerText = `Weather in ${name}, ${country}`
		document.getElementById('photo').src = 'https://openweathermap.org/img/wn/' + icon +'.png'
		document.getElementById('description').innerText = `${words}`
		document.getElementById('windspeed').innerText = `Wind Speed is ${speed}meter/sec`
		document.getElementById('humidity').innerText = `Humidity is ${humidity}%`
		document.getElementById('temp').innerText = `Temperature: ${temp}°C`
		
		document.querySelector('.weather').style.display="flex"
		document.getElementById('notfound').style.display="none"
		// console.log(name,icon,description,temp,humidity,speed)
	},
	displayError:function(err){
		document.getElementById('notfound').style.display="block"
		document.querySelector('.weather').style.display="none"
	}
}
let city_name = document.getElementById('city_name').value;
let searchweather = document.getElementById('searchweather');
searchweather.addEventListener('click',function(){
	city_name = document.getElementById('city_name').value;
	if(city_name =="")
		alert('Please Enter a City Name');
	else{
		weather.fetchWeather(city_name)
	}
})
