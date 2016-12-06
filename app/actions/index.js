export const FETCH_TEXTS = 'FETCH_TEXTS';
export const FETCH_TEXTS_SUCCEEDED = 'FETCH_TEXTS_SUCCEEDED';
export const SELECT_RANDOM_TEXT = 'SELECT_RANDOM_TEXT';

export function fetchTexts() {
    return {
        type: FETCH_TEXTS
    }
}

export function fetchTextsSucceeded(texts) {
    return {
        type: FETCH_TEXTS_SUCCEEDED,
        texts
    }
}

export function selectRandomText(text) {
    return {
        type: SELECT_RANDOM_TEXT,
        text
    }
}

