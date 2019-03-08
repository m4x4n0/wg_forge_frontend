// this is an example of improting data from JSON
import orders from '../data/orders.json';

export default (function () {
    // Lets use a template engine
    var tpl = require('./templates/app.html');
    var content = tpl.render({ message: 'Foo that!' });

    // console.log(html);

    // document.getElementById("app").innerHTML = html;
    // var content = nunjucks.render('app.html', { username: 'James' });
    // var tpl = require('./templates/app.html');
    // var content = nunjucks.renderString(tpl, { username: 'James' });
    // var content = "2222";

    document.getElementById("app").innerHTML = content;
}());
