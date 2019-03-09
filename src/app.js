// this is an example of improting data from JSON
import { getData } from './app/getData';
import { renderTable } from './app/views';

export default (function () {
    // Lets use a template engine

    getData().then(() => {
        renderTable();
    });


}());
