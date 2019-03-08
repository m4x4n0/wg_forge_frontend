// this is an example of improting data from JSON

export default (function () {
    // Lets use a template engine
    var tpl = require('./templates/app.html');
    var styles = require('./sass/app.sass');
    var content = tpl.render({ styles: styles });

    document.getElementById("app").innerHTML = content;
}());
