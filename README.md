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
      data: [2.93, 6.41, 11.29, 22.93, 35.27, 46.99, 55.81, 61.87],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU (Infinity)',
      data: [2.94, 6.50, 11.51, 23.66, 35.87, 47.92, 56.76, 62.12],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [2.94, 7.13, 12.67, 24.42, 36.72, 48.09, 56.76, 62.12],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 4.33%
Clock - LRU hit ratio delta 1.38%

WS1 2,000,000
LRU   hit ratio 6.08%
Clock hit ratio 10.10%
Clock - LRU hit ratio delta 4.01%

WS1 3,000,000
LRU   hit ratio 9.63%
Clock hit ratio 15.87%
Clock - LRU hit ratio delta 6.24%

WS1 4,000,000
LRU   hit ratio 21.59%
Clock hit ratio 25.34%
Clock - LRU hit ratio delta 3.74%

WS1 5,000,000
LRU   hit ratio 33.91%
Clock hit ratio 37.14%
Clock - LRU hit ratio delta 3.22%

WS1 6,000,000
LRU   hit ratio 45.74%
Clock hit ratio 47.91%
Clock - LRU hit ratio delta 2.17%

WS1 7,000,000
LRU   hit ratio 54.89%
Clock hit ratio 56.53%
Clock - LRU hit ratio delta 1.63%

WS1 8,000,000
LRU   hit ratio 61.40%
Clock hit ratio 62.05%
Clock - LRU hit ratio delta 0.65%
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
      label: 'TLRU (Infinity)',
      data: [2.89, 6.66, 12.28, 25.67, 39.98, 54.93, 67.27, 75.79],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [2.89, 7.33, 13.79, 27.20, 42.31, 56.58, 67.84, 75.99],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 4.80%
Clock - LRU hit ratio delta 1.89%

WS2 2,000,000
LRU   hit ratio 6.19%
Clock hit ratio 12.21%
Clock - LRU hit ratio delta 6.01%

WS2 3,000,000
LRU   hit ratio 10.09%
Clock hit ratio 20.10%
Clock - LRU hit ratio delta 10.00%

WS2 4,000,000
LRU   hit ratio 23.45%
Clock hit ratio 29.01%
Clock - LRU hit ratio delta 5.55%

WS2 5,000,000
LRU   hit ratio 37.94%
Clock hit ratio 43.12%
Clock - LRU hit ratio delta 5.18%

WS2 6,000,000
LRU   hit ratio 51.69%
Clock hit ratio 55.65%
Clock - LRU hit ratio delta 3.96%

WS2 7,000,000
LRU   hit ratio 63.81%
Clock hit ratio 66.31%
Clock - LRU hit ratio delta 2.50%

WS2 8,000,000
LRU   hit ratio 73.11%
Clock hit ratio 74.70%
Clock - LRU hit ratio delta 1.58%
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
      data: [28.26, 31.16, 32.75, 33.88, 34.72, 35.52, 36.24, 36.84],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU (Infinity)',
      data: [28.17, 31.13, 32.71, 33.80, 34.72, 35.47, 36.26, 36.81],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [28.63, 31.68, 33.31, 34.41, 35.31, 36.09, 36.81, 37.37],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 28.47%
Clock - LRU hit ratio delta 0.72%

F1 5,000
LRU   hit ratio 30.55%
Clock hit ratio 31.76%
Clock - LRU hit ratio delta 1.20%

F1 7,500
LRU   hit ratio 32.18%
Clock hit ratio 33.61%
Clock - LRU hit ratio delta 1.43%

F1 10,000
LRU   hit ratio 33.27%
Clock hit ratio 34.85%
Clock - LRU hit ratio delta 1.58%

F1 12,500
LRU   hit ratio 34.19%
Clock hit ratio 35.83%
Clock - LRU hit ratio delta 1.64%

F1 15,000
LRU   hit ratio 34.97%
Clock hit ratio 36.58%
Clock - LRU hit ratio delta 1.61%

