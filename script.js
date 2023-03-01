$("#london").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("LONDRE")
        $("#temperature").html(text)
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPILondre()
    }
)


$("#madrid").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("MADRID")
        $("#temperature").html(text)
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPIMadrid()
    }
)


$("#berlin").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("BERLIN")
        $("#temperature").html(text)
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPIBerlin()
    }
)

$("#paris").click(function(){
    let text = $('#monday-value').text();
        $("#city-name").html("PARIS")
        $("#temperature").html(text)
        $(".hover-style").removeClass("onFocus")
        $("#monday").addClass("onFocus")
        weatherAPIParis()
    }
)


$("#monday").click(function(){
    let text = $('#monday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#monday").addClass("onFocus")

})

$("#tuesday").click(function(){
    let text = $('#tuesday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#tuesday").addClass("onFocus")

})

$("#wednesday").click(function(){
    let text = $('#wednesday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#wednesday").addClass("onFocus")

})

$("#thursday").click(function(){
    let text = $('#thursday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#thursday").addClass("onFocus")

})

$("#friday").click(function(){
    let text = $('#friday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#friday").addClass("onFocus")

})

$("#saturday").click(function(){
    let text = $('#saturday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#saturday").addClass("onFocus")

})

$("#sunday").click(function(){
    let text = $('#sunday-value').text();

    $("#temperature").html(text)
    $(".hover-style").removeClass("onFocus")
    $("#sunday").addClass("onFocus")

})

$(".hover-style").click(function(){
    
})



function weatherAPILondre(){
    
    const url ="https://api.open-meteo.com/v1/meteofrance?latitude=51.51&longitude=-0.13&hourly=temperature_2m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);

        let data = JSON.parse(http.response);
    }
    http.send()
}

function weatherAPIParis(){
    
    const url ="https://api.open-meteo.com/v1/meteofrance?latitude=48.85&longitude=2.35&hourly=temperature_2m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);

        let data = JSON.parse(http.response);

        console.log(data);
    }
    http.send()

}

function weatherAPIMadrid(){
    
    const url ="https://api.open-meteo.com/v1/meteofrance?latitude=40.42&longitude=-3.70&hourly=temperature_2m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);

        let data = http.response;

        return data;
    }
    http.send()

    console.log("test" + data);
    return data;
}

function weatherAPIBerlin(){
    
    const url ="https://api.open-meteo.com/v1/meteofrance?latitude=52.52&longitude=13.41&hourly=temperature_2m"

    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function(){
        console.log(http.status);
        console.log(http.response);
    }
    http.send()

}