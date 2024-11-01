/**
 * Reference:
 * https://en.wikipedia.org/ -- Wikipedia
 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
 * https://countrycode.org/ -- Country Codes
 */

(function () {
    function assertString (input) {
        const isString = typeof input === 'string' || input instanceof String;
        if (!isString) {
            throw new TypeError('Expected a string');
        }
    }

    const allowedCountries = {
        "AM": {// Armênia
            "code": "AM", 
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\\d{7}$/
        },
        "AR": {// Argentina
            "code": "AR",
            "reValid": /^[A-Z]{3}\d{6}$/,
            "mask": /^[A-Z]{3}\d{6}$/
        },
        "AT": {// Áustria
            "code": "AT", 
            "reValid": /^[A-Z]\d{7}$/,
            "mask": /^[A-Z]\\d{7}$/
        },
        "AU": { // Austrália
            "code": "AU",
            "reValid": /^[A-Z]\d{7}$/,
            "mask": /^[A-Z]\d{7}$/
        },
        "AZ": { //Azerbaijão
            "code": "AZ",
            "reValid": /^[A-Z]{1}\d{8}$/,
            "mask": /^[A-Z]{1}\d{8}$/
        },
        "BE": { // Bélgica
            "code": "BE",
            "reValid": /^[A-Z]{2}\d{6}$/,
            "mask": /^[A-Z]{2}\d{6}$/
        },
        "BG": { // Bulgária
            "code": "BG",
            "reValid": /^\d{9}$/,
            "mask": /^\d{9}$/
        },
        "BR": { // Brasil
            "code": "BR",
            "reValid": /^[A-Z]{2}\d{6}$/,
            "mask": /^[A-Z]{2}\d{6}$/
        },
        "BY": { //Bielorrússia 
            "code": "BY",
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\d{7}$/
        },
        "CA": {// Canadá
            "code": "CA",
            "reValid": /^[A-Z]{2}\d{6}$/,
            "mask": /^[A-Z]{2}\d{6}$/
        },
        "CH": {// Suíça
            "code": "CH",
            "reValid": /^[A-Z]\d{7}$/,
            "mask": /^[A-Z]\\d{7}$/
        },
        "CN": { // China
            "code": "CN",
            "reValid": /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
            "mask": /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/
        },
        "CY": { // Chipre
            "code": "CY",
            "reValid": /^[A-Z](\d{6}|\d{8})$/,
            "mask": /^[A-Z](\d{6}|\d{8})$/
        },
        "CZ": { // República Checa
            "code": "CZ",
            "reValid": /^\d{8}$/,
            "mask": /^\d{8}$/
        },
        "DE": { // Alemanha
            "code": "DE",
            "reValid": /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
            "mask": /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/
        },
        "DK": { // Dinamarca
            "code": "DK",
            "reValid": /^\d{9}$/,
            "mask": /^\d{9}$/
        },
        "DZ": { // Argélia
            "code": "DZ",
            "reValid": /^\d{9}$/,
            "mask": /^\\d{9}$/
        },
        "EE": { // Estônia
            "code": "EE",
            "reValid": /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
            "mask": /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/
        },
        "ES": { // Espanha
            "code": "ES",
            "reValid": /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
            "mask": /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/
        },
        "FI": { // Finlândia
            "code": "FI",
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\d{7}$/
        },
        "FR": { // França
            "code": "FR",
            "reValid": /^\d{2}[A-Z]{2}\d{5}$/,
            "mask": /^\d{2}[A-Z]{2}\d{5}$/
        },
        "GB": { // Reino Unido
            "code": "GB",
            "reValid": "/^\d{9}$/",
            "mask": /^\d{9}$/
        },
        "GR": { // Grécia
            "code": "GR",
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\d{7}$/
        },
        "HR": { // Croácia
            "code": "HR",
            "reValid": /^\d{9}$/,
            "mask": /^\d{9}$/
        },
        "HU": { // Hungria
            "code": "HU",
            "reValid": /^[A-Z]{2}(\d{6}|\d{7})$/,
            "mask": /^[A-Z]{2}(\d{6}|\d{7})$/
        },
        "IE": { // Irlanda
            "code": "IE",
            "reValid": /^[A-Z0-9]{2}\d{7}$/,
            "mask": /^[A-Z0-9]{2}\d{7}$/
        },
        "IN": { // Índia
            "code": "IN",
            "reValid": /^[A-Z]{1}-?\d{7}$/,
            "mask": /^[A-Z]{1}-?\d{7}$/
        },
        "ID": { // Indonésia
            "code": "ID",
            "reValid": /^[A-C]\d{7}$/,
            "mask": /^[A-C]\d{7}$/
        },
        "IR": { // Iran
            "code": "IR",
            "reValid": /^[A-Z]\d{8}$/,
            "mask": /^[A-Z]\d{8}$/
        },
        "IS": {  // Islândia
            "code": "IS",
            "reValid": /^(A)\d{7}$/,
            "mask": /^(A)\d{7}$/
        },
        "IT": { // Itália
            "code": "IT",
            "reValid":/^[A-Z0-9]{2}\d{7}$/,
            "mask": /^[A-Z0-9]{2}\d{7}$/
        },
        "JM": { // Jamaica
            "code": "JM",
            "reValid": /^[Aa]\d{7}$/,
            "mask": /^[Aa]\d{7}$/
        },
        "JP": { // Japão
            "code": "JP",
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\d{7}$/
        },
        "KR": { // Coreia do Sul
            "code": "KR",
            "reValid": /^[MS]\d{8}$/,
            "mask": /^[MS]\d{8}$/
        },
        "KZ": { // Cazaquistão
            "code": "KZ",
            "reValid": /^[a-zA-Z]\d{7}$/,
            "mask": /^[a-zA-Z]\d{7}$/
        },
        "LI": { // Liechtenstein
            "code": "LI",
            "reValid": /^[a-zA-Z]\d{5}$/,
            "mask": /^[a-zA-Z]\d{5}$/
        },
        "LT": { // Lituânia
            "code": "LT",
            "reValid": /^[A-Z0-9]{8}$/,
            "mask": /^[A-Z0-9]{8}$/
        },
        "LU": { // Luxemburgo
            "code": "LU",
            "reValid": /^[A-Z0-9]{8}$/,
            "mask": /^[A-Z0-9]{8}$/
        },
        "LV": { // Letônia
            "code": "LV",
            "reValid": /^[A-Z0-9]{2}\d{7}$/,
            "mask": /^[A-Z0-9]{2}\d{7}$/
        },
        "LY": { // Líbia
            "code": "LY",
            "reValid": /^[A-Z0-9]{8}$/,
            "mask": /^[A-Z0-9]{8}$/
        },
        "MT": { // Malta
            "code": "MT",
            "reValid": /^\d{7}$/,
            "mask": /^\d{7}$/
        },
        "MZ": { // Moçambique
            "code": "MZ",
            "reValid": /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
            "mask": /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/
        },
        "MY": { // Malásia
            "code": "MY",
            "reValid": /^[AHK]\d{8}$/,
            "mask": /^[AHK]\\d{8}$/
        },
        "MX": { // México
            "code": "MX",
            "reValid": /^\d{10,11}$/,
            "mask": /^\d{10,11}$/
        },
        "NL": { // Países Baixos
            "code": "NL",
            "reValid": /^[A-Z]{2}[A-Z0-9]{6}\d$/,
            "mask": /^[A-Z]{2}[A-Z0-9]{6}\d$/
        },
        "NZ": { // Nova Zelândia
            "code": "NZ",
            "reValid": /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
            "mask": /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/
        },
        "PH": { // Filipinas
            "code": "PH",
            "reValid": /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
            "mask": /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/
        },
        "PK": { // Paquistão
            "code": "PK",
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\d{7}$/
        },
        "PL": { // Polônia
            "code": "PL",
            "reValid": /^[A-Z]{2}\d{7}$/,
            "mask": /^[A-Z]{2}\d{7}$/
        },
        "PT": { // Portugal
            "code": "PT",
            "reValid": /^[A-Z]\d{6}$/,
            "mask": /^[A-Z]\d{6}$/
        },
        "RO": { // Romênia
            "code": "RO",
            "reValid": /^\d{8,9}$/,
            "mask": /^\d{8,9}$/
        },
        "RU": { // Rússia
            "code": "RU",
            "reValid": /^\d{9}$/,
            "mask": /^\d{9}$/
        },
        "SE": { // Suécia
            "code": "SE",
            "reValid": /^\d{8}$/,
            "mask": /^\d{8}$/
        },
        "SL": { // Slovênia
            "code": "SL",
            "reValid": /^(P)[A-Z]\d{7}$/,
            "mask": /^(P)[A-Z]\d{7}$/
        },
        "SK": { // Eslováquia
            "code": "SK",
            "reValid": /^[0-9A-Z]\d{7}$/,
            "mask": /^[0-9A-Z]\d{7}$/
        },
        "TH": { // Thailândia
            "code": "TH",
            "reValid": /^[A-Z]{1,2}\d{6,7}$/,
            "mask": /^[A-Z]{1,2}\d{6,7}$/
        },
        "TR": { // Turquia
            "code": "TR",
            "reValid": /^[A-Z]\d{8}$/,
            "mask": /^[A-Z]\d{8}$/
        },
        "UA": { // Ucrânia
            "code": "UA",
            "reValid": /^[A-Z]{2}\d{6}$/,
            "mask": /^[A-Z]{2}\d{6}$/
        },
        "US": { // Estados Unidos
            "code": "US",
            "reValid":/^\d{9}$/,
            "mask": /^\d{9}$/
        },
        "ZA": { // África do Sul
            "code": "ZA",
            "reValid": /^[TAMD]\d{8}$/,
            "mask": /^[TAMD]\d{8}$/
        }
    }


/*export const locales = Object.keys(passportRegexByCountryCode);*/

/**
 * Check if str is a valid passport number
 * relative to provided ISO Country Code.
 *
 * @param {string} str
 * @param {string} countryCode
 * @return {boolean}
 */
    window.isPassportNumber = function (str, countryCode) {
        assertString(str);
        const normalizedStr = str.replace(/\s/g, '').toUpperCase();
        const country = allowedCountries[countryCode.toUpperCase()];

        if (!country) {
            return false; 
        }

        return country.reValid.test(normalizedStr);
    };

})();
