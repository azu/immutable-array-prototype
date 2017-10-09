// MIT © 2017 azu
"use strict";
const bench = require("nanobench");
const { noop, createSmallArray, createBigArray } = require("./util");
const executionCount = 200000;
bench(`pop ${executionCount} times`, function(b) {
    b.start();
    for (var i = 0; i < executionCount; i++) {
        var smallArray = createSmallArray();
        var bigArray = createBigArray();
        noop(smallArray.pop());
        noop(bigArray.pop());
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
        noop(smallArray.push(i));
        noop(smallArray.push(i));
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
        noop(smallArray.shift());
        noop(bigArray.shift());
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
        noop(smallArray.unshift(i));
        noop(smallArray.unshift(i));
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
        noop(smallArray.sort());
        noop(bigArray.sort());
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
        noop(smallArray.reverse());
        noop(bigArray.reverse());
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
        noop(smallArray.fill(1));
        noop(bigArray.fill(1));
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
        noop(smallArray.splice(1, 1, "x"));
        noop(bigArray.splice(1, 1, "x"));
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
        noop(smallArray.copyWithin(0, 3, 4));
        noop(bigArray.copyWithin(0, 3, 4));
        noop(smallArray);
        noop(bigArray);
    }
    b.end();
});
