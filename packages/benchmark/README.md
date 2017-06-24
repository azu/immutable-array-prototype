# Benchmark

Benchmark native array prototype methods vs. `@immutable-array`

## Usage

    npm run compare
    
## Example Output

    > nanobench-compare output/array.log output/immutable-array.log
    
    NANOBENCH version 2               |    NANOBENCH version 2
    > node src/array.js |                  > immutable-array.js
                                      |
    # pop 200000 times               <<<   # pop 200000 times
    ok ~219 ms (0 s + 219071853 ns)  <<<   ok ~296 ms (0 s + 295642472 ns)
                                      |
    # push 200000 times              <<<   # push 200000 times
    ok ~37 ms (0 s + 36657200 ns)    <<<   ok ~136 ms (0 s + 136168374 ns)
                                      |
    # shift 200000 times             <<<   # shift 200000 times
    ok ~218 ms (0 s + 218119977 ns)  <<<   ok ~267 ms (0 s + 266877015 ns)
                                      |
    # unshift 200000 times           <<<   # unshift 200000 times
    ok ~43 ms (0 s + 42725823 ns)    <<<   ok ~96 ms (0 s + 96198980 ns)
                                      |
    # sort 2000 times                ===   # sort 2000 times
    ok ~554 ms (0 s + 554139393 ns)  ===   ok ~566 ms (0 s + 566213053 ns)
                                      |
    # reverse 200000 times           >>>   # reverse 200000 times
    ok ~502 ms (0 s + 501891778 ns)  >>>   ok ~426 ms (0 s + 425654285 ns)
                                      |
    # fill 200000 times              <<<   # fill 200000 times
    ok ~693 ms (0 s + 692615788 ns)  <<<   ok ~1.26 s (1 s + 259820993 ns)
                                      |
    # splice 200000 times            <<<   # splice 200000 times
    ok ~250 ms (0 s + 249596808 ns)  <<<   ok ~609 ms (0 s + 608638182 ns)
                                      |
    # copyWithin 200000 times        <<<   # copyWithin 200000 times
    ok ~186 ms (0 s + 186430568 ns)  <<<   ok ~279 ms (0 s + 279108176 ns)
                                      |
    all benchmarks completed         <<<   all benchmarks completed
    ok ~2.7 s (2 s + 701249188 ns)   <<<   ok ~3.93 s (3 s + 934321530 ns)
                                      |
