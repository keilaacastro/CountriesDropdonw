$(document).ready(function () {
    const countries = [
        {name: "Brasil", code: "BR", flag: "https://flagcdn.com/w320/br.png"},
        {name: "Estados Unidos", code: "US", flag: "https://flagcdn.com/w320/us.png"},
        {name: "Canadá", code: "CA", flag: "https://flagcdn.com/w320/ca.png"},

    ];

    countries.forEach(function (country) {
        $('#countrySelect').append(
            `<option data-content="<img src='${country.flag}' class='flag-icon' /> ${country.name}">${country.name}</option>`
        );
    });


    $('#countrySelect').selectpicker({
        noneResultsText: 'Nenhum resultado encontrado para {0}'
    });

});