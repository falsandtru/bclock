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
TRC-C: spica/tlru (spica/trul.clock)<br>
TRC-L: spica/trul.lru<br>
DW-Cache: spica/cache<br>

```
'Clock new x 1,762,855 ops/sec ±3.54% (110 runs sampled)'

'ISC   new x 18,054 ops/sec ±0.46% (120 runs sampled)'

'LRU   new x 26,663,820 ops/sec ±0.95% (122 runs sampled)'

'TRC-C new x 25,456,476 ops/sec ±1.33% (121 runs sampled)'

'TRC-L new x 25,456,051 ops/sec ±1.20% (121 runs sampled)'

'DWC   new x 6,660,939 ops/sec ±0.46% (122 runs sampled)'

'Clock simulation 100 10% x 9,414,387 ops/sec ±0.63% (122 runs sampled)'

'ISC   simulation 100 10% x 8,984,969 ops/sec ±0.72% (121 runs sampled)'

'LRU   simulation 100 10% x 10,790,718 ops/sec ±0.37% (122 runs sampled)'

'TRC-C simulation 100 10% x 10,583,002 ops/sec ±0.54% (122 runs sampled)'

'TRC-L simulation 100 10% x 9,622,956 ops/sec ±0.46% (123 runs sampled)'

'DWC   simulation 100 10% x 6,899,358 ops/sec ±0.52% (122 runs sampled)'

'Clock simulation 1,000 10% x 9,403,202 ops/sec ±0.50% (122 runs sampled)'

'ISC   simulation 1,000 10% x 8,281,707 ops/sec ±0.68% (123 runs sampled)'

'LRU   simulation 1,000 10% x 9,390,248 ops/sec ±0.64% (122 runs sampled)'

'TRC-C simulation 1,000 10% x 9,371,450 ops/sec ±0.60% (122 runs sampled)'

'TRC-L simulation 1,000 10% x 8,769,717 ops/sec ±0.42% (122 runs sampled)'

'DWC   simulation 1,000 10% x 6,880,442 ops/sec ±0.61% (123 runs sampled)'

'Clock simulation 10,000 10% x 9,365,785 ops/sec ±0.44% (121 runs sampled)'

'ISC   simulation 10,000 10% x 6,765,160 ops/sec ±0.72% (122 runs sampled)'

'LRU   simulation 10,000 10% x 8,766,599 ops/sec ±0.85% (121 runs sampled)'

'TRC-C simulation 10,000 10% x 8,518,274 ops/sec ±1.50% (121 runs sampled)'

'TRC-L simulation 10,000 10% x 7,622,128 ops/sec ±0.60% (121 runs sampled)'

'DWC   simulation 10,000 10% x 5,847,304 ops/sec ±0.85% (122 runs sampled)'

'Clock simulation 100,000 10% x 5,800,245 ops/sec ±1.68% (115 runs sampled)'

'ISC   simulation 100,000 10% x 3,428,512 ops/sec ±1.36% (116 runs sampled)'

'LRU   simulation 100,000 10% x 5,286,012 ops/sec ±2.12% (113 runs sampled)'

'TRC-C simulation 100,000 10% x 5,640,959 ops/sec ±2.43% (112 runs sampled)'

'TRC-L simulation 100,000 10% x 4,929,609 ops/sec ±2.54% (112 runs sampled)'

'DWC   simulation 100,000 10% x 3,803,619 ops/sec ±2.14% (107 runs sampled)'

'Clock simulation 1,000,000 10% x 2,652,173 ops/sec ±3.13% (103 runs sampled)'

'ISC   simulation 1,000,000 10% x 1,460,486 ops/sec ±3.66% (105 runs sampled)'

'LRU   simulation 1,000,000 10% x 2,099,026 ops/sec ±4.48% (95 runs sampled)'

'TRC-C simulation 1,000,000 10% x 2,111,358 ops/sec ±5.19% (92 runs sampled)'

'TRC-L simulation 1,000,000 10% x 2,027,782 ops/sec ±4.41% (96 runs sampled)'

'DWC   simulation 1,000,000 10% x 2,524,424 ops/sec ±4.58% (97 runs sampled)'

'Clock simulation 100 90% x 20,881,968 ops/sec ±0.85% (121 runs sampled)'

'ISC   simulation 100 90% x 19,882,887 ops/sec ±0.62% (121 runs sampled)'

'LRU   simulation 100 90% x 19,270,216 ops/sec ±0.77% (122 runs sampled)'

'TRC-C simulation 100 90% x 18,564,258 ops/sec ±0.55% (122 runs sampled)'

'TRC-L simulation 100 90% x 16,936,115 ops/sec ±0.63% (122 runs sampled)'

'DWC   simulation 100 90% x 8,753,497 ops/sec ±0.42% (122 runs sampled)'

'Clock simulation 1,000 90% x 19,710,867 ops/sec ±0.67% (122 runs sampled)'

'ISC   simulation 1,000 90% x 17,133,972 ops/sec ±0.54% (121 runs sampled)'

'LRU   simulation 1,000 90% x 16,805,166 ops/sec ±0.72% (121 runs sampled)'

'TRC-C simulation 1,000 90% x 16,661,753 ops/sec ±0.63% (122 runs sampled)'

'TRC-L simulation 1,000 90% x 15,223,439 ops/sec ±0.55% (123 runs sampled)'

'DWC   simulation 1,000 90% x 8,646,913 ops/sec ±0.40% (122 runs sampled)'

'Clock simulation 10,000 90% x 17,716,331 ops/sec ±0.70% (121 runs sampled)'

'ISC   simulation 10,000 90% x 14,133,454 ops/sec ±0.77% (122 runs sampled)'

'LRU   simulation 10,000 90% x 12,002,433 ops/sec ±1.28% (120 runs sampled)'

'TRC-C simulation 10,000 90% x 11,484,228 ops/sec ±0.61% (121 runs sampled)'

'TRC-L simulation 10,000 90% x 10,433,045 ops/sec ±0.53% (120 runs sampled)'

'DWC   simulation 10,000 90% x 7,453,628 ops/sec ±0.93% (121 runs sampled)'

'Clock simulation 100,000 90% x 10,401,128 ops/sec ±1.42% (115 runs sampled)'

'ISC   simulation 100,000 90% x 7,706,599 ops/sec ±1.16% (115 runs sampled)'

'LRU   simulation 100,000 90% x 7,391,029 ops/sec ±2.26% (116 runs sampled)'

'TRC-C simulation 100,000 90% x 7,135,837 ops/sec ±2.01% (114 runs sampled)'

'TRC-L simulation 100,000 90% x 6,756,826 ops/sec ±1.97% (115 runs sampled)'

'DWC   simulation 100,000 90% x 5,457,505 ops/sec ±1.59% (116 runs sampled)'

'Clock simulation 1,000,000 90% x 4,706,093 ops/sec ±3.22% (104 runs sampled)'

'ISC   simulation 1,000,000 90% x 2,765,132 ops/sec ±3.70% (105 runs sampled)'

'LRU   simulation 1,000,000 90% x 2,177,354 ops/sec ±2.42% (114 runs sampled)'

'TRC-C simulation 1,000,000 90% x 2,182,726 ops/sec ±2.55% (107 runs sampled)'

'TRC-L simulation 1,000,000 90% x 2,099,229 ops/sec ±2.59% (105 runs sampled)'

'DWC   simulation 1,000,000 90% x 1,712,921 ops/sec ±2.24% (112 runs sampled)'

'ISC   simulation 100 90% expire x 4,288,276 ops/sec ±4.60% (110 runs sampled)'

'DWC   simulation 100 90% expire x 7,340,468 ops/sec ±0.35% (123 runs sampled)'

'ISC   simulation 1,000 90% expire x 4,386,285 ops/sec ±3.49% (116 runs sampled)'

'DWC   simulation 1,000 90% expire x 6,780,647 ops/sec ±0.62% (122 runs sampled)'

'ISC   simulation 10,000 90% expire x 3,837,624 ops/sec ±2.00% (117 runs sampled)'

'DWC   simulation 10,000 90% expire x 6,075,286 ops/sec ±1.23% (121 runs sampled)'

'ISC   simulation 100,000 90% expire x 2,868,297 ops/sec ±2.94% (112 runs sampled)'

'DWC   simulation 100,000 90% expire x 3,122,360 ops/sec ±2.37% (104 runs sampled)'

'ISC   simulation 1,000,000 90% expire x 542,304 ops/sec ±5.11% (106 runs sampled)'

'DWC   simulation 1,000,000 90% expire x 626,548 ops/sec ±4.23% (100 runs sampled)'
```

