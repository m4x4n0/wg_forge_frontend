export var orders, users, companies;

export async function getData() {
    const results = await Promise.all([
        fetch("/api/orders.json").then(response => response.json()),
        fetch("/api/users.json").then(response_1 => response_1.json()),
        fetch("/api/companies.json").then(response_2 => response_2.json()),
    ]);
    orders = results[0];
    users = results[1];
    companies = results[2];
}