F1 17,500
LRU   hit ratio 35.62%
Clock hit ratio 37.26%
Clock - LRU hit ratio delta 1.64%

F1 20,000
LRU   hit ratio 36.17%
Clock hit ratio 37.84%
Clock - LRU hit ratio delta 1.67%
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
      label: 'TLRU (Infinity)',
      data: [3.20, 11.01, 18.61, 21.24, 27.98, 35.06, 53.48, 58.56],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [3.24, 11.01, 18.80, 23.02, 35.25, 40.48, 53.52, 58.56],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 4.16%
Clock - LRU hit ratio delta 1.08%

DS1 2,000,000
LRU   hit ratio 10.74%
Clock hit ratio 14.92%
Clock - LRU hit ratio delta 4.18%

DS1 3,000,000
LRU   hit ratio 18.59%
Clock hit ratio 26.95%
Clock - LRU hit ratio delta 8.36%

DS1 4,000,000
LRU   hit ratio 20.24%
Clock hit ratio 32.25%
Clock - LRU hit ratio delta 12.01%

DS1 5,000,000
LRU   hit ratio 21.03%
Clock hit ratio 36.48%
Clock - LRU hit ratio delta 15.45%

DS1 6,000,000
LRU   hit ratio 33.95%
Clock hit ratio 45.71%
Clock - LRU hit ratio delta 11.75%

DS1 7,000,000
LRU   hit ratio 38.89%
Clock hit ratio 54.17%
Clock - LRU hit ratio delta 15.27%

DS1 8,000,000
LRU   hit ratio 43.03%
Clock hit ratio 60.13%
Clock - LRU hit ratio delta 17.10%
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
      label: 'TLRU (Infinity)',
      data: [2.31, 4.75, 8.57, 13.59, 25.02, 36.64, 48.13, 60.22],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [2.30, 5.07, 9.66, 14.89, 26.48, 38.83, 50.93, 61.34],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 3.69%
Clock - LRU hit ratio delta 1.36%

S3 200,000
LRU   hit ratio 4.63%
Clock hit ratio 9.26%
Clock - LRU hit ratio delta 4.63%

S3 300,000
LRU   hit ratio 7.58%
Clock hit ratio 15.37%
Clock - LRU hit ratio delta 7.78%

S3 400,000
LRU   hit ratio 12.03%
Clock hit ratio 21.55%
Clock - LRU hit ratio delta 9.51%

S3 500,000
LRU   hit ratio 22.76%
Clock hit ratio 28.71%
Clock - LRU hit ratio delta 5.94%

S3 600,000
LRU   hit ratio 34.63%
Clock hit ratio 39.79%
Clock - LRU hit ratio delta 5.16%

S3 700,000
LRU   hit ratio 46.04%
Clock hit ratio 50.49%
Clock - LRU hit ratio delta 4.44%

