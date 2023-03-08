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
let city_name = document.getElementById('city_name');
let searchweather = document.getElementById('searchweather');
searchweather.addEventListener('click',function(){
	let cityName = document.getElementById('city_name').value;
	if(cityName =="")
		alert('Please Enter a City Name');
	else{
		weather.fetchWeather(cityName)
	}
})
city_name.addEventListener('keyup',function(event){
	let cityName = document.getElementById('city_name').value;
	if(event.key=="Enter"){
		if(cityName =="")
			alert('Please Enter a City Name');
		else
			weather.fetchWeather(cityName)
	}
})

if (window.addEventListener) {
	window.addEventListener("load", theFooter);
  } else if (window.attachEvent) {
	window.attachEvent("onload", theFooter);
  }
  
  function theFooter() {
	var div = document.createElement("div");
	// div.className = "footer";
	div.style.background = "black";
	div.style.padding = "10px";
	div.style.margin = "0px";
	// div.style.width = "100vw";
	div.style.right= "0px";
	div.style.bottom = "0px";
	div.style.left = "0px";
	div.style.overflow = "hidden";
	div.style.position = "absolute";
	div.style.textAlign = "center";
	div.style.color = "LightGrey";
	div.innerHTML =
	  "Copyright &copy; Bhavey Munjal" ;
	document.body.appendChild(div);
  }
