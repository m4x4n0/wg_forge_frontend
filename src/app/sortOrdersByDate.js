// Sorting by order date
export function sortOrdersByDate(a, b) {
    return a.created_at - b.created_at;
}