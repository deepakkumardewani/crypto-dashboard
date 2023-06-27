<template>
  <div>
    <div class="header flex">
      <div class="flex justify-start">
        <div>
          <p class="font-bold text-xl">
            Deepak Dewani
          </p>
          <p class="font-sm text-slate-600	">
            4:45 pm 19 Jan 2023
          </p>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <div class="mx-3">
          <div class="w-10 h-10 bg-white rounded-lg flex justify-center items-center">

            <v-icon
              small
              style="color: black"
            >fa-regular fa-bell</v-icon>
          </div>
        </div>
        <div class=" mx-3">
          <p>Deepak Dewani</p>
        </div>
        <div class="w-10 h-10 bg-white rounded-lg ml-3">
          <img
            class="rounded-lg"
            src="../assets/avatar.png"
            alt="avatar"
          >
        </div>
      </div>
    </div>

    <div class="grid justify-end grid-cols-1 sm:grid-cols-12 gap-4">

      <div
        v-for="coin in coins"
        class=" h-[150px] rounded-lg bg-white my-3 col-span-1 md:col-span-3 sm:col-span-6  p-5"
      >
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <img
              :src="`/images/${coin.icon}`"
              alt="coin"
              class="w-6 h-6 mb-3"
            >

            <div class="flex text-sm">
              <p>{{coin.name}}</p>
              <v-icon>mdi mdi-swap-horizontal</v-icon>
              <p>USD</p>
            </div>
            <p class="font-bold">{{coin.price}}</p>
            <p
              class="text-sm font-bold"
              :style="{color: coin.changeColor}"
            >{{coin.change}}</p>
          </div>
          <div class="col-span-8">
            <LineChart :data="coin.series" />
          </div>
        </div>

      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 my-3">
      <div class="sm:col-span-9 col-span-1 bg-white rounded-lg">
        <MarketOverview />
      </div>
      <div class="sm:col-span-3 col-span-1 bg-white rounded-lg">
        <Balances />
      </div>

    </div>

    <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 my-3">
      <div class="sm:col-span-9 col-span-1  bg-white rounded-lg">
        <RecentActivities />
      </div>
      <div class="sm:col-span-3 col-span-1  bg-white rounded-lg">
        <Team />
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      coins: [
        {
          name: 'BTC',
          price: 9784.79,
          icon: 'btc.png',
          changeColor: 'red',
          change: '12%',
          series: [
            {
              data: [78, 45, 90, 65, 88, 12]
            }
          ]
        },
        {
          name: 'LTC',
          price: 8741.98,
          icon: 'ltc.png',
          changeColor: 'green',
          change: '16%',
          series: [
            {
              data: [78, 45, 90, 65, 88, 12]
            }
          ]
        },
        {
          name: 'ETM',
          price: 4567.76,
          icon: 'eth.png',
          changeColor: 'red',
          change: '20%',
          series: [
            {
              data: [78, 45, 90, 65, 88, 12]
            }
          ]
        },
        {
          name: 'BNB',
          price: 8945.65,
          icon: 'bnb.png',
          changeColor: 'green',
          change: '11%',
          series: [
            {
              data: [78, 45, 90, 65, 88, 12]
            }
          ]
        }
      ]
    }
  },
  mounted() {}
}
</script>

<style>
</style>