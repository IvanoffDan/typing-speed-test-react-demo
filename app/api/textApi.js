import textPlaceholder from '../../collections/text-placeholder';

export function fetchTexts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(textPlaceholder);
        }, 3000)
    });
}