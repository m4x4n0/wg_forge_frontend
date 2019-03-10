// this is an example of improting data from JSON
import { getData } from './app/getData';
import { viewOrders } from './app/viewOrders';
import { makeUrlParams } from './app/makeUrlParams';

export default (function () {
    // Lets use a template engine

    getData().then(() => {
        viewOrders();

        // Add an event listener for url params changes
        window.addEventListener("hashchange", function locationHashChanged() {
            viewOrders();
        });

    });

}());
