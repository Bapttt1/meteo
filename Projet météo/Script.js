

function displayData (data){   
    console.log($(".temps")) 
    $(".Temps").empty();
    $(".Température").empty();   
    $(".TempératureMin").empty();
    $(".TempératureMax").empty();
  
    $(".Temps").append( $(document.createElement("img")).css({"height": "50px"}).attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" ));
    $(".Température").append( Math.round(data.main.temp-273.15));
    $(".TempératureMin").append( Math.round(data.main.temp_min-273.15));
    $(".TempératureMax").append( Math.round(data.main.temp_max-273.15));
}


function sendRequest (nom){
    $.ajax({
        type:"GET",
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + nom + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8",
        success: function(data) {
            console.log(data.weather[0].main)
            displayData(data);
        },

        error : function(resultat, statut, erreur){
            console.log("erreur " + resultat.status + " " + erreur);
        }
    });
}


$(document).ready(function(){

    $("#submit").click(function(e){
        e.preventDefault();
        let value = $("#ville").val();
        sendRequest(value);
    });
});
