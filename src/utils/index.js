export default {
    firstLetterUpper(str) {
        console.log('x', str);
        return str.toString().toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
    }
}