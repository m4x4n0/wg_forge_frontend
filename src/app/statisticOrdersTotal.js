// Math an orders total
export function statisticOrdersTotal(orders) {
    let ordersTotal = 0;
    orders.forEach(function(order, index){
        ordersTotal += order.total * 1;
    });
    return ordersTotal;
}