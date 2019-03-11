import { getRates } from "./getRates";
import { getUrlParams } from "./getUrlParams";

export function getPrice(price) {
    let urlSearchParams = getUrlParams();
    let currentRate = urlSearchParams.get('rate') || "USD";
    let rates = getRates();
    return price * rates.rates[currentRate];
}