S3 800,000
LRU   hit ratio 56.59%
Clock hit ratio 59.99%
Clock - LRU hit ratio delta 3.39%
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
      data: [17.13, 24.33, 29.15, 33.60, 37.00, 39.31, 41.44, 43.10],
      borderColor: Utils.color(4),
    },
    {
      label: 'TLRU (Infinity)',
      data: [17.15, 24.56, 29.52, 34.11, 37.16, 39.72, 41.62, 43.28],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [17.71, 25.70, 30.95, 35.43, 38.48, 40.81, 42.63, 44.05],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 16.13%
Clock - LRU hit ratio delta -0.33%

OLTP 500
LRU   hit ratio 23.44%
Clock hit ratio 24.06%
Clock - LRU hit ratio delta 0.61%

OLTP 750
LRU   hit ratio 28.28%
Clock hit ratio 28.86%
Clock - LRU hit ratio delta 0.58%

OLTP 1,000
LRU   hit ratio 32.83%
Clock hit ratio 32.35%
Clock - LRU hit ratio delta -0.47%

OLTP 1,250
LRU   hit ratio 36.20%
Clock hit ratio 35.54%
Clock - LRU hit ratio delta -0.66%

OLTP 1,500
LRU   hit ratio 38.69%
Clock hit ratio 38.00%
Clock - LRU hit ratio delta -0.69%

OLTP 1,750
LRU   hit ratio 40.78%
Clock hit ratio 40.43%
Clock - LRU hit ratio delta -0.35%

OLTP 2,000
LRU   hit ratio 42.46%
Clock hit ratio 42.21%
Clock - LRU hit ratio delta -0.25%
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
      label: 'TLRU (Infinity)',
      data: [0.94, 1.19, 1.32, 21.29, 31.76, 51.86, 55.06, 57.41],
      borderColor: Utils.color(8),
    },
    {
      label: 'TLRU (1.00)',
      data: [0.98, 1.23, 1.36, 27.57, 36.20, 51.86, 55.06, 57.41],
      borderColor: Utils.color(3),
    },
    {
      label: 'TLRU (0.02)',
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
Clock hit ratio 1.34%
Clock - LRU hit ratio delta 0.41%

GLI 500
LRU   hit ratio 0.96%
Clock hit ratio 1.42%
Clock - LRU hit ratio delta 0.46%

GLI 750
LRU   hit ratio 1.16%
Clock hit ratio 1.39%
Clock - LRU hit ratio delta 0.23%

GLI 1,000
LRU   hit ratio 11.22%
Clock hit ratio 27.82%
Clock - LRU hit ratio delta 16.60%

GLI 1,250
LRU   hit ratio 21.25%
Clock hit ratio 40.19%
Clock - LRU hit ratio delta 18.93%

GLI 1,500
LRU   hit ratio 36.56%
Clock hit ratio 49.91%
Clock - LRU hit ratio delta 13.34%

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

'Clock  new x 1,580,578 ops/sec ±2.36% (120 runs sampled)'

'TClock new x 1,635,917 ops/sec ±1.73% (114 runs sampled)'

'ILRU   new x 17,306 ops/sec ±0.72% (122 runs sampled)'

'LRU    new x 26,446,766 ops/sec ±1.27% (120 runs sampled)'

'TLRU-C new x 25,447,708 ops/sec ±1.16% (120 runs sampled)'

'TLRU-L new x 25,516,873 ops/sec ±1.15% (120 runs sampled)'

'DWC    new x 8,852,793 ops/sec ±0.48% (123 runs sampled)'

'Clock  simulation 100 10% x 9,916,253 ops/sec ±0.82% (121 runs sampled)'

'TClock simulation 100 10% x 9,178,812 ops/sec ±0.41% (122 runs sampled)'

'ILRU   simulation 100 10% x 8,795,920 ops/sec ±0.45% (121 runs sampled)'

'LRU    simulation 100 10% x 11,042,280 ops/sec ±0.41% (122 runs sampled)'

'TLRU-C simulation 100 10% x 10,776,622 ops/sec ±0.69% (122 runs sampled)'

'TLRU-L simulation 100 10% x 9,087,601 ops/sec ±0.55% (122 runs sampled)'

'DWC    simulation 100 10% x 5,970,465 ops/sec ±0.31% (122 runs sampled)'

'Clock  simulation 1,000 10% x 9,957,449 ops/sec ±0.44% (123 runs sampled)'

'TClock simulation 1,000 10% x 9,045,578 ops/sec ±0.87% (122 runs sampled)'

'ILRU   simulation 1,000 10% x 8,120,270 ops/sec ±0.40% (123 runs sampled)'

'LRU    simulation 1,000 10% x 10,033,399 ops/sec ±1.03% (121 runs sampled)'

'TLRU-C simulation 1,000 10% x 10,012,036 ops/sec ±0.48% (123 runs sampled)'

'TLRU-L simulation 1,000 10% x 8,728,394 ops/sec ±0.53% (123 runs sampled)'

'DWC    simulation 1,000 10% x 6,824,871 ops/sec ±0.44% (121 runs sampled)'

'Clock  simulation 10,000 10% x 8,950,040 ops/sec ±0.68% (122 runs sampled)'

'TClock simulation 10,000 10% x 8,184,728 ops/sec ±0.36% (123 runs sampled)'

'ILRU   simulation 10,000 10% x 6,836,598 ops/sec ±0.35% (121 runs sampled)'

'LRU    simulation 10,000 10% x 8,375,776 ops/sec ±0.40% (121 runs sampled)'

'TLRU-C simulation 10,000 10% x 8,056,049 ops/sec ±0.87% (120 runs sampled)'

'TLRU-L simulation 10,000 10% x 7,152,724 ops/sec ±0.30% (123 runs sampled)'

'DWC    simulation 10,000 10% x 5,707,307 ops/sec ±0.40% (122 runs sampled)'

'Clock  simulation 100,000 10% x 6,066,442 ops/sec ±1.54% (120 runs sampled)'

'TClock simulation 100,000 10% x 5,931,329 ops/sec ±1.52% (118 runs sampled)'

'ILRU   simulation 100,000 10% x 3,989,516 ops/sec ±1.24% (117 runs sampled)'

'LRU    simulation 100,000 10% x 5,775,982 ops/sec ±1.73% (119 runs sampled)'

'TLRU-C simulation 100,000 10% x 6,121,879 ops/sec ±2.03% (117 runs sampled)'

'TLRU-L simulation 100,000 10% x 5,372,740 ops/sec ±2.16% (117 runs sampled)'

'DWC    simulation 100,000 10% x 4,371,865 ops/sec ±1.97% (114 runs sampled)'

'Clock  simulation 1,000,000 10% x 2,921,542 ops/sec ±2.82% (107 runs sampled)'

'TClock simulation 1,000,000 10% x 2,734,509 ops/sec ±4.05% (102 runs sampled)'

'ILRU   simulation 1,000,000 10% x 1,702,357 ops/sec ±2.64% (108 runs sampled)'

'LRU    simulation 1,000,000 10% x 2,404,423 ops/sec ±3.55% (107 runs sampled)'

'TLRU-C simulation 1,000,000 10% x 2,509,557 ops/sec ±3.64% (106 runs sampled)'

'TLRU-L simulation 1,000,000 10% x 2,400,923 ops/sec ±3.88% (103 runs sampled)'

'DWC    simulation 1,000,000 10% x 3,086,653 ops/sec ±3.95% (107 runs sampled)'

'Clock  simulation 100 50% x 11,638,221 ops/sec ±0.44% (123 runs sampled)'

'TClock simulation 100 50% x 10,645,049 ops/sec ±0.69% (123 runs sampled)'

'ILRU   simulation 100 50% x 10,786,602 ops/sec ±0.47% (122 runs sampled)'

'LRU    simulation 100 50% x 12,558,754 ops/sec ±0.62% (121 runs sampled)'

'TLRU-C simulation 100 50% x 12,613,469 ops/sec ±0.48% (122 runs sampled)'

'TLRU-L simulation 100 50% x 10,785,803 ops/sec ±0.45% (122 runs sampled)'

'DWC    simulation 100 50% x 6,507,728 ops/sec ±0.43% (123 runs sampled)'

'Clock  simulation 1,000 50% x 11,225,959 ops/sec ±0.41% (122 runs sampled)'

'TClock simulation 1,000 50% x 10,633,288 ops/sec ±0.51% (123 runs sampled)'

'ILRU   simulation 1,000 50% x 9,807,774 ops/sec ±0.83% (122 runs sampled)'

'LRU    simulation 1,000 50% x 11,547,226 ops/sec ±0.47% (122 runs sampled)'

'TLRU-C simulation 1,000 50% x 11,500,223 ops/sec ±0.69% (121 runs sampled)'

'TLRU-L simulation 1,000 50% x 10,370,843 ops/sec ±0.40% (123 runs sampled)'

'DWC    simulation 1,000 50% x 5,861,780 ops/sec ±0.37% (123 runs sampled)'

'Clock  simulation 10,000 50% x 10,005,777 ops/sec ±0.58% (122 runs sampled)'

'TClock simulation 10,000 50% x 9,164,085 ops/sec ±0.44% (122 runs sampled)'

'ILRU   simulation 10,000 50% x 8,145,309 ops/sec ±0.44% (121 runs sampled)'

'LRU    simulation 10,000 50% x 8,836,874 ops/sec ±0.51% (120 runs sampled)'

'TLRU-C simulation 10,000 50% x 8,739,594 ops/sec ±0.53% (122 runs sampled)'

'TLRU-L simulation 10,000 50% x 7,752,474 ops/sec ±0.44% (121 runs sampled)'

'DWC    simulation 10,000 50% x 4,774,496 ops/sec ±0.49% (120 runs sampled)'

'Clock  simulation 100,000 50% x 6,886,961 ops/sec ±1.39% (118 runs sampled)'

'TClock simulation 100,000 50% x 6,671,489 ops/sec ±1.43% (118 runs sampled)'

'ILRU   simulation 100,000 50% x 4,727,141 ops/sec ±1.40% (117 runs sampled)'

'LRU    simulation 100,000 50% x 6,267,110 ops/sec ±2.01% (117 runs sampled)'

'TLRU-C simulation 100,000 50% x 6,497,513 ops/sec ±1.95% (118 runs sampled)'

'TLRU-L simulation 100,000 50% x 5,929,699 ops/sec ±2.30% (117 runs sampled)'

'DWC    simulation 100,000 50% x 4,007,906 ops/sec ±1.48% (110 runs sampled)'

'Clock  simulation 1,000,000 50% x 3,388,591 ops/sec ±3.09% (105 runs sampled)'

'TClock simulation 1,000,000 50% x 3,030,444 ops/sec ±3.52% (103 runs sampled)'

'ILRU   simulation 1,000,000 50% x 1,957,735 ops/sec ±3.24% (106 runs sampled)'

'LRU    simulation 1,000,000 50% x 2,378,468 ops/sec ±3.26% (107 runs sampled)'

'TLRU-C simulation 1,000,000 50% x 2,319,526 ops/sec ±3.01% (110 runs sampled)'

'TLRU-L simulation 1,000,000 50% x 2,326,281 ops/sec ±2.40% (107 runs sampled)'

'DWC    simulation 1,000,000 50% x 1,873,066 ops/sec ±3.42% (101 runs sampled)'

'Clock  simulation 100 90% x 17,142,365 ops/sec ±0.70% (122 runs sampled)'

'TClock simulation 100 90% x 17,515,002 ops/sec ±0.92% (120 runs sampled)'

'ILRU   simulation 100 90% x 16,941,103 ops/sec ±0.74% (121 runs sampled)'

'LRU    simulation 100 90% x 16,965,079 ops/sec ±0.89% (120 runs sampled)'

'TLRU-C simulation 100 90% x 16,764,673 ops/sec ±0.80% (119 runs sampled)'

'TLRU-L simulation 100 90% x 15,833,669 ops/sec ±0.67% (122 runs sampled)'

'DWC    simulation 100 90% x 8,241,562 ops/sec ±0.33% (122 runs sampled)'

'Clock  simulation 1,000 90% x 16,186,628 ops/sec ±0.92% (122 runs sampled)'

'TClock simulation 1,000 90% x 16,620,457 ops/sec ±0.68% (122 runs sampled)'

'ILRU   simulation 1,000 90% x 14,897,888 ops/sec ±0.62% (122 runs sampled)'

'LRU    simulation 1,000 90% x 15,072,880 ops/sec ±0.62% (122 runs sampled)'

'TLRU-C simulation 1,000 90% x 14,802,277 ops/sec ±1.06% (120 runs sampled)'

'TLRU-L simulation 1,000 90% x 14,243,896 ops/sec ±0.60% (122 runs sampled)'

'DWC    simulation 1,000 90% x 7,878,478 ops/sec ±0.55% (123 runs sampled)'

'Clock  simulation 10,000 90% x 14,397,140 ops/sec ±0.96% (122 runs sampled)'

'TClock simulation 10,000 90% x 14,674,408 ops/sec ±0.76% (122 runs sampled)'

'ILRU   simulation 10,000 90% x 12,163,240 ops/sec ±0.56% (122 runs sampled)'

'LRU    simulation 10,000 90% x 11,176,342 ops/sec ±1.02% (121 runs sampled)'

'TLRU-C simulation 10,000 90% x 10,623,051 ops/sec ±0.62% (120 runs sampled)'

'TLRU-L simulation 10,000 90% x 10,157,939 ops/sec ±0.90% (122 runs sampled)'

'DWC    simulation 10,000 90% x 7,044,033 ops/sec ±0.74% (122 runs sampled)'

'Clock  simulation 100,000 90% x 9,289,594 ops/sec ±1.22% (117 runs sampled)'

'TClock simulation 100,000 90% x 9,424,672 ops/sec ±1.28% (117 runs sampled)'

'ILRU   simulation 100,000 90% x 7,244,655 ops/sec ±0.98% (117 runs sampled)'

'LRU    simulation 100,000 90% x 7,412,012 ops/sec ±2.06% (115 runs sampled)'

'TLRU-C simulation 100,000 90% x 7,348,881 ops/sec ±2.79% (113 runs sampled)'

'TLRU-L simulation 100,000 90% x 7,138,284 ops/sec ±1.86% (113 runs sampled)'

'DWC    simulation 100,000 90% x 5,590,257 ops/sec ±1.48% (116 runs sampled)'

'Clock  simulation 1,000,000 90% x 5,098,637 ops/sec ±3.30% (103 runs sampled)'

'TClock simulation 1,000,000 90% x 4,743,456 ops/sec ±3.51% (103 runs sampled)'

'ILRU   simulation 1,000,000 90% x 3,168,501 ops/sec ±2.45% (111 runs sampled)'

'LRU    simulation 1,000,000 90% x 2,594,390 ops/sec ±3.09% (112 runs sampled)'

'TLRU-C simulation 1,000,000 90% x 2,546,277 ops/sec ±2.43% (109 runs sampled)'

'TLRU-L simulation 1,000,000 90% x 2,478,672 ops/sec ±2.63% (111 runs sampled)'

'DWC    simulation 1,000,000 90% x 2,154,161 ops/sec ±1.80% (114 runs sampled)'

'ILRU   simulation 100 90% expire x 4,875,225 ops/sec ±2.21% (119 runs sampled)'

'DWC    simulation 100 90% expire x 7,322,013 ops/sec ±0.68% (120 runs sampled)'

'ILRU   simulation 1,000 90% expire x 4,600,040 ops/sec ±2.52% (118 runs sampled)'

'DWC    simulation 1,000 90% expire x 7,126,746 ops/sec ±0.67% (122 runs sampled)'

'ILRU   simulation 10,000 90% expire x 3,992,238 ops/sec ±2.12% (119 runs sampled)'

'DWC    simulation 10,000 90% expire x 5,431,828 ops/sec ±0.87% (120 runs sampled)'

'ILRU   simulation 100,000 90% expire x 3,132,253 ops/sec ±2.06% (114 runs sampled)'

'DWC    simulation 100,000 90% expire x 2,914,127 ops/sec ±2.99% (100 runs sampled)'

'ILRU   simulation 1,000,000 90% expire x 1,361,462 ops/sec ±1.48% (114 runs sampled)'

'DWC    simulation 1,000,000 90% expire x 1,349,727 ops/sec ±2.02% (111 runs sampled)'
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
