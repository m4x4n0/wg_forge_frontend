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

}