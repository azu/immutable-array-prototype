// MIT © 2017 azu
"use strict";
const bench = require("nanobench");
const { pop, push, shift, unshift, sort, reverse, fill, splice, copyWithin } = require("@immutable-array/prototype");
const { noop, createSmallArray, createBigArray } = require("./util");
const executionCount = 200000;
bench(`pop ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(pop(smallArray));
        noop(pop(bigArray));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`push ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(push(smallArray, i));
        noop(push(push(smallArray, i)));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`shift ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(shift(smallArray));
        noop(shift(bigArray));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`unshift ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(unshift(smallArray, i));
        noop(unshift(smallArray, i));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`sort ${executionCount / 100} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount / 100; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(sort(smallArray));
        noop(sort(bigArray));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`reverse ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(reverse(smallArray));
        noop(reverse(bigArray));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`fill ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(fill(smallArray, 1));
        noop(fill(bigArray, 1));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
bench(`splice ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(splice(smallArray, 1, 1, "x"));
        noop(splice(bigArray, 1, 1, "x"));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});

bench(`copyWithin ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(copyWithin(smallArray, 0, 3, 4));
        noop(copyWithin(bigArray, 0, 3, 4));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
