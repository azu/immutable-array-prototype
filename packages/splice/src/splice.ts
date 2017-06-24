/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param array Base array.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @param items Elements to insert into the array in place of the deleted elements.
 */
export function splice<T>(array: Array<T>, start?: number, deleteCount?: number, ...items: T[]): Array<T>;
export function splice<T>(array: Array<T>, ...args: any[]): Array<T> {
    const copiedArray = Array.prototype.slice.call(array);
    Array.prototype.splice.apply(copiedArray, args);
    return copiedArray;
}
