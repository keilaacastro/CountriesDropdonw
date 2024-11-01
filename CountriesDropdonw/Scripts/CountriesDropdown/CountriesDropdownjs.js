$(document).ready(function () {
    let countries = [
        {name: "Brasil", code: "BR", flag: "https://flagcdn.com/w320/br.png"},
        {name: "Estados Unidos", code: "US", flag: "https://flagcdn.com/w320/us.png"},
        {name: "Canadá", code: "CA", flag: "https://flagcdn.com/w320/ca.png"},
    ];

    countries.forEach(function (country) {
        $('#countrySelect').append(
            `<option value="${country.code}" data-content="<img src='${country.flag}' class='flag-icon' /> ${country.name}">${country.name}</option>`
        );
    });

    $('#countrySelect').selectpicker({
        noneResultsText: 'Nenhum resultado encontrado para {0}'
    });

    $('#countrySelect').on('changed.bs.select', function () {
        let selectedCountryCode = $(this).val();

        $('#passportInput').val('').prop('disabled', false);
        $('#passportInput').removeClass('is-valid is-invalid');
        $('#passportInput').siblings('.valid-feedback, .invalid-feedback').hide();

        $('#passportInput').off('input').on('input', function () {
            let passportNumber = $(this).val().trim();

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
});