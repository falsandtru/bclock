# Bitwise Clock

![CI](https://github.com/falsandtru/bclock/workflows/CI/badge.svg)

A clock variant cache algorithm ***2x faster*** than LRU.

- ***2x faster*** than [lru-cache](https://www.npmjs.com/package/lru-cache) which is the most popular and fastest cache package except bclock.
- ***32x faster*** than the original clock algorithm in worst-case time complexity.

## Maintenance

The source code is maintained on the next source repository.

https://github.com/falsandtru/spica

## Throughput

Clock outperforms LRU, especially in the get operation by marking algorithm.
Therefore, when the cache is less likely to overflow, Clock is particularly faster than LRU.

- Clock: spica/clock
- ILRU: lru-cache (https://www.npmjs.com/package/lru-cache)
- LRU: spica/lru
- TRC-C: spica/tlru (spica/tlru.clock)
- TRC-L: spica/tlru.lru
- DWC: spica/cache

https://github.com/falsandtru/spica/blob/master/benchmark/cache.ts

```
    OS: Linux 6.2 Ubuntu 22.04.4 LTS 22.04.4 LTS (Jammy Jellyfish)
    CPU: (4) x64 AMD EPYC 7763 64-Core Processor
    Memory: 14.61 GB / 15.61 GB
    Container: Yes

'Clock new x 1,718,249 ops/sec ±2.88% (115 runs sampled)'

'ILRU  new x 17,988 ops/sec ±0.63% (119 runs sampled)'

'LRU   new x 27,226,331 ops/sec ±1.17% (120 runs sampled)'

'TRC-C new x 25,876,900 ops/sec ±1.21% (120 runs sampled)'

'TRC-L new x 25,833,554 ops/sec ±1.22% (121 runs sampled)'

'DWC   new x 8,576,715 ops/sec ±0.40% (122 runs sampled)'

'Clock get hit 100 x 27,746,192 ops/sec ±0.83% (121 runs sampled)'

'ILRU  get hit 100 x 23,474,529 ops/sec ±0.77% (120 runs sampled)'

'LRU   get hit 100 x 23,455,171 ops/sec ±0.87% (122 runs sampled)'

'TRC-C get hit 100 x 23,299,912 ops/sec ±0.85% (122 runs sampled)'

'TRC-L get hit 100 x 21,373,324 ops/sec ±1.15% (121 runs sampled)'

'DWC   get hit 100 x 12,580,738 ops/sec ±0.45% (122 runs sampled)'

'Clock get hit 1,000 x 27,780,609 ops/sec ±0.93% (122 runs sampled)'

'ILRU  get hit 1,000 x 21,726,130 ops/sec ±0.61% (122 runs sampled)'

'LRU   get hit 1,000 x 19,977,662 ops/sec ±0.52% (123 runs sampled)'

'TRC-C get hit 1,000 x 21,257,134 ops/sec ±0.70% (122 runs sampled)'

'TRC-L get hit 1,000 x 19,402,301 ops/sec ±0.68% (121 runs sampled)'

'DWC   get hit 1,000 x 11,274,674 ops/sec ±0.58% (123 runs sampled)'

'Clock get hit 10,000 x 28,771,973 ops/sec ±0.91% (121 runs sampled)'

'ILRU  get hit 10,000 x 20,439,071 ops/sec ±0.96% (121 runs sampled)'

'LRU   get hit 10,000 x 15,891,928 ops/sec ±0.67% (122 runs sampled)'

'TRC-C get hit 10,000 x 16,845,037 ops/sec ±0.78% (122 runs sampled)'

'TRC-L get hit 10,000 x 15,431,179 ops/sec ±1.02% (121 runs sampled)'

'DWC   get hit 10,000 x 10,411,739 ops/sec ±0.40% (123 runs sampled)'

'Clock get hit 100,000 x 16,731,505 ops/sec ±1.37% (120 runs sampled)'

'ILRU  get hit 100,000 x 10,075,293 ops/sec ±0.54% (122 runs sampled)'

'LRU   get hit 100,000 x 9,249,344 ops/sec ±0.64% (122 runs sampled)'

'TRC-C get hit 100,000 x 9,907,274 ops/sec ±0.73% (121 runs sampled)'

'TRC-L get hit 100,000 x 9,359,257 ops/sec ±0.49% (122 runs sampled)'

'DWC   get hit 100,000 x 7,366,617 ops/sec ±1.13% (120 runs sampled)'

'Clock get hit 1,000,000 x 9,266,479 ops/sec ±2.51% (112 runs sampled)'

'ILRU  get hit 1,000,000 x 3,316,515 ops/sec ±2.87% (109 runs sampled)'

'LRU   get hit 1,000,000 x 2,784,662 ops/sec ±1.13% (117 runs sampled)'

'TRC-C get hit 1,000,000 x 2,820,264 ops/sec ±1.21% (116 runs sampled)'

'TRC-L get hit 1,000,000 x 2,695,633 ops/sec ±1.51% (120 runs sampled)'

'DWC   get hit 1,000,000 x 2,442,293 ops/sec ±0.94% (119 runs sampled)'

'Clock simulation 100 10% x 10,013,697 ops/sec ±0.64% (123 runs sampled)'

'ILRU  simulation 100 10% x 8,635,492 ops/sec ±0.61% (122 runs sampled)'

'LRU   simulation 100 10% x 10,504,423 ops/sec ±0.93% (121 runs sampled)'

'TRC-C simulation 100 10% x 10,286,201 ops/sec ±0.83% (121 runs sampled)'

'TRC-L simulation 100 10% x 9,138,453 ops/sec ±0.87% (121 runs sampled)'

'DWC   simulation 100 10% x 6,526,717 ops/sec ±0.30% (123 runs sampled)'

'Clock simulation 1,000 10% x 10,016,720 ops/sec ±0.37% (122 runs sampled)'

'ILRU  simulation 1,000 10% x 7,865,319 ops/sec ±0.71% (121 runs sampled)'

'LRU   simulation 1,000 10% x 10,125,647 ops/sec ±0.40% (123 runs sampled)'

'TRC-C simulation 1,000 10% x 9,527,825 ops/sec ±0.97% (120 runs sampled)'

'TRC-L simulation 1,000 10% x 8,363,899 ops/sec ±0.91% (120 runs sampled)'

'DWC   simulation 1,000 10% x 6,873,911 ops/sec ±0.21% (123 runs sampled)'

'Clock simulation 10,000 10% x 8,913,804 ops/sec ±0.41% (122 runs sampled)'

'ILRU  simulation 10,000 10% x 6,738,489 ops/sec ±0.33% (116 runs sampled)'

'LRU   simulation 10,000 10% x 8,478,551 ops/sec ±0.68% (123 runs sampled)'

'TRC-C simulation 10,000 10% x 8,255,806 ops/sec ±0.54% (123 runs sampled)'

'TRC-L simulation 10,000 10% x 7,290,336 ops/sec ±0.66% (120 runs sampled)'

'DWC   simulation 10,000 10% x 5,919,884 ops/sec ±0.28% (122 runs sampled)'

'Clock simulation 100,000 10% x 5,914,679 ops/sec ±1.76% (118 runs sampled)'

'ILRU  simulation 100,000 10% x 3,570,629 ops/sec ±1.54% (116 runs sampled)'

'LRU   simulation 100,000 10% x 5,724,682 ops/sec ±2.09% (118 runs sampled)'

'TRC-C simulation 100,000 10% x 6,105,347 ops/sec ±2.17% (116 runs sampled)'

'TRC-L simulation 100,000 10% x 5,421,814 ops/sec ±2.06% (116 runs sampled)'

'DWC   simulation 100,000 10% x 4,446,710 ops/sec ±1.89% (116 runs sampled)'

'Clock simulation 1,000,000 10% x 2,836,324 ops/sec ±3.44% (106 runs sampled)'

'ILRU  simulation 1,000,000 10% x 1,602,371 ops/sec ±2.70% (107 runs sampled)'

'LRU   simulation 1,000,000 10% x 2,355,509 ops/sec ±3.30% (106 runs sampled)'

'TRC-C simulation 1,000,000 10% x 2,419,422 ops/sec ±2.85% (103 runs sampled)'

'TRC-L simulation 1,000,000 10% x 2,201,640 ops/sec ±3.05% (105 runs sampled)'

'DWC   simulation 1,000,000 10% x 2,823,768 ops/sec ±4.18% (105 runs sampled)'

'Clock simulation 100 50% x 11,476,275 ops/sec ±0.45% (122 runs sampled)'

'ILRU  simulation 100 50% x 10,695,622 ops/sec ±0.41% (122 runs sampled)'

'LRU   simulation 100 50% x 12,423,614 ops/sec ±0.48% (122 runs sampled)'

'TRC-C simulation 100 50% x 11,687,869 ops/sec ±0.41% (122 runs sampled)'

'TRC-L simulation 100 50% x 11,121,712 ops/sec ±0.58% (122 runs sampled)'

'DWC   simulation 100 50% x 6,432,098 ops/sec ±0.28% (124 runs sampled)'

'Clock simulation 1,000 50% x 11,278,805 ops/sec ±0.56% (123 runs sampled)'

'ILRU  simulation 1,000 50% x 9,798,605 ops/sec ±0.34% (122 runs sampled)'

'LRU   simulation 1,000 50% x 11,347,196 ops/sec ±0.40% (122 runs sampled)'

'TRC-C simulation 1,000 50% x 10,917,028 ops/sec ±0.28% (123 runs sampled)'

'TRC-L simulation 1,000 50% x 10,455,280 ops/sec ±0.39% (123 runs sampled)'

'DWC   simulation 1,000 50% x 6,215,658 ops/sec ±0.30% (123 runs sampled)'

'Clock simulation 10,000 50% x 10,044,259 ops/sec ±0.40% (122 runs sampled)'

'ILRU  simulation 10,000 50% x 8,118,211 ops/sec ±0.35% (123 runs sampled)'

'LRU   simulation 10,000 50% x 9,107,620 ops/sec ±1.14% (122 runs sampled)'

'TRC-C simulation 10,000 50% x 8,214,162 ops/sec ±0.67% (120 runs sampled)'

'TRC-L simulation 10,000 50% x 7,801,660 ops/sec ±1.41% (121 runs sampled)'

'DWC   simulation 10,000 50% x 4,915,591 ops/sec ±0.60% (123 runs sampled)'

'Clock simulation 100,000 50% x 6,815,193 ops/sec ±1.40% (118 runs sampled)'

'ILRU  simulation 100,000 50% x 4,578,924 ops/sec ±1.40% (115 runs sampled)'

'LRU   simulation 100,000 50% x 6,127,171 ops/sec ±1.66% (116 runs sampled)'

'TRC-C simulation 100,000 50% x 6,196,369 ops/sec ±1.74% (118 runs sampled)'

'TRC-L simulation 100,000 50% x 5,830,499 ops/sec ±1.68% (117 runs sampled)'

'DWC   simulation 100,000 50% x 3,940,748 ops/sec ±1.49% (111 runs sampled)'

'Clock simulation 1,000,000 50% x 3,232,871 ops/sec ±3.00% (103 runs sampled)'

'ILRU  simulation 1,000,000 50% x 1,750,395 ops/sec ±3.36% (108 runs sampled)'

'LRU   simulation 1,000,000 50% x 2,225,422 ops/sec ±2.85% (107 runs sampled)'

'TRC-C simulation 1,000,000 50% x 2,205,121 ops/sec ±3.82% (104 runs sampled)'

'TRC-L simulation 1,000,000 50% x 2,131,169 ops/sec ±3.75% (108 runs sampled)'

'DWC   simulation 1,000,000 50% x 2,021,860 ops/sec ±2.52% (104 runs sampled)'

'Clock simulation 100 90% x 17,288,235 ops/sec ±0.52% (122 runs sampled)'

'ILRU  simulation 100 90% x 16,946,532 ops/sec ±0.61% (122 runs sampled)'

'LRU   simulation 100 90% x 16,813,027 ops/sec ±0.44% (123 runs sampled)'

'TRC-C simulation 100 90% x 16,743,188 ops/sec ±0.50% (122 runs sampled)'

'TRC-L simulation 100 90% x 15,660,308 ops/sec ±0.54% (122 runs sampled)'

'DWC   simulation 100 90% x 8,217,193 ops/sec ±0.44% (123 runs sampled)'

'Clock simulation 1,000 90% x 16,339,056 ops/sec ±0.65% (122 runs sampled)'

'ILRU  simulation 1,000 90% x 14,831,917 ops/sec ±0.47% (121 runs sampled)'

'LRU   simulation 1,000 90% x 14,862,361 ops/sec ±0.49% (121 runs sampled)'

'TRC-C simulation 1,000 90% x 14,763,737 ops/sec ±0.46% (123 runs sampled)'

'TRC-L simulation 1,000 90% x 13,862,219 ops/sec ±0.51% (122 runs sampled)'

'DWC   simulation 1,000 90% x 8,416,098 ops/sec ±0.28% (123 runs sampled)'

'Clock simulation 10,000 90% x 14,564,733 ops/sec ±0.99% (121 runs sampled)'

'ILRU  simulation 10,000 90% x 12,088,973 ops/sec ±0.47% (123 runs sampled)'

'LRU   simulation 10,000 90% x 10,769,829 ops/sec ±0.51% (121 runs sampled)'

'TRC-C simulation 10,000 90% x 10,224,531 ops/sec ±1.03% (121 runs sampled)'

'TRC-L simulation 10,000 90% x 9,631,180 ops/sec ±0.45% (122 runs sampled)'

'DWC   simulation 10,000 90% x 7,088,806 ops/sec ±0.43% (122 runs sampled)'

'Clock simulation 100,000 90% x 9,458,259 ops/sec ±1.16% (116 runs sampled)'

'ILRU  simulation 100,000 90% x 7,171,011 ops/sec ±1.13% (116 runs sampled)'

'LRU   simulation 100,000 90% x 7,224,473 ops/sec ±1.77% (117 runs sampled)'

'TRC-C simulation 100,000 90% x 7,129,766 ops/sec ±2.34% (113 runs sampled)'

'TRC-L simulation 100,000 90% x 6,765,188 ops/sec ±2.00% (112 runs sampled)'

'DWC   simulation 100,000 90% x 5,446,218 ops/sec ±1.50% (116 runs sampled)'

'Clock simulation 1,000,000 90% x 4,329,004 ops/sec ±3.49% (104 runs sampled)'

'ILRU  simulation 1,000,000 90% x 2,584,893 ops/sec ±2.23% (108 runs sampled)'

'LRU   simulation 1,000,000 90% x 2,273,790 ops/sec ±1.98% (113 runs sampled)'

'TRC-C simulation 1,000,000 90% x 2,038,671 ops/sec ±2.55% (108 runs sampled)'

'TRC-L simulation 1,000,000 90% x 2,102,533 ops/sec ±2.35% (111 runs sampled)'

'DWC   simulation 1,000,000 90% x 1,857,414 ops/sec ±1.93% (113 runs sampled)'

'ILRU  simulation 100 90% expire x 4,268,085 ops/sec ±2.74% (116 runs sampled)'

'DWC   simulation 100 90% expire x 7,095,161 ops/sec ±1.17% (119 runs sampled)'

'ILRU  simulation 1,000 90% expire x 4,039,560 ops/sec ±3.60% (117 runs sampled)'

'DWC   simulation 1,000 90% expire x 7,278,554 ops/sec ±0.37% (120 runs sampled)'

'ILRU  simulation 10,000 90% expire x 3,515,365 ops/sec ±1.99% (117 runs sampled)'

'DWC   simulation 10,000 90% expire x 5,470,851 ops/sec ±0.88% (121 runs sampled)'

'ILRU  simulation 100,000 90% expire x 2,720,179 ops/sec ±2.12% (107 runs sampled)'

'DWC   simulation 100,000 90% expire x 3,303,021 ops/sec ±2.23% (105 runs sampled)'

'ILRU  simulation 1,000,000 90% expire x 1,404,398 ops/sec ±1.94% (111 runs sampled)'

'DWC   simulation 1,000,000 90% expire x 1,464,143 ops/sec ±1.60% (115 runs sampled)'
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
