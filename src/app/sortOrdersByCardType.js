// Sorting by card type
export function sortOrdersByCardType(a, b) {
    if (a.card_type < b.card_type) {
        return -1;
    }
    if (a.card_type > b.card_type) {
        return 1;
    }
    return 0;
}