/**
 * Removes the first element from an array and returns it.
 */
export function shift<T>(array: Array<T>): Array<T> {
    return array.slice(1);
}
