import {getUrlParams} from './getUrlParams';

export function makeUrlParams(add={}, remove={}) {
    let urlOriginalSearchParams = getUrlParams();
    let urlSearchParams = getUrlParams();

    Object.keys(add).forEach((key) => {
        urlSearchParams.delete(key);
        urlSearchParams.set(key, add[key]);
    });

    if (urlOriginalSearchParams.has('sort') && urlOriginalSearchParams.get('sort') === add.sort) {
        let reversed = urlOriginalSearchParams.get('reversed');
        urlSearchParams.delete('reversed');
        urlSearchParams.set('reversed', reversed === 'yes' ? 'no' : 'yes');
    }

    return `#${urlSearchParams.toString()}`;
}
