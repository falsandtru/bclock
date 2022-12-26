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
'Clock    new x 982,257 ops/sec ±4.80% (102 runs sampled)'

'ISCCache new x 11,457 ops/sec ±1.49% (117 runs sampled)'

'LRUCache new x 21,184,221 ops/sec ±0.18% (123 runs sampled)'

'DW-Cache new x 5,459,649 ops/sec ±0.41% (123 runs sampled)'

'Clock    simulation 100 x 10,520,040 ops/sec ±2.24% (120 runs sampled)'

'ISCCache simulation 100 x 8,148,950 ops/sec ±1.87% (119 runs sampled)'

'LRUCache simulation 100 x 9,110,929 ops/sec ±2.52% (118 runs sampled)'

'DW-Cache simulation 100 x 6,778,262 ops/sec ±2.27% (120 runs sampled)'

'Clock    simulation 1,000 x 8,738,216 ops/sec ±2.20% (118 runs sampled)'

'ISCCache simulation 1,000 x 7,298,708 ops/sec ±1.85% (119 runs sampled)'

'LRUCache simulation 1,000 x 8,120,011 ops/sec ±2.55% (117 runs sampled)'

'DW-Cache simulation 1,000 x 6,656,796 ops/sec ±2.28% (119 runs sampled)'

'Clock    simulation 10,000 x 8,546,724 ops/sec ±2.24% (119 runs sampled)'

'ISCCache simulation 10,000 x 6,479,979 ops/sec ±1.81% (120 runs sampled)'

'LRUCache simulation 10,000 x 7,455,903 ops/sec ±2.42% (120 runs sampled)'

'DW-Cache simulation 10,000 x 6,469,169 ops/sec ±1.95% (121 runs sampled)'

'Clock    simulation 100,000 x 5,733,062 ops/sec ±1.61% (118 runs sampled)'

'ISCCache simulation 100,000 x 3,179,438 ops/sec ±1.84% (109 runs sampled)'

'LRUCache simulation 100,000 x 3,746,025 ops/sec ±2.09% (116 runs sampled)'

'DW-Cache simulation 100,000 x 3,319,309 ops/sec ±2.16% (114 runs sampled)'

'Clock    simulation 1,000,000 x 2,949,250 ops/sec ±3.75% (104 runs sampled)'

'ISCCache simulation 1,000,000 x 1,487,123 ops/sec ±3.06% (100 runs sampled)'

'LRUCache simulation 1,000,000 x 1,725,359 ops/sec ±4.29% (106 runs sampled)'

'DW-Cache simulation 1,000,000 x 1,740,517 ops/sec ±2.10% (110 runs sampled)'
```

```ts
const key = random() < 0.8
  ? random() * capacity * 1 | 0
  : random() * capacity * 9 + capacity | 0;
cache.get(key) ?? cache.set(key, {});
```

```
'Clock    set 10 100% x 22,305,874 ops/sec ±0.22% (123 runs sampled)'

'ISCCache set 10 100% x 12,731,297 ops/sec ±0.78% (121 runs sampled)'

'LRUCache set 10 100% x 23,158,603 ops/sec ±0.95% (121 runs sampled)'

'DW-Cache set 10 100% x 17,736,787 ops/sec ±0.85% (123 runs sampled)'

'Clock    set 100 100% x 19,494,770 ops/sec ±1.31% (122 runs sampled)'

'ISCCache set 100 100% x 11,676,109 ops/sec ±0.86% (122 runs sampled)'

'LRUCache set 100 100% x 19,785,985 ops/sec ±1.06% (121 runs sampled)'

'DW-Cache set 100 100% x 15,803,401 ops/sec ±0.91% (122 runs sampled)'

'Clock    set 1,000 100% x 18,081,653 ops/sec ±1.12% (122 runs sampled)'

'ISCCache set 1,000 100% x 11,678,237 ops/sec ±1.01% (122 runs sampled)'

'LRUCache set 1,000 100% x 18,168,980 ops/sec ±1.08% (121 runs sampled)'

