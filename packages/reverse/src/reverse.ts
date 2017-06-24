/**
 * Reverses the elements in an Array.
 * @param array base array
 */
export function reverse<T>(array: Array<T>): Array<T> {
    return [...array].reverse();
}
