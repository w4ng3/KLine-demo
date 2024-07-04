<!--
 *@FileDescription: BITCOIN GOOGLE SEARCH TRENDS
 *@author: 王東
 *@date: 2024-07-03
 *@LastEditTime: 2024-07-03
 -->
<script setup lang="ts">
import ECharts from '~/components/ECharts/index.vue'
import type { ECOption } from '~/components/ECharts/config'

// interface ChartProp {
//   label: string
//   value: string[]
// }

const data = [10, 20, 40, 60, 80, 50, 30, 50, 70, 90]
const threshold = 50

const newData = []
for (let i = 0; i < data.length - 1; i++) {
  const color = data[i] >= threshold && data[i + 1] >= threshold ? 'green' : 'red'
  newData.push({
    coords: [
      [i, data[i]],
      [i + 1, data[i + 1]],
    ],
    lineStyle: {
      width: 6,
      color,
    },
  })
}

const option: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      data: data.map(() => {
        return 50
      }),
      showSymbol: false,
      lineStyle: {
        color: 'transparent',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 1,
            color: 'rgba(255, 0, 0, 0.3)', // 上方颜色，不透明红色
          }, {
            offset: 0,
            color: 'rgba(255, 255, 255, 0.8)', // 下方颜色，不透明白色
          }],
          global: false,
        },
      },
    },
    {
      type: 'line',
      data,
      showSymbol: false,
      lineStyle: {
        color: 'transparent',
      },
      areaStyle: {
        // color: 'transparent',
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0,234,123,0.8)',
            },
            {
              offset: 0.3,
              color: 'rgba(0,234,123,0.2)',
            },
            {
              offset: 0.5,
              color: 'rgba(255,255,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(255,255,255,1)',
            },
          ],
          global: false,
        },
      },
    },
    {
      type: 'lines',
      coordinateSystem: 'cartesian2d',
      z: 1,
      polyline: true,
      data: newData,
    },
  ],
}
</script>

<template>
  <!-- 年度使用 -->
  <div class="echarts">
    <ECharts :option="option" :resize="false" />
  </div>
</template>

 <style scoped>
 .echarts {
  /* width: 100%; */
  /* height: 100%; */
  width: 1200px;
  height: 800px;
}
</style>
