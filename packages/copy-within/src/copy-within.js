"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the this object after copying a section of the array identified by start and end
 * to the same array starting at position target
 * @param array Base array
 * @param target If target is negative, it is treated as length+target where length is the
 * length of the array.
 * @param start If start is negative, it is treated as length+start. If end is negative, it
 * is treated as length+end.
 * @param end If not specified, length of the this object is used as its default value.
 */
function copyWithin(array, target, start, end) {
    return Array.prototype.slice.call(array).copyWithin(target, start, end);
}
exports.copyWithin = copyWithin;
