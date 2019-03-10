import { orders } from "./getData";
import { getUser } from "./getUser";

export function getOrders() {
    // Attach users to orders
    orders.forEach(function(val, index){
        orders[index].user = getUser(orders[index].user_id);
    });
    return orders;
}
