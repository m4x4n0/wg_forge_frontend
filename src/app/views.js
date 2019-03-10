import { getOrders } from "./getOrders";

export function renderTable() {
    let orders = [];
    let tpl = require('../templates/app.html');
    let styles = require('../sass/app.sass');
    let currencySymbol = "$";
    let container = document.getElementById("app");

    orders = getOrders();

    container.innerHTML = tpl.render({ 
        styles: styles,
        orders: orders,
        currencySymbol: currencySymbol
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
        }
    });

}