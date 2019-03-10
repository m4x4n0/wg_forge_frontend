// Sorting by user info
export function sortOrdersByUserInfo(a, b) {
    if (a.user.first_name < b.user.first_name) return -1;
    if (a.user.first_name > b.user.first_name) return 1;
    if (a.user.last_name < b.user.last_name) return -1
    if (a.user.last_name > b.user.last_name) return 1;
    return 0;
}