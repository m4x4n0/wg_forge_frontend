import { getOrders } from "./getOrders";
import { getUrlParams } from "./getUrlParams";
import { makeUrlParams } from "./makeUrlParams";
import { sortOrders } from "./sortOrders";
import { filterOrders } from "./filterOrders";
import { statisticOrdersTotal } from "./statisticOrdersTotal";
import { statisticOrdersMedian } from "./statisticOrdersMedian";
import { statisticOrdersAverageCheck } from "./statisticOrdersAverageCheck";
import { statisticOrdersAverageCheckByGender } from "./statisticOrdersAverageCheckByGender";
import { getRates } from "./getRates";
import { getPrice } from "./getPrice";

export function viewOrders() {
    let orders, rates;
    let tpl = require('../templates/app.html');
    let styles = require('../sass/app.sass');
    let currencySymbol = "$";
    let container = document.getElementById("app");
    let urlSearchParams = getUrlParams();
    let sortMode = urlSearchParams.get('sort');
    let reversedSorting = urlSearchParams.get('reversed');
    let searchString = urlSearchParams.get('search');
    let currentRate = urlSearchParams.get('rate') || "USD";
    searchString = searchString ? searchString : "";

    orders = getOrders();
    orders = sortOrders(orders, sortMode, reversedSorting === 'yes' ? true : false);
    orders = filterOrders(orders, searchString);

    rates = getRates();

    container.innerHTML = tpl.render({ 
        styles: styles,
        orders: orders,
        currencySymbol: currencySymbol,
        getUrlParams: getUrlParams,
        makeUrlParams: makeUrlParams,
        sortMode: sortMode,
        reversedSorting: 'no',
        isSortingReversed: reversedSorting === 'yes' ? true : false,
        searchString: searchString,
        statistics: {
            ordersCount: orders.length,
            ordersTotal: statisticOrdersTotal(orders),
            ordersMedianValue: statisticOrdersMedian(orders),
            ordersAverageCheck: statisticOrdersAverageCheck(orders),
            ordersAverageCheckFemale: statisticOrdersAverageCheckByGender(orders, 'Female'),
            ordersAverageCheckMale:  statisticOrdersAverageCheckByGender(orders, 'Male')
        },
        rates: rates,
        currentRate: currentRate,
        getPrice: getPrice
    });

    // Hide or unhide an user detailed information
    container.querySelectorAll('a.page_orders__user_details__link').forEach((link, index, array) => {
        link.onclick = (e) => {
            let userId = link.dataset.user_id;

            if (userId) {
                link.offsetParent.querySelectorAll(`div.page_orders__user_details[id='${userId}']`).forEach((userInfo, index, array) => {
                    userInfo.classList.toggle("active");
                });
                link.classList.toggle("active");
            }
            return false;
        }
    });

    // Event listener for a search field
    let searchInput = container.querySelector('.page_orders__table__head__search input');
    if (searchInput) {
        searchInput.onkeyup = function (e) {
            let value = this.value;
            location.hash = makeUrlParams({search: value});
        };
        searchInput.focus();
        searchInput.selectionStart = searchInput.selectionEnd = searchInput.value.length;
    }

}