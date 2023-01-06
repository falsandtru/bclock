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
'Clock    new x 1,134,390 ops/sec ±4.50% (114 runs sampled)'

'ISCCache new x 11,463 ops/sec ±0.69% (116 runs sampled)'

'LRUCache new x 20,900,541 ops/sec ±1.24% (122 runs sampled)'

'DW-Cache new x 5,481,159 ops/sec ±0.96% (122 runs sampled)'

'Clock    simulation 10 x 15,871,428 ops/sec ±1.85% (120 runs sampled)'

'ISCCache simulation 10 x 9,412,318 ops/sec ±1.76% (121 runs sampled)'

'LRUCache simulation 10 x 10,718,719 ops/sec ±2.34% (120 runs sampled)'

'DW-Cache simulation 10 x 4,362,547 ops/sec ±2.25% (120 runs sampled)'

'Clock    simulation 100 x 14,334,611 ops/sec ±1.95% (121 runs sampled)'

'ISCCache simulation 100 x 9,775,364 ops/sec ±1.98% (118 runs sampled)'

'LRUCache simulation 100 x 10,746,942 ops/sec ±2.54% (120 runs sampled)'

'DW-Cache simulation 100 x 9,689,094 ops/sec ±1.95% (121 runs sampled)'

'Clock    simulation 1,000 x 11,367,012 ops/sec ±2.19% (119 runs sampled)'

'ISCCache simulation 1,000 x 8,764,445 ops/sec ±1.80% (120 runs sampled)'

'LRUCache simulation 1,000 x 9,440,036 ops/sec ±2.40% (118 runs sampled)'

'DW-Cache simulation 1,000 x 7,036,528 ops/sec ±1.77% (120 runs sampled)'

'Clock    simulation 10,000 x 10,964,926 ops/sec ±1.92% (121 runs sampled)'

'ISCCache simulation 10,000 x 7,818,380 ops/sec ±1.86% (119 runs sampled)'

'LRUCache simulation 10,000 x 8,451,359 ops/sec ±2.22% (120 runs sampled)'

'DW-Cache simulation 10,000 x 7,304,670 ops/sec ±1.58% (121 runs sampled)'

'Clock    simulation 100,000 x 6,889,926 ops/sec ±1.80% (116 runs sampled)'

'ISCCache simulation 100,000 x 3,797,242 ops/sec ±1.54% (116 runs sampled)'

'LRUCache simulation 100,000 x 4,218,715 ops/sec ±2.15% (111 runs sampled)'

'DW-Cache simulation 100,000 x 3,954,103 ops/sec ±1.89% (113 runs sampled)'

'Clock    simulation 1,000,000 x 3,139,573 ops/sec ±3.62% (102 runs sampled)'

'ISCCache simulation 1,000,000 x 1,598,853 ops/sec ±3.60% (101 runs sampled)'

'LRUCache simulation 1,000,000 x 1,739,508 ops/sec ±4.55% (102 runs sampled)'

'DW-Cache simulation 1,000,000 x 1,663,472 ops/sec ±2.02% (108 runs sampled)'
```

```ts
const key = random() < 0.9
  ? random() * capacity * 1 | 0
  : random() * capacity * 9 + capacity | 0;
cache.get(key) ?? cache.set(key, {});
```

Clock outperforms LRU, especially in the get operation by marking algorithm.
Therefore, when the cache is less likely to overflow, Clock is particularly faster than LRU.

```
'Clock    get 10 100% x 32,556,504 ops/sec ±0.96% (123 runs sampled)'

'ISCCache get 10 100% x 19,894,780 ops/sec ±0.69% (122 runs sampled)'

'LRUCache get 10 100% x 21,351,150 ops/sec ±1.14% (123 runs sampled)'

'DW-Cache get 10 100% x 17,935,363 ops/sec ±0.92% (123 runs sampled)'

'Clock    get 100 100% x 25,516,735 ops/sec ±0.87% (123 runs sampled)'

'ISCCache get 100 100% x 18,929,490 ops/sec ±0.70% (123 runs sampled)'

'LRUCache get 100 100% x 16,740,819 ops/sec ±0.99% (122 runs sampled)'

'DW-Cache get 100 100% x 15,324,903 ops/sec ±0.15% (123 runs sampled)'

'Clock    get 1,000 100% x 24,591,049 ops/sec ±0.81% (123 runs sampled)'

'ISCCache get 1,000 100% x 18,281,744 ops/sec ±0.77% (123 runs sampled)'

'LRUCache get 1,000 100% x 15,245,521 ops/sec ±1.06% (123 runs sampled)'

'DW-Cache get 1,000 100% x 14,459,739 ops/sec ±0.91% (123 runs sampled)'

'Clock    get 10,000 100% x 24,913,570 ops/sec ±0.80% (123 runs sampled)'

'ISCCache get 10,000 100% x 16,960,075 ops/sec ±0.94% (123 runs sampled)'

'LRUCache get 10,000 100% x 13,918,606 ops/sec ±0.72% (122 runs sampled)'

'DW-Cache get 10,000 100% x 12,823,376 ops/sec ±0.96% (122 runs sampled)'

'Clock    get 100,000 100% x 17,339,409 ops/sec ±0.14% (123 runs sampled)'

'ISCCache get 100,000 100% x 8,097,038 ops/sec ±0.28% (122 runs sampled)'

'LRUCache get 100,000 100% x 6,670,490 ops/sec ±0.30% (122 runs sampled)'

'DW-Cache get 100,000 100% x 6,357,732 ops/sec ±0.27% (122 runs sampled)'

'Clock    get 1,000,000 100% x 7,539,331 ops/sec ±1.21% (117 runs sampled)'

'ISCCache get 1,000,000 100% x 2,017,310 ops/sec ±1.47% (114 runs sampled)'

'LRUCache get 1,000,000 100% x 2,131,052 ops/sec ±1.02% (117 runs sampled)'

'DW-Cache get 1,000,000 100% x 2,046,670 ops/sec ±0.95% (115 runs sampled)'
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
