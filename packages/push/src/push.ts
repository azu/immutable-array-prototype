/**
 * Appends new elements to an array, and returns the new length of the array.
 * @param array base Array
 * @param items New elements of the Array.
 */
export function push<T>(array: Array<T>, ...items: T[]): Array<T> {
    return array.concat(items);
}
