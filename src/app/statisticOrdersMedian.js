// Math an orders median
export function statisticOrdersMedian(orders) {
    let ordersTotal = {};
    let ordersMedian;
    let ordersLength = orders.length;
    orders.forEach(function(order, index){
        let kv = order.total * 1;
        ordersTotal[kv] = kv;
    });

    ordersTotal = Object.values(ordersTotal).sort((a, b) => {
        return a - b;
    });

    if (ordersLength % 2 === 0) {
        let before, after;
        before = ordersTotal[ordersLength / 2 - 1];
        after = ordersTotal[ordersLength / 2 + 1];
        ordersMedian = (before + after) / 2;
    } else {
        let middle;
        ordersMedian = ordersTotal[Math.round(ordersLength / 2)];
    }
    return ordersMedian;
}