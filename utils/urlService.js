
exports.generateShortLink = (length) => {
    let result = '';
    let ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetLength = alphabet.length;
    for (let i = 0; i < length; i++) {
        result += ALPHABET.charAt(Math.floor(Math.random() * alphabetLength));
    }
    return result;
}