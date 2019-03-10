// Math an orders average check gender
export function statisticOrdersAverageCheckByGender(orders, gender) {
    let ordersTotal = 0;
    let ordersLength = 0;
    orders.forEach(function(order, index){
        if (order.user.gender === gender) {
            ordersTotal += order.total * 1;
            ordersLength += 1;
        }
    });
    return ordersTotal / ordersLength;
}