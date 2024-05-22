const stringArbitrary = "ABCEnglishDEF"
export const stringLowerCase = stringArbitrary.toLowerCase();


export let word = "English";
export let WordLowercase = word.toLocaleLowerCase();

export function word2() {
    if (stringLowerCase.includes(WordLowercase)) {
        return true;
    }
}