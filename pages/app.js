var url = "http://api.openweathermap.org/data/2.5/weather?q=city name"
console.log(url);
function updatecity() {
	var field = document.getElementById("fieldText").value;
	url = "http://api.openweathermap.org/data/2.5/weather?q=" + field + "&units=metric" + "&APPID=fa329299611a1feb030c7c73ebf103f9";
	console.log(url);
	$.getJSON(url, function(data){
		$(".result div").empty();
		$(".container").removeClass("container-night").addClass("container-day");
		$(".location").append("<h1>" + data.name + ", " + data.sys.country +"</h1>");
		$(".temperature").append("<h1>" + data.main.temp + " " +" &#8451;" + "</h1>");
		$(".situation").append("<p>" + data.weather[0].main + "</p>")
		$(".max-temp").append("<p>" +"&#8593; " + data.main.temp_max + " " + "&#8451;" + "</p>"+ "  "+ "<p>" +" &#8595;" +" " + data.main.temp_min + " " + "&#8451;"+"</p>");
		if (data.weather[0].icon === "01d") {
			$(".wCondition").attr("src", "images/sunny.svg");
		}
		else if (data.weather[0].icon === "01n") {
			console.log(data.weather[0].icon);
			$(".wCondition").attr("src", "images/moon.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "02d") {
			$(".wCondition").attr("src", "images/fewclouds.svg");
		}
		else if (data.weather[0].icon === "02n" ) {
			$(".wCondition").attr("src", "images/cloudy-night.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "03d") {
			$(".wCondition").attr("src", "images/clouds.svg");
		}
		else if (data.weather[0].icon === "03n") {
			$(".wCondition").attr("src", "images/clouds.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "04d") {
			$(".wCondition").attr("src", "images/clouds.svg");
		}
		else if (data.weather[0].icon === "04n") {
			$(".wCondition").attr("src", "images/clouds.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "09d") {
			$(".wCondition").attr("src", "images/raining.svg");
		}
		else if (data.weather[0].icon === "09n") {
			$(".wCondition").attr("src", "images/raining.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "10d") {
			$(".wCondition").attr("src", "images/summer-rain.svg");
		}
		else if (data.weather[0].icon === "10n") {
			$(".wCondition").attr("src", "images/night-rain.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "11d") {
			$(".wCondition").attr("src", "images/bolt.svg");
		}
		else if (data.weather[0].icon === "11n") {
			$(".wCondition").attr("src", "images/bolt.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "13d") {
			$(".wCondition").attr("src", "images/snowing-1.svg");
		}
		else if (data.weather[0].icon === "13n") {
			$(".wCondition").attr("src", "images/night-snow.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
		else if (data.weather[0].icon === "50d") {
			$(".wCondition").attr("src", "images/fog.svg");
		}
		else if (data.weather[0].icon === "50n") {
			$(".wCondition").attr("src", "images/fog.svg");
			$(".container").removeClass("container-day").addClass("container-night");
		}
	});
}

