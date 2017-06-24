/**
 * Returns the this object after filling the section identified by start and end with value
 * @param array base array
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
export function fill<T>(array: Array<T>, value: T, start?: number, end?: number): Array<T> {
    return Array.prototype.slice.call(array).fill(value, start, end);
}
