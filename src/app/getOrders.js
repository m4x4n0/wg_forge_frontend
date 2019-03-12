import { orders } from "./getData";
import { getUser } from "./getUser";
import { getPrice } from "./getPrice";

export function getOrders() {
    // Attach users to orders
    let modifiedOrders = [];
    orders.forEach(function(val, index){
        // There is some hack to deep copy object
        // modifiedOrders.push(JSON.parse(JSON.stringify(val)));
        modifiedOrders.push(Object.assign({}, val));
        modifiedOrders[index].user = getUser(modifiedOrders[index].user_id);
        modifiedOrders[index].total = getPrice(modifiedOrders[index].total);
    });
    return modifiedOrders;
}
