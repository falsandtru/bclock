# Bitwise Clock

![CI](https://github.com/falsandtru/bclock/workflows/CI/badge.svg)

A clock variant cache algorithm ***2x faster*** than LRU.

- ***2x faster*** than [lru-cache](https://www.npmjs.com/package/lru-cache) which is the most popular and fastest cache package except bclock.
- ***32x faster*** than the original clock algorithm in worst-case time complexity.

## Maintenance

The source code is maintained on the next source repository.

https://github.com/falsandtru/spica

## Hit ratio

<!--
// https://www.chartjs.org/docs/latest/charts/line.html

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
        y: {
            min: 0,
        },
    },
    plugins: {
      title: {
        display: true,
        text: 'WL'
      }
    }
  },
};
-->

### WS1

<!--
const data = {
  labels: [1e6, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
  datasets: [
    {
      label: 'Optimal',
      data: [27.31, 41.28, 51.04, 57.8, 62.72, 65.85, 67.22, 67.22],
    },
    {
      label: 'LRU',
      data: [2.95, 6.09, 9.63, 21.6, 33.92, 45.74, 54.89, 61.4],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [2.93, 6.41, 11.29, 22.93, 35.27, 46.99, 55.816, 61.87],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [8.09, 18.03, 26.92, 35.88, 44.19, 51.66, 57.70, 62.46],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [10.56, 20.78, 30.22, 38.93, 46.85, 53.50, 58.89, 62.93],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/ead058e9-fcf1-4ed4-bca0-a4b59175ebf4)

```
WS1 1,000,000
LRU   hit ratio 2.95%
Clock hit ratio 2.93%
Clock - LRU hit ratio delta -0.01%

WS1 2,000,000
LRU   hit ratio 6.08%
Clock hit ratio 6.41%
Clock - LRU hit ratio delta 0.32%

WS1 3,000,000
LRU   hit ratio 9.63%
Clock hit ratio 11.29%
Clock - LRU hit ratio delta 1.66%

WS1 4,000,000
LRU   hit ratio 21.59%
Clock hit ratio 22.93%
Clock - LRU hit ratio delta 1.34%

WS1 5,000,000
LRU   hit ratio 33.91%
Clock hit ratio 35.27%
Clock - LRU hit ratio delta 1.36%

WS1 6,000,000
LRU   hit ratio 45.74%
Clock hit ratio 46.99%
Clock - LRU hit ratio delta 1.25%

WS1 7,000,000
LRU   hit ratio 54.89%
Clock hit ratio 55.81%
Clock - LRU hit ratio delta 0.92%

WS1 8,000,000
LRU   hit ratio 61.40%
Clock hit ratio 61.87%
Clock - LRU hit ratio delta 0.47%
```

### WS2

<!--
const data = {
  labels: [1e6, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
  datasets: [
    {
      label: 'Optimal',
      data: [29.68, 46.08, 58.2, 67.41, 74.54, 79.86, 83.72, 86.44],
    },
    {
      label: 'LRU',
      data: [2.91, 6.2, 10.1, 23.46, 37.94, 51.69, 63.81, 73.12],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [2.89, 6.59, 12.10, 25.19, 39.75, 53.85, 65.64, 74.42],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [9.28, 19.86, 30.05, 40.41, 50.39, 60.05, 69.29, 76.33],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [12.73, 24.22, 34.95, 44.79, 54.17, 62.37, 69.48, 75.77],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/db46ba0f-c780-4a80-9689-dfc359edfef5)

```
WS2 1,000,000
LRU   hit ratio 2.91%
Clock hit ratio 2.89%
Clock - LRU hit ratio delta -0.01%

WS2 2,000,000
LRU   hit ratio 6.19%
Clock hit ratio 6.59%
Clock - LRU hit ratio delta 0.40%

WS2 3,000,000
LRU   hit ratio 10.09%
Clock hit ratio 12.10%
Clock - LRU hit ratio delta 2.00%

WS2 4,000,000
LRU   hit ratio 23.45%
Clock hit ratio 25.19%
Clock - LRU hit ratio delta 1.74%

WS2 5,000,000
LRU   hit ratio 37.94%
Clock hit ratio 39.75%
Clock - LRU hit ratio delta 1.81%

WS2 6,000,000
LRU   hit ratio 51.69%
Clock hit ratio 53.85%
Clock - LRU hit ratio delta 2.16%

WS2 7,000,000
LRU   hit ratio 63.81%
Clock hit ratio 65.64%
Clock - LRU hit ratio delta 1.82%

WS2 8,000,000
LRU   hit ratio 73.11%
Clock hit ratio 74.42%
Clock - LRU hit ratio delta 1.31%
```

### F1

<!--
const data = {
  labels: [2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000],
  datasets: [
    {
      label: 'Optimal',
      data: [38.49, 41.77, 43.96, 45.65, 47.13, 48.38, 49.5, 50.52],
    },
    {
      label: 'LRU',
      data: [27.74, 30.56, 32.18, 33.27, 34.19, 34.97, 35.62, 36.17],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [28.25, 31.15, 32.74, 33.88, 34.73, 35.52, 36.24, 36.84],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [27.48, 31.52, 34.04, 35.57, 36.72, 37.60, 38.32, 38.82],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [24.68, 29.34, 32.18, 34.65, 36.24, 37.17, 37.90, 38.38],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/3706629e-94d1-48c4-b679-a4b5516cf3fc)

```
F1 2,500
LRU   hit ratio 27.74%
Clock hit ratio 28.25%
Clock - LRU hit ratio delta 0.50%

F1 5,000
LRU   hit ratio 30.55%
Clock hit ratio 31.15%
Clock - LRU hit ratio delta 0.60%

F1 7,500
LRU   hit ratio 32.18%
Clock hit ratio 32.74%
Clock - LRU hit ratio delta 0.56%

F1 10,000
LRU   hit ratio 33.27%
Clock hit ratio 33.88%
Clock - LRU hit ratio delta 0.61%

F1 12,500
LRU   hit ratio 34.19%
Clock hit ratio 34.73%
Clock - LRU hit ratio delta 0.53%

F1 15,000
LRU   hit ratio 34.97%
Clock hit ratio 35.52%
Clock - LRU hit ratio delta 0.55%

F1 17,500
LRU   hit ratio 35.62%
Clock hit ratio 36.24%
Clock - LRU hit ratio delta 0.61%

F1 20,000
LRU   hit ratio 36.17%
Clock hit ratio 36.84%
Clock - LRU hit ratio delta 0.67%
```

### DS1

<!--
const data = {
  labels: [1e6, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
  datasets: [
    {
      label: 'Optimal',
      data: [20.19, 31.79, 41.23, 48.09, 54.96, 61.82, 68.69, 74.93],
    },
    {
      label: 'LRU',
      data: [3.09, 10.74, 18.59, 20.24, 21.03, 33.95, 38.9, 43.03],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [3.21, 10.75, 18.60, 20.51, 23.63, 40.96, 46.04, 56.45],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [10.47, 22.78, 34.45, 39.68, 46.69, 53.64, 61.28, 68.93],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [14.08, 27.90, 39.55, 43.45, 49.71, 56.46, 63.21, 69.44],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/eeeec747-b160-48d4-845b-a789f02e5e80)

```
DS1 1,000,000
LRU   hit ratio 3.08%
Clock hit ratio 3.21%
Clock - LRU hit ratio delta 0.13%

DS1 2,000,000
LRU   hit ratio 10.74%
Clock hit ratio 10.75%
Clock - LRU hit ratio delta 0.01%

DS1 3,000,000
LRU   hit ratio 18.59%
Clock hit ratio 18.60%
Clock - LRU hit ratio delta 0.01%

DS1 4,000,000
LRU   hit ratio 20.24%
Clock hit ratio 20.51%
Clock - LRU hit ratio delta 0.27%

DS1 5,000,000
LRU   hit ratio 21.03%
Clock hit ratio 23.63%
Clock - LRU hit ratio delta 2.59%

DS1 6,000,000
LRU   hit ratio 33.95%
Clock hit ratio 40.96%
Clock - LRU hit ratio delta 7.00%

DS1 7,000,000
LRU   hit ratio 38.89%
Clock hit ratio 46.04%
Clock - LRU hit ratio delta 7.14%

DS1 8,000,000
LRU   hit ratio 43.03%
Clock hit ratio 56.45%
Clock - LRU hit ratio delta 13.42%
```

### S3

<!--
const data = {
  labels: [1e5, 2e5, 3e5, 4e5, 5e5, 6e5, 7e5, 8e5],
  datasets: [
    {
      label: 'Optimal',
      data: [25.42, 39.79, 50.92, 59.96, 67.09, 72.97, 77.57, 81.27],
    },
    {
      label: 'LRU',
      data: [2.33, 4.63, 7.59, 12.04, 22.77, 34.63, 46.04, 56.6],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [2.31, 4.64, 8.51, 13.29, 24.40, 36.29, 47.94, 58.67],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [6.99, 15.49, 23.85, 31.94, 40.35, 48.40, 55.86, 63.88],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [9.91, 19.41, 28.25, 36.67, 44.58, 52.05, 58.78, 66.02],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/f6471cea-90eb-470f-9644-f61a46eed289)

```
S3 100,000
LRU   hit ratio 2.32%
Clock hit ratio 2.31%
Clock - LRU hit ratio delta -0.01%

S3 200,000
LRU   hit ratio 4.63%
Clock hit ratio 4.64%
Clock - LRU hit ratio delta 0.01%

S3 300,000
LRU   hit ratio 7.58%
Clock hit ratio 8.51%
Clock - LRU hit ratio delta 0.92%

S3 400,000
LRU   hit ratio 12.03%
Clock hit ratio 13.29%
Clock - LRU hit ratio delta 1.25%

S3 500,000
LRU   hit ratio 22.76%
Clock hit ratio 24.40%
Clock - LRU hit ratio delta 1.64%

S3 600,000
LRU   hit ratio 34.63%
Clock hit ratio 36.29%
Clock - LRU hit ratio delta 1.66%

S3 700,000
LRU   hit ratio 46.04%
Clock hit ratio 47.94%
Clock - LRU hit ratio delta 1.90%

S3 800,000
LRU   hit ratio 56.59%
Clock hit ratio 58.67%
Clock - LRU hit ratio delta 2.07%
```

### OLTP

<!--
const data = {
  labels: [250, 500, 750, 1000, 1250, 1500, 1750, 2000],
  datasets: [
    {
      label: 'Optimal',
      data: [38.47, 46.43, 50.67, 53.62, 55.84, 57.62, 59.13, 60.4],
    },
    {
      label: 'LRU',
      data: [16.47, 23.45, 28.28, 32.83, 36.21, 38.7, 40.79, 42.47],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [17.13, 24.33, 29.16, 33.64, 37.05, 39.32, 41.46, 43.10],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [17.06, 27.86, 33.11, 36.53, 38.88, 40.79, 42.36, 43.65],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [19.41, 29.34, 34.74, 37.79, 39.93, 41.71, 43.32, 44.58],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/2fa5797a-06eb-45b1-b941-9ed8bd62a1f2)

```
OLTP 250
LRU   hit ratio 16.47%
Clock hit ratio 17.13%
Clock - LRU hit ratio delta 0.66%

OLTP 500
LRU   hit ratio 23.44%
Clock hit ratio 24.33%
Clock - LRU hit ratio delta 0.89%

OLTP 750
LRU   hit ratio 28.28%
Clock hit ratio 29.16%
Clock - LRU hit ratio delta 0.88%

OLTP 1,000
LRU   hit ratio 32.83%
Clock hit ratio 33.64%
Clock - LRU hit ratio delta 0.81%

OLTP 1,250
LRU   hit ratio 36.20%
Clock hit ratio 37.05%
Clock - LRU hit ratio delta 0.84%

OLTP 1,500
LRU   hit ratio 38.69%
Clock hit ratio 39.32%
Clock - LRU hit ratio delta 0.63%

OLTP 1,750
LRU   hit ratio 40.78%
Clock hit ratio 41.46%
Clock - LRU hit ratio delta 0.67%

OLTP 2,000
LRU   hit ratio 42.46%
Clock hit ratio 43.10%
Clock - LRU hit ratio delta 0.63%
```

### GLI

<!--
const data = {
  labels: [250, 500, 750, 1000, 1250, 1500, 1750, 2000],
  datasets: [
    {
      label: 'Optimal',
      data: [17.71,34.33, 46.13, 53.15, 57.31, 57.96, 57.96, 57.96],
    },
    {
      label: 'LRU',
      data: [0.91, 0.95, 1.15, 11.21, 21.25, 36.56, 45.04, 57.41],
      borderColor: Utils.color(0),
    },
    {
      label: 'Clock',
      data: [0.93, 1.18, 1.32, 11.31, 31.26, 36.53, 55.06, 57.41],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU',
      data: [10.62, 25.03, 37.28, 47.17, 52.04, 53.00, 55.88, 57.96],
      borderColor: Utils.color(1),
    },
    {
      label: 'DWC',
      data: [15.82, 31.38, 41.65, 47.87, 52.54, 53.64, 54.77, 57.96],
      borderColor: Utils.color(2),
    },
  ]
};
-->

![image](https://github.com/falsandtru/bclock/assets/3143368/2219ac1d-65f1-4009-82fc-d0dff7c3168f)

```
GLI 250
LRU   hit ratio 0.93%
Clock hit ratio 0.93%
Clock - LRU hit ratio delta 0.00%

GLI 500
LRU   hit ratio 0.96%
Clock hit ratio 1.18%
Clock - LRU hit ratio delta 0.21%

GLI 750
LRU   hit ratio 1.16%
Clock hit ratio 1.32%
Clock - LRU hit ratio delta 0.16%

GLI 1,000
LRU   hit ratio 11.22%
Clock hit ratio 11.31%
Clock - LRU hit ratio delta 0.09%

GLI 1,250
LRU   hit ratio 21.25%
Clock hit ratio 31.26%
Clock - LRU hit ratio delta 10.00%

GLI 1,500
LRU   hit ratio 36.56%
Clock hit ratio 36.53%
Clock - LRU hit ratio delta -0.03%

GLI 1,750
LRU   hit ratio 45.04%
Clock hit ratio 55.06%
Clock - LRU hit ratio delta 10.02%

GLI 2,000
LRU   hit ratio 57.41%
Clock hit ratio 57.41%
Clock - LRU hit ratio delta 0.00%
```

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
