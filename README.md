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
'Clock    new x 1,328,833 ops/sec ±3.63% (113 runs sampled)'

'ISCCache new x 13,768 ops/sec ±1.00% (120 runs sampled)'

'LRUCache new x 27,168,783 ops/sec ±1.50% (122 runs sampled)'

'DW-Cache new x 6,049,201 ops/sec ±0.86% (122 runs sampled)'

'Clock    simulation 100 x 13,493,137 ops/sec ±1.65% (121 runs sampled)'

'ISCCache simulation 100 x 8,651,793 ops/sec ±1.85% (121 runs sampled)'

'LRUCache simulation 100 x 10,604,646 ops/sec ±2.24% (120 runs sampled)'

'DW-Cache simulation 100 x 7,242,013 ops/sec ±1.65% (121 runs sampled)'

'Clock    simulation 1,000 x 10,694,963 ops/sec ±1.81% (120 runs sampled)'

'ISCCache simulation 1,000 x 7,700,019 ops/sec ±1.90% (121 runs sampled)'

'LRUCache simulation 1,000 x 9,184,813 ops/sec ±2.13% (120 runs sampled)'

'DW-Cache simulation 1,000 x 7,041,470 ops/sec ±1.77% (120 runs sampled)'

'Clock    simulation 10,000 x 10,517,215 ops/sec ±1.78% (122 runs sampled)'

'ISCCache simulation 10,000 x 7,365,593 ops/sec ±1.67% (121 runs sampled)'

'LRUCache simulation 10,000 x 8,685,666 ops/sec ±1.81% (121 runs sampled)'

'DW-Cache simulation 10,000 x 7,317,621 ops/sec ±1.42% (120 runs sampled)'

'Clock    simulation 100,000 x 7,417,826 ops/sec ±1.60% (118 runs sampled)'

'ISCCache simulation 100,000 x 4,523,157 ops/sec ±1.22% (117 runs sampled)'

'LRUCache simulation 100,000 x 5,424,344 ops/sec ±2.10% (119 runs sampled)'

'DW-Cache simulation 100,000 x 4,190,537 ops/sec ±1.44% (113 runs sampled)'

'Clock    simulation 1,000,000 x 4,519,623 ops/sec ±3.63% (106 runs sampled)'

'ISCCache simulation 1,000,000 x 2,081,961 ops/sec ±3.35% (101 runs sampled)'

'LRUCache simulation 1,000,000 x 2,686,808 ops/sec ±3.88% (103 runs sampled)'

'DW-Cache simulation 1,000,000 x 2,481,012 ops/sec ±2.54% (111 runs sampled)'
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