Clock outperforms LRU, especially in the get operation by marking algorithm.
Therefore, when the cache is less likely to overflow, Clock is particularly faster than LRU.

```
'Clock get hit 100 x 27,596,711 ops/sec ±0.99% (122 runs sampled)'

'ISC   get hit 100 x 23,631,355 ops/sec ±0.75% (122 runs sampled)'

'LRU   get hit 100 x 21,809,759 ops/sec ±0.63% (122 runs sampled)'

'TRC-C get hit 100 x 23,100,835 ops/sec ±1.09% (121 runs sampled)'

'TRC-L get hit 100 x 21,429,424 ops/sec ±0.57% (123 runs sampled)'

'DWC   get hit 100 x 14,766,611 ops/sec ±0.66% (122 runs sampled)'

'Clock get hit 1,000 x 27,217,959 ops/sec ±0.98% (121 runs sampled)'

'ISC   get hit 1,000 x 21,641,052 ops/sec ±0.70% (122 runs sampled)'

'LRU   get hit 1,000 x 19,513,383 ops/sec ±0.90% (121 runs sampled)'

'TRC-C get hit 1,000 x 21,105,948 ops/sec ±0.79% (121 runs sampled)'

'TRC-L get hit 1,000 x 19,310,983 ops/sec ±0.54% (122 runs sampled)'

'DWC   get hit 1,000 x 12,912,664 ops/sec ±0.47% (122 runs sampled)'

'Clock get hit 10,000 x 28,196,039 ops/sec ±1.06% (120 runs sampled)'

'ISC   get hit 10,000 x 19,915,781 ops/sec ±0.62% (121 runs sampled)'

'LRU   get hit 10,000 x 14,099,912 ops/sec ±0.88% (121 runs sampled)'

'TRC-C get hit 10,000 x 14,985,840 ops/sec ±0.90% (121 runs sampled)'

'TRC-L get hit 10,000 x 13,819,010 ops/sec ±0.79% (122 runs sampled)'

'DWC   get hit 10,000 x 10,413,001 ops/sec ±0.66% (122 runs sampled)'

'Clock get hit 100,000 x 16,476,192 ops/sec ±1.03% (120 runs sampled)'

'ISC   get hit 100,000 x 9,957,174 ops/sec ±0.51% (123 runs sampled)'

'LRU   get hit 100,000 x 8,688,197 ops/sec ±0.83% (120 runs sampled)'

'TRC-C get hit 100,000 x 8,852,077 ops/sec ±1.28% (120 runs sampled)'

'TRC-L get hit 100,000 x 8,348,773 ops/sec ±1.07% (121 runs sampled)'

'DWC   get hit 100,000 x 7,126,031 ops/sec ±0.83% (122 runs sampled)'

'Clock get hit 1,000,000 x 9,955,039 ops/sec ±1.88% (117 runs sampled)'

'ISC   get hit 1,000,000 x 3,906,286 ops/sec ±2.69% (113 runs sampled)'

'LRU   get hit 1,000,000 x 2,415,531 ops/sec ±1.47% (117 runs sampled)'

'TRC-C get hit 1,000,000 x 2,268,161 ops/sec ±2.66% (116 runs sampled)'

'TRC-L get hit 1,000,000 x 2,633,628 ops/sec ±1.10% (118 runs sampled)'

'DWC   get hit 1,000,000 x 2,217,895 ops/sec ±0.92% (117 runs sampled)'

'Clock set miss 100 x 8,758,950 ops/sec ±0.91% (117 runs sampled)'

'ISC   set miss 100 x 9,296,804 ops/sec ±0.48% (121 runs sampled)'

'LRU   set miss 100 x 10,147,622 ops/sec ±0.58% (121 runs sampled)'

'TRC-C set miss 100 x 9,839,048 ops/sec ±0.60% (120 runs sampled)'

'TRC-L set miss 100 x 9,289,720 ops/sec ±0.56% (124 runs sampled)'

'DWC   set miss 100 x 8,512,914 ops/sec ±0.57% (122 runs sampled)'

'Clock set miss 1,000 x 8,809,238 ops/sec ±0.77% (118 runs sampled)'

'ISC   set miss 1,000 x 8,247,771 ops/sec ±0.58% (122 runs sampled)'

'LRU   set miss 1,000 x 8,830,509 ops/sec ±0.94% (117 runs sampled)'

'TRC-C set miss 1,000 x 8,829,582 ops/sec ±0.64% (119 runs sampled)'

'TRC-L set miss 1,000 x 8,086,730 ops/sec ±0.46% (121 runs sampled)'

'DWC   set miss 1,000 x 7,560,890 ops/sec ±0.74% (118 runs sampled)'

'Clock set miss 10,000 x 9,502,782 ops/sec ±0.50% (122 runs sampled)'

'ISC   set miss 10,000 x 7,927,609 ops/sec ±0.40% (122 runs sampled)'

'LRU   set miss 10,000 x 9,412,136 ops/sec ±0.55% (121 runs sampled)'

'TRC-C set miss 10,000 x 9,184,060 ops/sec ±0.45% (122 runs sampled)'

'TRC-L set miss 10,000 x 7,909,509 ops/sec ±0.97% (121 runs sampled)'

'DWC   set miss 10,000 x 7,428,354 ops/sec ±0.84% (121 runs sampled)'

'Clock set miss 100,000 x 5,883,863 ops/sec ±1.68% (116 runs sampled)'

'ISC   set miss 100,000 x 4,739,615 ops/sec ±1.60% (115 runs sampled)'

'LRU   set miss 100,000 x 6,086,843 ops/sec ±2.02% (115 runs sampled)'

'TRC-C set miss 100,000 x 5,957,357 ops/sec ±1.99% (115 runs sampled)'

'TRC-L set miss 100,000 x 5,206,838 ops/sec ±2.42% (114 runs sampled)'

'DWC   set miss 100,000 x 5,304,265 ops/sec ±2.26% (113 runs sampled)'

'Clock set miss 1,000,000 x 2,692,721 ops/sec ±4.15% (102 runs sampled)'

'ISC   set miss 1,000,000 x 2,320,462 ops/sec ±5.03% (100 runs sampled)'

'LRU   set miss 1,000,000 x 2,687,115 ops/sec ±3.72% (107 runs sampled)'

'TRC-C set miss 1,000,000 x 2,943,312 ops/sec ±3.83% (106 runs sampled)'

'TRC-L set miss 1,000,000 x 2,690,687 ops/sec ±4.00% (102 runs sampled)'

'DWC   set miss 1,000,000 x 3,183,074 ops/sec ±4.12% (105 runs sampled)'
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
