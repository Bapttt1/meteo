function sendRequest (nom){
    $.ajax({
        type:"GET",
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + nom + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8",
        success: function(data) {
            //console.log(data)
            displayData(data);
        },

        error : function(resultat, statut, erreur){
            console.log("erreur " + resultat.status + " " + erreur);
        }
    });
}

function displayData (data){
    $(".temps").append(data.weather[0].main);
}

$(document).ready(function(){

    $("#submit").click(function(e){
        e.preventDefault();
        let value = $("#ville").val();
        sendRequest(value);
    });
});
