import { sortOrdersByTransactionId } from "./sortOrdersByTransactionId";
import { sortOrdersByUserInfo } from "./sortOrdersByUserInfo";
import { sortOrdersByDate } from "./sortOrdersByDate";
import { sortOrdersByAmount } from "./sortOrdersByAmount";
import { sortOrdersByCardType } from "./sortOrdersByCardType";
import { sortOrdersByLocation } from "./sortOrdersByLocation";
import { sortOrdersByDefault } from "./sortOrdersByDefault";

export function sortOrders(orders, sortMode, reversed=false) {
    // Sort orders by sort mode
    switch(sortMode) {

        case 'transaction_id':
            orders.sort(sortOrdersByTransactionId);
            break;

        case 'user_info':
            orders.sort(sortOrdersByUserInfo);
            break;
    
        case 'order_date':
            orders.sort(sortOrdersByDate);
            break;

        case 'order_amount':
            orders.sort(sortOrdersByAmount);
            break;

        case 'card_type':
            orders.sort(sortOrdersByCardType);
            break;

        case 'location':
            orders.sort(sortOrdersByLocation);
            break;

        default:
            orders.sort(sortOrdersByDefault);
            break;

    }
    if (reversed) return orders.reverse();
    return orders;
}
