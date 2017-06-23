/**
 * Removes the last element from an array and returns it.
 */
export function pop<T>(array: Array<T>): T[] {
    return array.slice(0, -1);
}
