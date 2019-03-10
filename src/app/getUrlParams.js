export function getUrlParams() {
    // Get params from an url from a location hash attribute.
    return new URLSearchParams(location.hash.slice(1));
}