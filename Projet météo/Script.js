function aux (nom){
    $ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + nom.trim() + "&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr",
        type: "GET",
        data:  getdata,
        success: function(data, textStatus, jqXhr) {
                 var result = data.GetTimeStringResult;
        }
    });
    alert(data);
}

$(document).ready(function(){
    $("#submit").click(function(){
        let value = $("#ville").val();
        aux(value);
    });
});


function retour(json){
    console.log(json);
}