var moment = require("moment");

module.exports = function(env){

    env.addFilter('format', function(input, format) {
        return moment.unix(input).format(format);
    }, false);

    env.addFilter('shieldCard', function(cardNumber) {
        let cardLength = cardNumber.length;
        return cardNumber.slice(0, 2) + "*".repeat(cardLength - 4) + cardNumber.slice(-4);
    }, false);

}
