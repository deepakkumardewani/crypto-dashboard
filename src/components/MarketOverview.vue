<template>
  <div>
    <div class="flex justify-between">
      <div class="flex justify-start">
        <div class="p-4">
          <p class="text-xl">Market Overview</p>
          <p class="text-sm text-green-400">1,234,567,89.00</p>
        </div>
      </div>
      <div class="flex justify-end items-center shrink">
        <div class="block sm:hidden">

        </div>
        <div
          v-for="item in range"
          class="mx-3 sm:block hidden"
        >
          <v-btn
            x-small
            outlined
          >
            {{item}}
          </v-btn>
        </div>
      </div>
    </div>
    <div>
      <LineChart
        :data="series"
        :opts="options"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      options: {},
      range: ['ALL', '1M', '6M', '1Y', 'YTD'],
      items: ['a', 'b', 'c', 'd', 'e']
    }
  },
  mounted() {
    this.options = {
      height: '200',
      type: 'area',
      stroke: {
        curve: 'straight',
        width: 2
      }
    }
    this.series = [
      {
        name: 'Buy',
        data: [
          420, 320, 340, 380, 100, 180, 360, 440, 140, 500, 200, 240, 300, 420, 100, 240, 460, 340,
          180, 440
        ]
      },
      {
        name: 'Sell',
        data: [
          200, 420, 284, 436, 276, 332, 340, 220, 312, 164, 324, 320, 420, 340, 384, 100, 276, 412,
          500, 204
        ]
      }
    ]
  }
}
</script>

<style>
</style>