// Sorting by transaction id
export function sortOrdersByTransactionId(a, b) {
    if (a.transaction_id < b.transaction_id) {
        return -1;
    }
    if (a.transaction_id > b.transaction_id) {
        return 1;
    }
    return 0;
}