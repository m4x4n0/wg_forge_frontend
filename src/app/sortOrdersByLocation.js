// Sorting by location

export function sortOrdersByLocation(a, b) {
    if (a.order_country < b.order_country) return -1;
    if (a.order_country > b.order_country) return 1;
    if (a.order_ip < b.order_ip) return -1;
    if (a.order_ip > b.order_ip) return 1;
    return 0;
}