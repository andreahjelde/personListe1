function registrerPerson(){

    const person = {
        navn: $("#navn").val(),
        alder: $("#alder").val(),
        adresse: $("#adresse").val()
    };

    $.post("http://localhost:8080/lagre", person, function(){
        hentAlle();
    });


    //Tømmer input-feltene
    $("#navn").val("");
    $("#alder").val("");
    $("#adresse").val("");


}


function hentAlle(){
    $.get("http://localhost:8080/hentAlle", function (personer){
        formaterData(personer);
    });
}

function formaterData(personer){
    let ut = "<table>" +
        "<tr>" +
        "<th>Navn</th>" +
        "<th>Alder</th>" +
        "<th>Adresse</th>" +
        "</tr>";

    for(const person of personer){
        ut +=
            "<tr>" +
            "<td>" + person.navn + "</td>>" +
            "<td>" + person.alder + "</td>" +
            "<td>" + person.adresse + "</td>" +
            "</tr>";
    }

    ut += "</table>";

    $("$utPersoner").html(ut);
}


function slettAlle(){
    $.get("http://localhost:8080/slettAlle", function(){
        hentAlle();
    });
}