<template>
  <apexchart
    v-if="visible"
    :type="type"
    :height="height"
    :options="options"
    :series="series"
  ></apexchart>

</template>

<script>
export default {
  name: 'App',
  props: ['data', 'opts'],
  data() {
    return {
      height: '100',
      type: 'line',
      visible: false,
      options: {
        chart: {
          id: 'vuechart-example',
          toolbar: false
        },
        stroke: {
          curve: 'smooth',
          width: 1
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false
        },
        legend: {
          show: true,
          position: 'bottom'
        },
        xaxis: {
          show: false,
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: false,
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }
      },
      series: []
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.opts) {
        this.height = this.opts.height
        this.options.stroke = this.opts.stroke
        this.type = this.opts.type
      }
      this.series = this.data
      this.visible = true
    }, 500)
  }
}
</script>