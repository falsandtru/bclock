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
'Clock    new x 1,681,457 ops/sec ±1.18% (117 runs sampled)'

'ISCCache new x 17,725 ops/sec ±0.84% (119 runs sampled)'

'LRUCache new x 32,201,503 ops/sec ±0.26% (123 runs sampled)'

'DW-Cache new x 6,962,509 ops/sec ±0.28% (123 runs sampled)'

'Clock    simulation 100 x 20,067,017 ops/sec ±0.27% (122 runs sampled)'

'ISCCache simulation 100 x 13,461,209 ops/sec ±0.36% (122 runs sampled)'

'LRUCache simulation 100 x 16,250,516 ops/sec ±0.53% (123 runs sampled)'

'DW-Cache simulation 100 x 7,809,927 ops/sec ±0.29% (123 runs sampled)'

'Clock    simulation 1,000 x 16,387,821 ops/sec ±0.73% (123 runs sampled)'

'ISCCache simulation 1,000 x 11,893,246 ops/sec ±0.27% (123 runs sampled)'

'LRUCache simulation 1,000 x 13,991,155 ops/sec ±0.50% (123 runs sampled)'

'DW-Cache simulation 1,000 x 7,221,664 ops/sec ±0.33% (123 runs sampled)'

'Clock    simulation 10,000 x 14,583,648 ops/sec ±0.51% (123 runs sampled)'

'ISCCache simulation 10,000 x 9,693,221 ops/sec ±0.58% (122 runs sampled)'

'LRUCache simulation 10,000 x 10,558,716 ops/sec ±0.82% (122 runs sampled)'

'DW-Cache simulation 10,000 x 6,604,530 ops/sec ±0.25% (123 runs sampled)'

'Clock    simulation 100,000 x 8,904,873 ops/sec ±1.76% (118 runs sampled)'

'ISCCache simulation 100,000 x 5,527,676 ops/sec ±1.70% (114 runs sampled)'

'LRUCache simulation 100,000 x 6,309,913 ops/sec ±2.23% (114 runs sampled)'

'DW-Cache simulation 100,000 x 4,970,814 ops/sec ±2.23% (109 runs sampled)'

'Clock    simulation 1,000,000 x 4,708,193 ops/sec ±4.16% (102 runs sampled)'

'ISCCache simulation 1,000,000 x 2,396,780 ops/sec ±4.46% (95 runs sampled)'

'LRUCache simulation 1,000,000 x 2,290,716 ops/sec ±3.21% (107 runs sampled)'

'DW-Cache simulation 1,000,000 x 2,088,055 ops/sec ±3.22% (110 runs sampled)'
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
'Clock    get 100 100% x 36,078,291 ops/sec ±0.51% (124 runs sampled)'

'ISCCache get 100 100% x 27,096,236 ops/sec ±0.19% (123 runs sampled)'

'LRUCache get 100 100% x 23,671,314 ops/sec ±0.23% (124 runs sampled)'

'DW-Cache get 100 100% x 16,503,470 ops/sec ±0.29% (124 runs sampled)'

'Clock    get 1,000 100% x 34,388,848 ops/sec ±0.60% (124 runs sampled)'

'ISCCache get 1,000 100% x 24,390,679 ops/sec ±0.23% (124 runs sampled)'

'LRUCache get 1,000 100% x 21,148,655 ops/sec ±0.16% (124 runs sampled)'

'DW-Cache get 1,000 100% x 14,675,434 ops/sec ±0.74% (123 runs sampled)'

'Clock    get 10,000 100% x 36,257,617 ops/sec ±0.66% (123 runs sampled)'

'ISCCache get 10,000 100% x 22,482,585 ops/sec ±0.59% (123 runs sampled)'

'LRUCache get 10,000 100% x 15,681,310 ops/sec ±0.70% (123 runs sampled)'

'DW-Cache get 10,000 100% x 12,452,594 ops/sec ±0.24% (124 runs sampled)'

'Clock    get 100,000 100% x 21,317,730 ops/sec ±0.78% (124 runs sampled)'

'ISCCache get 100,000 100% x 10,839,064 ops/sec ±0.39% (123 runs sampled)'

'LRUCache get 100,000 100% x 9,619,437 ops/sec ±0.78% (121 runs sampled)'

'DW-Cache get 100,000 100% x 8,205,906 ops/sec ±1.30% (120 runs sampled)'

'Clock    get 1,000,000 100% x 13,657,458 ops/sec ±1.95% (118 runs sampled)'

'ISCCache get 1,000,000 100% x 5,127,336 ops/sec ±2.76% (120 runs sampled)'

'LRUCache get 1,000,000 100% x 2,334,095 ops/sec ±2.06% (106 runs sampled)'

'DW-Cache get 1,000,000 100% x 2,355,960 ops/sec ±2.52% (109 runs sampled)'
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
