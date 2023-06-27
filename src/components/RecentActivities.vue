<template>
  <div class="p-4">
    <p class="text-xl mb-5">Recent Activities</p>

    <div class="slides overflow-x-auto w-full flex sm:hidden">
      <div
        v-for="item in activities"
        class="mt-1 shrink-0 slide w-full"
      >
        <div class="flex justify-evenly p-3">
          <p class="flex-1">Coins</p>

          <div class="logo flex-1">
            <img
              :src="`/images/${item.logo}`"
              alt="logo"
              class="w-8 h-8 mb-3"
            >
          </div>
        </div>

        <div class="flex justify-evenly  p-3">
          <p class="flex-1">Currency</p>
          <div class="name flex-1 text-slate-500">
            {{item.name}}
          </div>
        </div>
        <div class="flex justify-evenly  p-3">
          <p class="flex-1">Time</p>
          <div class="name flex-1 text-slate-500">
            {{item.time}}
          </div>
        </div>
        <div class="flex justify-evenly  p-3">
          <p class="flex-1">Amount</p>
          <div class="name flex-1 text-slate-500">
            {{item.amount}}
          </div>
        </div>
        <div class="flex justify-evenly  p-3">
          <p class="flex-1">Status</p>
          <div class="name flex-1 text-slate-500">
            {{item.status}}
          </div>
        </div>
      </div>

    </div>

    <div
      v-for="item in activities"
      class="mt-1"
    >
      <div class="hidden sm:flex flex-row">
        <div class="logo flex-1">
          <img
            :src="`/images/${item.logo}`"
            alt="logo"
            class="w-8 h-8 mb-3"
          >
        </div>
        <div class="name flex-1 text-slate-500">
          {{item.name}}
        </div>
        <div class="time  flex-1 text-slate-500">
          {{item.time}}
        </div>
        <div class="amount flex-1 text-slate-500">
          {{item.amount}}
        </div>
        <div
          class="status flex-1 "
          :class="{'text-purple-500': item.status !== 'Completed', 'text-green-500': item.status === 'Completed'}"
        >
          {{item.status}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          logo: 'btc.png',
          name: 'Bitcoin',
          time: '10:45:15 AM',
          amount: '+1786.87',
          status: 'Completed'
        },
        {
          logo: 'ltc.png',
          name: 'Litecoin',
          time: '11:25:98 AM',
          amount: '+8756.99',
          status: 'Pending'
        },
        {
          logo: 'eth.png',
          name: 'Ethereum',
          time: '09:35:78 AM',
          amount: '+7766.56',
          status: 'Completed'
        }
      ]
    }
  }
}
</script>

<style>
</style>