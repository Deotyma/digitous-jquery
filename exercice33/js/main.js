$(document).ready(function() {
    $(".btn").click(function() {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, statuts, response) {
                $("#country").text(data[0].name);
                $("#capital").text(data[0].capital);
            }
        });
    });
});