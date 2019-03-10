// Filter orders by query string
export function filterOrders(orders, searchString) {
    if (searchString) {
        orders = orders.filter((order) => {
            searchString = searchString.toLowerCase();
            if (order.user.first_name.toLowerCase().search(searchString) !== -1) return true;
            if (order.user.last_name.toLowerCase().search(searchString) !== -1) return true;
            if (String(order.transaction_id).search(searchString) !== -1) return true;
            if (String(order.id).search(searchString) !== -1) return true;
            if (String(order.user_id).search(searchString) !== -1) return true;
            if (String(order.total).search(searchString) !== -1) return true;
            if (order.card_type.search(searchString) !== -1) return true;
            if (order.order_country.search(searchString) !== -1) return true;
            if (order.order_ip.search(searchString) !== -1) return true;

        });
    }
    return orders;
}
