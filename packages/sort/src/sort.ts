/**
 * Sorts an array.
 * @param array Base array
 * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
 */
export function sort<T>(array: Array<T>, compareFn?: (a: T, b: T) => number): Array<T> {
    return [...array].sort(compareFn);
}
