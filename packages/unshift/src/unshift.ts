/**
 * Inserts new elements at the start of an array.
 * @param array  base Array.
 * @param items  Elements to insert at the start of the Array.
 */
export function unshift<T>(array: Array<T>, ...items: T[]): Array<T> {
    return items.concat(array);
}
