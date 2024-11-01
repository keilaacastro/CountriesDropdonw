$(document).ready(function () {

    const allowedCountries = {
        "DE": "Alemanha",
        "AM": "Armênia",
        "AR": "Argentina",
        "AT": "Áustria", 
        "AU": "Austrália",
        "AZ": "Azerbaijão",
        "BH": "Bahrein",
        "BE": "Bélgica",
        "BY": "Bielorrússia",
        "BR": "Brasil",  
        "BG": "Bulgária",
        "CA": "Canadá",
        "CN": "China",
        "CY": "Chipre",
        "VA": "Cidade do Vaticano",
        "KS": "Cazaquistão",
        "CL": "Chile",
        "CR": "Costa Rica",
        "CZ": "República Checa",
        "DK": "Dinamarca",
        "DZ": "Argélia",
        "EE": "Estônia",
        "FI": "Finlândia",
        "FR": "França",
        "GR": "Grécia",
        "HR": "Croácia",
        "HU": "Hungria",
        "ID": "Indonésia",
        "IR": "Iran",
        "IE": "Irlanda",
        "IN": "Índia",
        "IS": "Islândia",
        "IT": "Itália",
        "JM": "Jamaica",
        "JP": "Japão",
        "KR": "Coreia do Sul",
        "KZ": "Cazaquistão",
        "LV": "Letônia",
        "LI": "Liechtenstein",
        "LT": "Lituânia",
        "LU": "Luxemburgo",
        "LY": "Líbia",
        "MT": "Malta",
        "MZ": "Moçambique",
        "MX": "México",
        "MY": "Malásia",
        "NO": "Noruega",
        "NZ": "Nova Zelândia",
        "NL": "Países Baixos",
        "PK": "Paquistão",
        "PL": "Polônia",
        "PH": "Filipinas",
        "PT": "Portugal",
        "RO": "Romênia",
        "RU": "Rússia",
        "SL": "Slovênia",
        "SK": "Eslováquia",
        "TH": "Thailândia",
        "ES": "Espanha",
        "SE": "Suécia",
        "CH": "Suíça",
        "TR": "Turquia",
        "UA": "Ucrânia",
        "GB": "Reino Unido",
        "US": "Estados Unidos",
        "ZA": "África do Sul"
    };

    $.each(allowedCountries, function (code, name) {
        $('#countrySelect').append(
            $('<option>', {
                value: code,
                text: name,
                'data-content': `<span class="flag-icon flag-icon-${code.toLowerCase()}"></span> ${name}`
            })
        );
    });

    const sortedCountries = Object.keys(allowedCountries).sort((a, b) => {
        return allowedCountries[a].localeCompare(allowedCountries[b]);
    });


    sortedCountries.forEach(function (code) {
        $('#countrySelect').append(
            $('<option>', {value: code, text: allowedCountries[code], selected: code === "BR"})
        );
    });

    $('#countrySelect').selectpicker({
        liveSearch: true,
        noneResultsText: 'Nenhum resultado encontrado para {0}'
    }).selectpicker('render');

    $('#passportInput').prop('disabled', false).trigger('input');

    $('#countrySelect').on('changed.bs.select', function () {
        $('#passportInput').val('').removeClass('is-valid is-invalid');
        $('#passportInput').siblings('.valid-feedback, .invalid-feedback').hide();
    });

    $('#passportInput').off('input').on('input', function () {
        const selectedCountryCode = $('#countrySelect').val();
        const passportNumber = $(this).val().trim();

        if (window.isPassportNumber(passportNumber, selectedCountryCode)) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            $(this).siblings('.invalid-feedback').hide();
            $(this).siblings('.valid-feedback').show();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            $(this).siblings('.invalid-feedback').show();
            $(this).siblings('.valid-feedback').hide();
        }
    });
});
