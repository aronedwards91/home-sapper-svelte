export default {
    firstLetterUpper(str) {
        return str.toString().toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
    }
}