import { getRates } from "./getRates";
import { getUrlParams } from "./getUrlParams";

export function getPrice(price) {
    let urlSearchParams = getUrlParams();
    let currentRate = urlSearchParams.get('rate') || "USD";
    let rates = getRates();
    // return a price with round with 2 decimal places
    return Math.round((price * rates.rates[currentRate]) * 100) / 100;
}