'DW-Cache set 1,000 100% x 14,243,513 ops/sec ±0.85% (122 runs sampled)'

'Clock    set 10,000 100% x 16,114,965 ops/sec ±1.45% (120 runs sampled)'

'ISCCache set 10,000 100% x 8,289,177 ops/sec ±0.88% (121 runs sampled)'

'LRUCache set 10,000 100% x 15,332,748 ops/sec ±1.16% (120 runs sampled)'

'DW-Cache set 10,000 100% x 11,754,163 ops/sec ±1.01% (122 runs sampled)'

'Clock    set 100,000 100% x 5,425,458 ops/sec ±2.17% (116 runs sampled)'

'ISCCache set 100,000 100% x 2,514,664 ops/sec ±2.03% (114 runs sampled)'

'LRUCache set 100,000 100% x 4,430,935 ops/sec ±2.66% (115 runs sampled)'

'DW-Cache set 100,000 100% x 3,247,580 ops/sec ±2.36% (111 runs sampled)'

'Clock    set 1,000,000 100% x 1,677,874 ops/sec ±4.51% (100 runs sampled)'

'ISCCache set 1,000,000 100% x 993,312 ops/sec ±4.33% (104 runs sampled)'

'LRUCache set 1,000,000 100% x 1,478,251 ops/sec ±7.13% (100 runs sampled)'

'DW-Cache set 1,000,000 100% x 1,267,294 ops/sec ±6.20% (105 runs sampled)'

'Clock    get 10 100% x 32,404,716 ops/sec ±1.00% (122 runs sampled)'

'ISCCache get 10 100% x 19,908,493 ops/sec ±0.68% (122 runs sampled)'

'LRUCache get 10 100% x 21,565,802 ops/sec ±0.93% (123 runs sampled)'

'DW-Cache get 10 100% x 17,865,338 ops/sec ±0.91% (122 runs sampled)'

'Clock    get 100 100% x 25,475,779 ops/sec ±0.87% (123 runs sampled)'

'ISCCache get 100 100% x 18,886,910 ops/sec ±0.90% (122 runs sampled)'

'LRUCache get 100 100% x 16,811,993 ops/sec ±1.08% (123 runs sampled)'

'DW-Cache get 100 100% x 15,185,083 ops/sec ±1.08% (122 runs sampled)'

'Clock    get 1,000 100% x 24,567,618 ops/sec ±0.85% (123 runs sampled)'

'ISCCache get 1,000 100% x 18,246,146 ops/sec ±0.87% (122 runs sampled)'

'LRUCache get 1,000 100% x 15,306,355 ops/sec ±0.13% (123 runs sampled)'

'DW-Cache get 1,000 100% x 14,289,403 ops/sec ±1.01% (123 runs sampled)'

'Clock    get 10,000 100% x 24,723,493 ops/sec ±0.93% (122 runs sampled)'

'ISCCache get 10,000 100% x 16,847,125 ops/sec ±0.96% (122 runs sampled)'

'LRUCache get 10,000 100% x 13,870,137 ops/sec ±1.13% (122 runs sampled)'

'DW-Cache get 10,000 100% x 12,798,713 ops/sec ±0.96% (122 runs sampled)'

'Clock    get 100,000 100% x 16,974,684 ops/sec ±0.73% (121 runs sampled)'

'ISCCache get 100,000 100% x 6,046,667 ops/sec ±1.15% (118 runs sampled)'

'LRUCache get 100,000 100% x 4,794,079 ops/sec ±1.60% (114 runs sampled)'

'DW-Cache get 100,000 100% x 3,715,091 ops/sec ±1.36% (116 runs sampled)'

'Clock    get 1,000,000 100% x 4,020,431 ops/sec ±0.46% (119 runs sampled)'

'ISCCache get 1,000,000 100% x 1,638,041 ops/sec ±0.36% (121 runs sampled)'

'LRUCache get 1,000,000 100% x 1,658,803 ops/sec ±0.33% (118 runs sampled)'

'DW-Cache get 1,000,000 100% x 1,596,587 ops/sec ±0.35% (118 runs sampled)'
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
