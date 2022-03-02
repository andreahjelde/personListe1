
function registrerPerson(){
    const person = {
        navn: $("#navn").val(),
        alder: $("#alder").val(),
        adresse: $("#adresse").val()
    };

    $.post("/lagre", person, function(){
        hentAlle();
    });

    //Tømmer input-feltene
    $("#navn").val("");
    $("#alder").val("");
    $("#adresse").val("");
}

function hentAlle(){
    $.get("/hentAlle", function (personer){
        formaterData(personer);
    });
}

function formaterData(personer){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th>" +
        "<th>Alder</th>" +
        "<th>Adresse</th>" +
        "</tr>";

    for(const person of personer){
        ut +=
            "<tr>" +
            "<td>" + person.navn + "</td>" +
            "<td>" + person.alder + "</td>" +
            "<td>" + person.adresse + "</td>" +
            "</tr>";
    }

    ut += "</table>";

    $("#utPersoner").html(ut);
}

function slettAlle(){
    $.get("/slettAlle", function(){
        hentAlle();
    });

}