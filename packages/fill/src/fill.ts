/**
 * Returns the this object after filling the section identified by start and end with value
 * @param array base array
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
export function fill<T>(array: Array<T>, value: T, start: number = 0, end: number = array.length): Array<T> {
    // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

    // Steps 1-2.
    if (array == null) {
        throw new TypeError("this is null or not defined");
    }

    // Steps 3-5.
    const result = [];
    const len = array.length >>> 0;

    // Steps 6-7.
    const relativeStart = start >> 0;

    // Step 8.
    let k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

    // Steps 9-10.
    const relativeEnd = end >> 0;

    // Step 11.
    const final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

    // Step 12.
    // copy from exist array
    let i = 0;
    while (i < k) {
        result[i] = array[i];
        i++;
    }
    // fill range
    while (k < final) {
        result[k] = value;
        k++;
    }
    // copy from exist array
    let j = final;
    while (j < len) {
        result[j] = array[j];
        j++;
    }
    // Step 13.
    return result;
}
