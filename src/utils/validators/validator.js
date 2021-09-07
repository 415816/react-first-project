export const requaredField = (value) => {
    if (value) return undefined;
    return 'Field is a required';
}

export const maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}

