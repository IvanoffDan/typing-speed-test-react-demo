import textPlaceholder from '../../collections/text-placeholder';

export function fetchText() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let textIdToSelect = Math.floor((Math.random() * 3) + 1);
            console.log(textPlaceholder[textIdToSelect]);
            resolve(textPlaceholder[textIdToSelect]);
        }, 3000)
    });
}