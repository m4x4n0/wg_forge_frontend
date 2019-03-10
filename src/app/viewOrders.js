import { getOrders } from "./getOrders";
import { getUrlParams } from "./getUrlParams";
import { makeUrlParams } from "./makeUrlParams";
import { sortOrders } from "./sortOrders";

export function viewOrders() {
    let orders = [];
    let tpl = require('../templates/app.html');
    let styles = require('../sass/app.sass');
    let currencySymbol = "$";
    let container = document.getElementById("app");
    let urlSearchParams = getUrlParams();
    let sortMode = urlSearchParams.get('sort');
    let reversedSorting = urlSearchParams.get('reversed');

    orders = getOrders();
    orders = sortOrders(orders, sortMode, reversedSorting === 'yes' ? true : false);

    container.innerHTML = tpl.render({ 
        styles: styles,
        orders: orders,
        currencySymbol: currencySymbol,
        getUrlParams: getUrlParams,
        makeUrlParams: makeUrlParams,
        sortMode: sortMode,
        reversedSorting: 'no',
        isSortingReversed: reversedSorting === 'yes' ? true : false

    });

    // Hide or unhide an user detailed information
    container.querySelectorAll('a.page_orders__user_details__link').forEach((link, index, array) => {
        link.onclick = (e) => {
            let userId = link.dataset.user_id;

            if (userId) {
                let userInfo = container.querySelector(`div.page_orders__user_details[id='${userId}']`);
                link.classList.toggle("active");
                userInfo.classList.toggle("active");
            }
            return false;
        }
    });

}