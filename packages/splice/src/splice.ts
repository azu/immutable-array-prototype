/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param array Base array.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @param items Elements to insert into the array in place of the deleted elements.
 */
export function splice<T>(
    array: Array<T>,
    start: number = array.length,
    deleteCount: number = array.length - start,
    ...items: T[]
): Array<T> {
    return [...array.slice(0, start), ...items, ...array.slice(start + (deleteCount < 0 ? 0 : deleteCount))];
}
