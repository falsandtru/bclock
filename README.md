# Bitwise Clock

![CI](https://github.com/falsandtru/bclock/workflows/CI/badge.svg)

A cache of the Clock algorithm ***2x faster*** than LRU.

- ***2x faster*** than [lru-cache](https://www.npmjs.com/package/lru-cache) which is the most popular and fastest cache package except bclock.
- ***32x faster*** than the original Clock algorithm in worst-case time complexity.

## Maintenance

The source code is maintained on the next source repository.

https://github.com/falsandtru/spica

## Performance

Note that the number of trials per capacity for simulation 1,000,000 is insufficient.

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
'Clock    new x 1,056,524 ops/sec ±5.05% (115 runs sampled)'

'ISCCache new x 11,152 ops/sec ±1.13% (115 runs sampled)'

'LRUCache new x 19,712,710 ops/sec ±0.28% (121 runs sampled)'

'DW-Cache new x 5,291,110 ops/sec ±1.07% (121 runs sampled)'

'Clock    simulation 100 x 10,438,626 ops/sec ±2.32% (119 runs sampled)'

'ISCCache simulation 100 x 7,728,401 ops/sec ±1.90% (120 runs sampled)'

'LRUCache simulation 100 x 8,746,203 ops/sec ±2.81% (118 runs sampled)'

'DW-Cache simulation 100 x 6,489,576 ops/sec ±2.09% (120 runs sampled)'

'Clock    simulation 1,000 x 8,852,542 ops/sec ±2.33% (118 runs sampled)'

'ISCCache simulation 1,000 x 6,982,545 ops/sec ±1.92% (119 runs sampled)'

'LRUCache simulation 1,000 x 7,732,134 ops/sec ±2.54% (117 runs sampled)'

'DW-Cache simulation 1,000 x 6,431,153 ops/sec ±2.22% (120 runs sampled)'

'Clock    simulation 10,000 x 8,626,526 ops/sec ±2.28% (120 runs sampled)'

'ISCCache simulation 10,000 x 6,428,085 ops/sec ±1.87% (120 runs sampled)'

'LRUCache simulation 10,000 x 7,104,411 ops/sec ±2.31% (119 runs sampled)'

'DW-Cache simulation 10,000 x 6,521,010 ops/sec ±1.89% (119 runs sampled)'

'Clock    simulation 100,000 x 5,355,927 ops/sec ±1.83% (116 runs sampled)'

'ISCCache simulation 100,000 x 2,786,209 ops/sec ±1.68% (107 runs sampled)'

'LRUCache simulation 100,000 x 3,224,443 ops/sec ±1.93% (114 runs sampled)'

'DW-Cache simulation 100,000 x 2,877,884 ops/sec ±2.09% (112 runs sampled)'

'Clock    simulation 1,000,000 x 2,295,728 ops/sec ±3.69% (107 runs sampled)'

'ISCCache simulation 1,000,000 x 1,416,245 ops/sec ±2.44% (108 runs sampled)'

'LRUCache simulation 1,000,000 x 1,438,230 ops/sec ±4.48% (103 runs sampled)'

'DW-Cache simulation 1,000,000 x 1,476,028 ops/sec ±2.29% (111 runs sampled)'
```

```ts
const key = random() < 0.8
  ? random() * capacity * 1 | 0
  : random() * capacity * 9 + capacity | 0;
cache.get(key) ?? cache.set(key, {});
```

Clock outperforms LRU, especially in the get operation by marking algorithm.
Therefore, when the cache is less likely to overflow, Clock is particularly faster than LRU.

```
'Clock    get 10 100% x 32,672,255 ops/sec ±0.31% (123 runs sampled)'

'ISCCache get 10 100% x 19,828,816 ops/sec ±0.82% (122 runs sampled)'

'LRUCache get 10 100% x 21,422,993 ops/sec ±0.87% (121 runs sampled)'

'DW-Cache get 10 100% x 17,736,755 ops/sec ±0.78% (123 runs sampled)'

'Clock    get 100 100% x 25,438,647 ops/sec ±0.86% (122 runs sampled)'

'ISCCache get 100 100% x 18,637,866 ops/sec ±0.80% (122 runs sampled)'

'LRUCache get 100 100% x 16,778,520 ops/sec ±0.95% (122 runs sampled)'

'DW-Cache get 100 100% x 15,832,220 ops/sec ±0.15% (123 runs sampled)'

'Clock    get 1,000 100% x 24,481,257 ops/sec ±1.00% (122 runs sampled)'

'ISCCache get 1,000 100% x 18,231,286 ops/sec ±0.69% (123 runs sampled)'

'LRUCache get 1,000 100% x 15,222,696 ops/sec ±1.00% (122 runs sampled)'

'DW-Cache get 1,000 100% x 14,379,872 ops/sec ±0.91% (122 runs sampled)'

'Clock    get 10,000 100% x 24,817,586 ops/sec ±0.13% (123 runs sampled)'

'ISCCache get 10,000 100% x 16,835,483 ops/sec ±0.66% (123 runs sampled)'

'LRUCache get 10,000 100% x 13,821,867 ops/sec ±0.96% (122 runs sampled)'

'DW-Cache get 10,000 100% x 13,074,128 ops/sec ±0.95% (123 runs sampled)'

'Clock    get 100,000 100% x 16,964,630 ops/sec ±0.16% (123 runs sampled)'

'ISCCache get 100,000 100% x 6,325,010 ops/sec ±0.77% (117 runs sampled)'

'LRUCache get 100,000 100% x 5,238,932 ops/sec ±1.13% (118 runs sampled)'

'DW-Cache get 100,000 100% x 5,059,331 ops/sec ±1.25% (118 runs sampled)'

'Clock    get 1,000,000 100% x 4,967,390 ops/sec ±1.56% (111 runs sampled)'

'ISCCache get 1,000,000 100% x 1,785,856 ops/sec ±0.41% (119 runs sampled)'

'LRUCache get 1,000,000 100% x 1,837,294 ops/sec ±0.46% (117 runs sampled)'

'DW-Cache get 1,000,000 100% x 1,713,573 ops/sec ±0.42% (119 runs sampled)'

'Clock    set 10 0% x 22,524,565 ops/sec ±1.06% (123 runs sampled)'

'ISCCache set 10 0% x 12,857,566 ops/sec ±0.89% (123 runs sampled)'

'LRUCache set 10 0% x 23,492,538 ops/sec ±1.32% (123 runs sampled)'

'DW-Cache set 10 0% x 17,067,469 ops/sec ±0.83% (122 runs sampled)'

'Clock    set 100 0% x 22,039,880 ops/sec ±1.28% (122 runs sampled)'

'ISCCache set 100 0% x 12,709,202 ops/sec ±0.94% (122 runs sampled)'

'LRUCache set 100 0% x 22,648,192 ops/sec ±1.03% (122 runs sampled)'

'DW-Cache set 100 0% x 16,191,955 ops/sec ±0.91% (122 runs sampled)'

'Clock    set 1,000 0% x 21,068,791 ops/sec ±1.07% (122 runs sampled)'

'ISCCache set 1,000 0% x 12,300,022 ops/sec ±0.93% (123 runs sampled)'

'LRUCache set 1,000 0% x 21,251,109 ops/sec ±1.30% (122 runs sampled)'

'DW-Cache set 1,000 0% x 15,418,591 ops/sec ±0.89% (122 runs sampled)'

'Clock    set 10,000 0% x 19,209,371 ops/sec ±1.26% (122 runs sampled)'

'ISCCache set 10,000 0% x 9,202,332 ops/sec ±0.95% (121 runs sampled)'

'LRUCache set 10,000 0% x 16,819,300 ops/sec ±0.15% (123 runs sampled)'

'DW-Cache set 10,000 0% x 12,017,503 ops/sec ±0.25% (122 runs sampled)'

'Clock    set 100,000 0% x 6,664,401 ops/sec ±1.67% (117 runs sampled)'

'ISCCache set 100,000 0% x 2,931,435 ops/sec ±1.78% (115 runs sampled)'

'LRUCache set 100,000 0% x 5,422,096 ops/sec ±1.56% (116 runs sampled)'

'DW-Cache set 100,000 0% x 3,958,572 ops/sec ±1.33% (118 runs sampled)'

'Clock    set 1,000,000 0% x 2,252,767 ops/sec ±3.17% (114 runs sampled)'

'ISCCache set 1,000,000 0% x 1,225,992 ops/sec ±2.02% (107 runs sampled)'

'LRUCache set 1,000,000 0% x 1,877,150 ops/sec ±2.53% (107 runs sampled)'

'DW-Cache set 1,000,000 0% x 1,483,825 ops/sec ±3.43% (106 runs sampled)'
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
