# Bitwise Clock

![CI](https://github.com/falsandtru/bclock/workflows/CI/badge.svg)

A clock variant cache algorithm ***2x faster*** than LRU.

- ***2x faster*** than [lru-cache](https://www.npmjs.com/package/lru-cache) which is the most popular and fastest cache package except bclock.
- ***32x faster*** than the original clock algorithm in worst-case time complexity.

## Maintenance

The source code is maintained on the next source repository.

https://github.com/falsandtru/spica

## Performance

No result with 10,000,000 because lru-cache crushes with the next error on the next machine of GitHub Actions.
It is verified that the error was thrown also when benchmarking only lru-cache.

> Error: Uncaught RangeError: Map maximum size exceeded

> System:<br>
  OS: Linux 5.15 Ubuntu 20.04.5 LTS (Focal Fossa)<br>
  CPU: (2) x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz<br>
  Memory: 5.88 GB / 6.78 GB

Clock: spica/clock<br>
ISCCache: [lru-cache](https://www.npmjs.com/package/lru-cache)<br>
LRUCache: spica/lru<br>
DW-Cache: spica/cache<br>

```
'Clock    new x 1,650,836 ops/sec ±1.94% (94 runs sampled)'

'ISCCache new x 18,042 ops/sec ±0.66% (105 runs sampled)'

'LRUCache new x 30,098,951 ops/sec ±0.23% (106 runs sampled)'

'DW-Cache new x 7,021,323 ops/sec ±0.30% (105 runs sampled)'

'Clock    simulation 100 10% x 9,762,593 ops/sec ±0.36% (107 runs sampled)'

'ISCCache simulation 100 10% x 8,761,469 ops/sec ±0.38% (107 runs sampled)'

'LRUCache simulation 100 10% x 10,769,407 ops/sec ±0.28% (107 runs sampled)'

'DW-Cache simulation 100 10% x 7,242,192 ops/sec ±0.50% (105 runs sampled)'

'Clock    simulation 1,000 10% x 9,601,967 ops/sec ±0.48% (107 runs sampled)'

'ISCCache simulation 1,000 10% x 7,986,140 ops/sec ±0.58% (106 runs sampled)'

'LRUCache simulation 1,000 10% x 9,735,550 ops/sec ±0.41% (106 runs sampled)'

'DW-Cache simulation 1,000 10% x 6,592,345 ops/sec ±0.37% (107 runs sampled)'

'Clock    simulation 10,000 10% x 9,344,809 ops/sec ±0.40% (105 runs sampled)'

'ISCCache simulation 10,000 10% x 7,193,304 ops/sec ±0.83% (106 runs sampled)'

'LRUCache simulation 10,000 10% x 8,881,517 ops/sec ±0.41% (104 runs sampled)'

'DW-Cache simulation 10,000 10% x 6,020,040 ops/sec ±0.50% (106 runs sampled)'

'Clock    simulation 100,000 10% x 5,948,133 ops/sec ±1.22% (101 runs sampled)'

'ISCCache simulation 100,000 10% x 3,654,505 ops/sec ±1.47% (101 runs sampled)'

'LRUCache simulation 100,000 10% x 5,615,930 ops/sec ±1.35% (100 runs sampled)'

'DW-Cache simulation 100,000 10% x 4,255,377 ops/sec ±1.79% (97 runs sampled)'

'Clock    simulation 1,000,000 10% x 2,605,647 ops/sec ±3.98% (93 runs sampled)'

'ISCCache simulation 1,000,000 10% x 1,453,643 ops/sec ±2.92% (95 runs sampled)'

'LRUCache simulation 1,000,000 10% x 2,081,983 ops/sec ±4.23% (88 runs sampled)'

'DW-Cache simulation 1,000,000 10% x 2,598,274 ops/sec ±4.42% (89 runs sampled)'

'Clock    simulation 100 90% x 25,014,146 ops/sec ±0.33% (107 runs sampled)'

'ISCCache simulation 100 90% x 22,495,828 ops/sec ±0.74% (105 runs sampled)'

'LRUCache simulation 100 90% x 20,969,655 ops/sec ±0.84% (107 runs sampled)'

'DW-Cache simulation 100 90% x 9,730,398 ops/sec ±0.32% (107 runs sampled)'

'Clock    simulation 1,000 90% x 23,025,311 ops/sec ±0.51% (107 runs sampled)'

'ISCCache simulation 1,000 90% x 19,347,819 ops/sec ±0.34% (107 runs sampled)'

'LRUCache simulation 1,000 90% x 18,240,448 ops/sec ±0.28% (107 runs sampled)'

'DW-Cache simulation 1,000 90% x 11,382,934 ops/sec ±0.19% (108 runs sampled)'

'Clock    simulation 10,000 90% x 20,506,917 ops/sec ±0.25% (105 runs sampled)'

'ISCCache simulation 10,000 90% x 15,441,103 ops/sec ±1.24% (105 runs sampled)'

'LRUCache simulation 10,000 90% x 13,104,661 ops/sec ±0.61% (105 runs sampled)'

'DW-Cache simulation 10,000 90% x 8,747,757 ops/sec ±0.92% (107 runs sampled)'

'Clock    simulation 100,000 90% x 12,049,875 ops/sec ±1.49% (100 runs sampled)'

'ISCCache simulation 100,000 90% x 8,173,371 ops/sec ±1.17% (102 runs sampled)'

'LRUCache simulation 100,000 90% x 8,188,424 ops/sec ±2.08% (100 runs sampled)'

'DW-Cache simulation 100,000 90% x 5,973,422 ops/sec ±2.65% (100 runs sampled)'

'Clock    simulation 1,000,000 90% x 5,578,321 ops/sec ±4.20% (92 runs sampled)'

'ISCCache simulation 1,000,000 90% x 2,963,294 ops/sec ±2.91% (95 runs sampled)'

'LRUCache simulation 1,000,000 90% x 2,235,658 ops/sec ±2.83% (95 runs sampled)'

'DW-Cache simulation 1,000,000 90% x 1,931,442 ops/sec ±2.32% (98 runs sampled)'

'ISCCache simulation 100 90% expire x 4,172,541 ops/sec ±5.34% (94 runs sampled)'

'DW-Cache simulation 100 90% expire x 8,241,722 ops/sec ±0.42% (107 runs sampled)'

'ISCCache simulation 1,000 90% expire x 4,169,949 ops/sec ±3.98% (97 runs sampled)'

'DW-Cache simulation 1,000 90% expire x 8,218,212 ops/sec ±0.30% (107 runs sampled)'

'ISCCache simulation 10,000 90% expire x 3,539,574 ops/sec ±4.02% (98 runs sampled)'

'DW-Cache simulation 10,000 90% expire x 6,338,384 ops/sec ±1.07% (105 runs sampled)'

'ISCCache simulation 100,000 90% expire x 2,429,074 ops/sec ±4.48% (94 runs sampled)'

'DW-Cache simulation 100,000 90% expire x 1,977,169 ops/sec ±2.71% (86 runs sampled)'

'ISCCache simulation 1,000,000 90% expire x 448,719 ops/sec ±5.09% (82 runs sampled)'

'DW-Cache simulation 1,000,000 90% expire x 629,254 ops/sec ±3.81% (98 runs sampled)'
```

Clock outperforms LRU, especially in the get operation by marking algorithm.
Therefore, when the cache is less likely to overflow, Clock is particularly faster than LRU.

```
'Clock    get 100 100% x 33,939,567 ops/sec ±0.11% (124 runs sampled)'

'ISCCache get 100 100% x 27,154,321 ops/sec ±0.63% (123 runs sampled)'

'LRUCache get 100 100% x 23,510,090 ops/sec ±0.71% (123 runs sampled)'

'DW-Cache get 100 100% x 16,434,325 ops/sec ±0.29% (124 runs sampled)'

'Clock    get 1,000 100% x 33,884,162 ops/sec ±0.22% (107 runs sampled)'

'ISCCache get 1,000 100% x 24,411,810 ops/sec ±0.26% (106 runs sampled)'

'LRUCache get 1,000 100% x 21,065,594 ops/sec ±0.16% (106 runs sampled)'

'DW-Cache get 1,000 100% x 15,385,560 ops/sec ±0.25% (107 runs sampled)'

'Clock    get 10,000 100% x 36,391,602 ops/sec ±0.53% (107 runs sampled)'

'ISCCache get 10,000 100% x 22,475,190 ops/sec ±0.22% (107 runs sampled)'

'LRUCache get 10,000 100% x 15,406,949 ops/sec ±0.21% (107 runs sampled)'

'DW-Cache get 10,000 100% x 12,275,011 ops/sec ±0.50% (107 runs sampled)'

'Clock    get 100,000 100% x 21,335,537 ops/sec ±0.19% (107 runs sampled)'

'ISCCache get 100,000 100% x 10,651,619 ops/sec ±0.54% (106 runs sampled)'

'LRUCache get 100,000 100% x 9,621,786 ops/sec ±1.05% (106 runs sampled)'

'DW-Cache get 100,000 100% x 8,171,402 ops/sec ±0.61% (106 runs sampled)'

'Clock    get 1,000,000 100% x 13,408,228 ops/sec ±1.51% (105 runs sampled)'

'ISCCache get 1,000,000 100% x 3,819,976 ops/sec ±3.46% (96 runs sampled)'

'LRUCache get 1,000,000 100% x 2,411,793 ops/sec ±1.99% (100 runs sampled)'

'DW-Cache get 1,000,000 100% x 2,080,740 ops/sec ±1.66% (99 runs sampled)'
```

## API

```ts
export class Clock<K, V> {
  // Capacity is rounded up to multiples of 32.
  constructor(capacity: number);
  add(key: K, value: V): number;
  put(key: K, value: V): boolean;
  set(key: K, value: V): this;
  get(key: K): V | undefined;
  has(key: K): boolean;
  delete(key: K): boolean;
  clear(): void;
  readonly length: number;
  readonly size: number;
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
}
```
