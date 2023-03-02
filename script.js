weatherAPIParis()


$("#london").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("LONDRES")
        $("#temperature").html(text)
        $("#day").html("Lundi")
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPILondre()
    }
)


$("#madrid").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("MADRID")
        $("#temperature").html(text)
        $("#day").html("Lundi")
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPIMadrid()
    }
)


$("#berlin").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("BERLIN")
        $("#temperature").html(text)
        $("#day").html("Lundi")
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPIBerlin()
    }
)

$("#paris").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("PARIS")
        $("#temperature").html(text)
        $("#day").html("Lundi")
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPIParis()
    }
)


$("#monday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("monday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("monday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("monday-visibility") + " m");
    $("#day").html("Lundi");
    $(".hover-style").removeClass("onFocus");
    $("#monday").addClass("onFocus");

})

$("#tuesday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("tuesday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("tuesday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("tuesday-visibility") + " m");
    $("#day").html("Mardi");
    $(".hover-style").removeClass("onFocus");
    $("#tuesday").addClass("onFocus");

})

$("#wednesday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("wednesday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("wednesday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("wednesday-visibility") + " m");
    $("#day").html("Mercredi");
    $(".hover-style").removeClass("onFocus");
    $("#wednesday").addClass("onFocus");

})

$("#thursday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("thursday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("thursday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("thursday-visibility") + " m");
    $("#day").html("Jeudi");
    $(".hover-style").removeClass("onFocus");
    $("#thursday").addClass("onFocus");

})

$("#friday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("friday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("friday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("friday-visibility") + " m");
    $()
    $("#day").html("Vendredi")
    $(".hover-style").removeClass("onFocus")
    $("#friday").addClass("onFocus")

})

$("#saturday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("saturday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("saturday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("saturday-visibility") + " m");
    $("#day").html("Samedi")
    $(".hover-style").removeClass("onFocus")
    $("#saturday").addClass("onFocus")

})

$("#sunday").click(function(){

    $("#temperature_2m").html(localStorage.getItem("sunday-temperature") + "°C");
    $("#windspeed_10m").html("Vitesse du vent : " + localStorage.getItem("sunday-windspeed") + " km/h");
    $("#visibility").html("Visibilité : " + localStorage.getItem("sunday-visibility") + " m");
    $("#day").html("Dimanche")
    $(".hover-style").removeClass("onFocus")
    $("#sunday").addClass("onFocus")

})


function weatherAPILondre(){
    
    const url ="https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);

        let data = JSON.parse(http.response);
        let hourly = data.hourly;


        localStorage.clear();

        //MONDAY 

        $("#monday-value").html(hourly.temperature_2m[12] + "°C");

        $("#temperature_2m").html(hourly.temperature_2m[12] + "°C");
        $("#windspeed_10m").html("Vitesse du vent : " + hourly.windspeed_10m[12] + " km/h");
        $("#visibility").html("visibilité : " + hourly.visibility[12] + " m");

        localStorage.setItem('monday-temperature', hourly.temperature_2m[12]);
        localStorage.setItem('monday-windspeed', hourly.windspeed_10m[12]);
        localStorage.setItem('monday-visibility', hourly.visibility[12]);



        //TUESDAY

        $("#tuesday-value").html(hourly.temperature_2m[36] + "°C");

        localStorage.setItem('tuesday-temperature', hourly.temperature_2m[36]);
        localStorage.setItem('tuesday-windspeed', hourly.windspeed_10m[36]);
        localStorage.setItem('tuesday-visibility', hourly.visibility[36]);

        //WEDNESDAY

        $("#wednesday-value").html(hourly.temperature_2m[60] + "°C");

        localStorage.setItem('wednesday-temperature', hourly.temperature_2m[60]);
        localStorage.setItem('wednesday-windspeed', hourly.windspeed_10m[60]);
        localStorage.setItem('wednesday-visibility', hourly.visibility[60]);
        //THURSDAY

        $("#thursday-value").html(hourly.temperature_2m[84] + "°C");

        localStorage.setItem('thursday-temperature', hourly.temperature_2m[84]);
        localStorage.setItem('thursday-windspeed', hourly.windspeed_10m[84]);
        localStorage.setItem('thursday-visibility', hourly.visibility[84]);

        //FRIDAY

        $("#friday-value").html(hourly.temperature_2m[106] + "°C");

        localStorage.setItem('friday-temperature', hourly.temperature_2m[106]);
        localStorage.setItem('friday-windspeed', hourly.windspeed_10m[106]);
        localStorage.setItem('friday-visibility', hourly.visibility[106]);

        //SATURDAY

        $("#saturday-value").html(hourly.temperature_2m[130] + "°C");

        localStorage.setItem('saturday-temperature', hourly.temperature_2m[130]);
        localStorage.setItem('saturday-windspeed', hourly.windspeed_10m[130]);
        localStorage.setItem('saturday-visibility', hourly.visibility[130]);

        //SUNDAY

        $("#sunday-value").html(hourly.temperature_2m[154] + "°C");

        localStorage.setItem('sunday-temperature', hourly.temperature_2m[154]);
        localStorage.setItem('sunday-windspeed', hourly.windspeed_10m[154]);
        localStorage.setItem('sunday-visibility', hourly.visibility[154]);
    }
    http.send()
}

