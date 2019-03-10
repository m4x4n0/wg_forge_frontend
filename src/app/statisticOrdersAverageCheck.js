import { statisticOrdersTotal } from "./statisticOrdersTotal";

// Math an orders average check
export function statisticOrdersAverageCheck(orders) {
    let ordersLength = orders.length;
    if (ordersLength) {
        let ordersTotal = statisticOrdersTotal(orders);
        return ordersTotal / ordersLength;
    }
}