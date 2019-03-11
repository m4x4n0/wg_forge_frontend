export var orders, users, companies, rates;

export async function getData() {
    const results = await Promise.all([
        fetch("/api/orders.json").then(response => response.json()),
        fetch("/api/users.json").then(response_1 => response_1.json()),
        fetch("/api/companies.json").then(response_2 => response_2.json()),
        fetch("https://api.exchangeratesapi.io/latest?base=USD").then(response_3 => response_3.json()),
    ]);
    orders = results[0];
    users = results[1];
    companies = results[2];
    rates = results[3];
}