function weatherAPIParis(){
    
    const url ="https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&hourly=temperature_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        //console.log(http.response);

        let data = JSON.parse(http.response);
        let hourly = data.hourly;

        localStorage.clear();

        //MONDAY 

        $("#monday-value").html(hourly.temperature_2m[12] + "°C");

        $("#temperature_2m").html(hourly.temperature_2m[12] + "°C");
        $("#windspeed_10m").html("Vitesse du vent : " + hourly.windspeed_10m[12] + " km/h");
        $("#visibility").html("visibilité : " + hourly.visibility[12] + " m");

        localStorage.setItem('monday-temperature', hourly.temperature_2m[12]);
        localStorage.setItem('monday-windspeed', hourly.windspeed_10m[12]);
        localStorage.setItem('monday-visibility', hourly.visibility[12]);



        //TUESDAY

        $("#tuesday-value").html(hourly.temperature_2m[36] + "°C");

        localStorage.setItem('tuesday-temperature', hourly.temperature_2m[36]);
        localStorage.setItem('tuesday-windspeed', hourly.windspeed_10m[36]);
        localStorage.setItem('tuesday-visibility', hourly.visibility[36]);

        //WEDNESDAY

        $("#wednesday-value").html(hourly.temperature_2m[60] + "°C");

        localStorage.setItem('wednesday-temperature', hourly.temperature_2m[60]);
        localStorage.setItem('wednesday-windspeed', hourly.windspeed_10m[60]);
        localStorage.setItem('wednesday-visibility', hourly.visibility[60]);
        //THURSDAY

        $("#thursday-value").html(hourly.temperature_2m[84] + "°C");

        localStorage.setItem('thursday-temperature', hourly.temperature_2m[84]);
        localStorage.setItem('thursday-windspeed', hourly.windspeed_10m[84]);
        localStorage.setItem('thursday-visibility', hourly.visibility[84]);

        //FRIDAY

        $("#friday-value").html(hourly.temperature_2m[106] + "°C");

        localStorage.setItem('friday-temperature', hourly.temperature_2m[106]);
        localStorage.setItem('friday-windspeed', hourly.windspeed_10m[106]);
        localStorage.setItem('friday-visibility', hourly.visibility[106]);

        //SATURDAY

        $("#saturday-value").html(hourly.temperature_2m[130] + "°C");

        localStorage.setItem('saturday-temperature', hourly.temperature_2m[130]);
        localStorage.setItem('saturday-windspeed', hourly.windspeed_10m[130]);
        localStorage.setItem('saturday-visibility', hourly.visibility[130]);

        //SUNDAY

        $("#sunday-value").html(hourly.temperature_2m[154] + "°C");

        localStorage.setItem('sunday-temperature', hourly.temperature_2m[154]);
        localStorage.setItem('sunday-windspeed', hourly.windspeed_10m[154]);
        localStorage.setItem('sunday-visibility', hourly.visibility[154]);
    }
    http.send()

}

function weatherAPIMadrid(){
    
    const url ="https://api.open-meteo.com/v1/forecast?latitude=40.42&longitude=-3.70&hourly=temperature_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);

        let data = JSON.parse(http.response);
        let hourly = data.hourly;


        localStorage.clear();

        //MONDAY 

        $("#monday-value").html(hourly.temperature_2m[12] + "°C");

        $("#temperature_2m").html(hourly.temperature_2m[12] + "°C");
        $("#windspeed_10m").html("Vitesse du vent : " + hourly.windspeed_10m[12] + " km/h");
        $("#visibility").html("visibilité : " + hourly.visibility[12] + " m");

        localStorage.setItem('monday-temperature', hourly.temperature_2m[12]);
        localStorage.setItem('monday-windspeed', hourly.windspeed_10m[12]);
        localStorage.setItem('monday-visibility', hourly.visibility[12]);



        //TUESDAY

        $("#tuesday-value").html(hourly.temperature_2m[36] + "°C");

        localStorage.setItem('tuesday-temperature', hourly.temperature_2m[36]);
        localStorage.setItem('tuesday-windspeed', hourly.windspeed_10m[36]);
        localStorage.setItem('tuesday-visibility', hourly.visibility[36]);

        //WEDNESDAY

        $("#wednesday-value").html(hourly.temperature_2m[60] + "°C");

        localStorage.setItem('wednesday-temperature', hourly.temperature_2m[60]);
        localStorage.setItem('wednesday-windspeed', hourly.windspeed_10m[60]);
        localStorage.setItem('wednesday-visibility', hourly.visibility[60]);
        //THURSDAY

        $("#thursday-value").html(hourly.temperature_2m[84] + "°C");

        localStorage.setItem('thursday-temperature', hourly.temperature_2m[84]);
        localStorage.setItem('thursday-windspeed', hourly.windspeed_10m[84]);
        localStorage.setItem('thursday-visibility', hourly.visibility[84]);

        //FRIDAY

        $("#friday-value").html(hourly.temperature_2m[106] + "°C");

        localStorage.setItem('friday-temperature', hourly.temperature_2m[106]);
        localStorage.setItem('friday-windspeed', hourly.windspeed_10m[106]);
        localStorage.setItem('friday-visibility', hourly.visibility[106]);

        //SATURDAY

        $("#saturday-value").html(hourly.temperature_2m[130] + "°C");

        localStorage.setItem('saturday-temperature', hourly.temperature_2m[130]);
        localStorage.setItem('saturday-windspeed', hourly.windspeed_10m[130]);
        localStorage.setItem('saturday-visibility', hourly.visibility[130]);

        //SUNDAY

        $("#sunday-value").html(hourly.temperature_2m[154] + "°C");

        localStorage.setItem('sunday-temperature', hourly.temperature_2m[154]);
        localStorage.setItem('sunday-windspeed', hourly.windspeed_10m[154]);
        localStorage.setItem('sunday-visibility', hourly.visibility[154]);
    }
    http.send()

    console.log("test" + data);
    return data;
}

function weatherAPIBerlin(){
    
    const url ="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);

        let data = JSON.parse(http.response);
        let hourly = data.hourly;


        localStorage.clear();

        //MONDAY 

        $("#monday-value").html(hourly.temperature_2m[12] + "°C");

        $("#temperature_2m").html(hourly.temperature_2m[12] + "°C");
        $("#windspeed_10m").html("Vitesse du vent : " + hourly.windspeed_10m[12] + " km/h");
        $("#visibility").html("visibilité : " + hourly.visibility[12] + " m");

        localStorage.setItem('monday-temperature', hourly.temperature_2m[12]);
        localStorage.setItem('monday-windspeed', hourly.windspeed_10m[12]);
        localStorage.setItem('monday-visibility', hourly.visibility[12]);



        //TUESDAY

        $("#tuesday-value").html(hourly.temperature_2m[36] + "°C");

        localStorage.setItem('tuesday-temperature', hourly.temperature_2m[36]);
        localStorage.setItem('tuesday-windspeed', hourly.windspeed_10m[36]);
        localStorage.setItem('tuesday-visibility', hourly.visibility[36]);

        //WEDNESDAY

        $("#wednesday-value").html(hourly.temperature_2m[60] + "°C");

        localStorage.setItem('wednesday-temperature', hourly.temperature_2m[60]);
        localStorage.setItem('wednesday-windspeed', hourly.windspeed_10m[60]);
        localStorage.setItem('wednesday-visibility', hourly.visibility[60]);
        //THURSDAY

        $("#thursday-value").html(hourly.temperature_2m[84] + "°C");

        localStorage.setItem('thursday-temperature', hourly.temperature_2m[84]);
        localStorage.setItem('thursday-windspeed', hourly.windspeed_10m[84]);
        localStorage.setItem('thursday-visibility', hourly.visibility[84]);

        //FRIDAY

        $("#friday-value").html(hourly.temperature_2m[106] + "°C");

        localStorage.setItem('friday-temperature', hourly.temperature_2m[106]);
        localStorage.setItem('friday-windspeed', hourly.windspeed_10m[106]);
        localStorage.setItem('friday-visibility', hourly.visibility[106]);

        //SATURDAY

        $("#saturday-value").html(hourly.temperature_2m[130] + "°C");

        localStorage.setItem('saturday-temperature', hourly.temperature_2m[130]);
        localStorage.setItem('saturday-windspeed', hourly.windspeed_10m[130]);
        localStorage.setItem('saturday-visibility', hourly.visibility[130]);

        //SUNDAY

        $("#sunday-value").html(hourly.temperature_2m[154] + "°C");

        localStorage.setItem('sunday-temperature', hourly.temperature_2m[154]);
        localStorage.setItem('sunday-windspeed', hourly.windspeed_10m[154]);
        localStorage.setItem('sunday-visibility', hourly.visibility[154]);
    }
    http.send()

}
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("./sw.js");
}

// Code to handle install prompt on desktop
// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = 'block';

	addBtn.addEventListener('click', () => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
	});
});
