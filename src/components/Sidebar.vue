<template>

  <div class="flex flex-col p-7 bg-white h-full w-[250px]">
    <div class="mb-4">
      <img
        src="../assets/zarvis.png"
        alt="zarvis"
      >
    </div>

    <div v-for="item in items">
      <router-link
        :to="item.path"
        v-slot="{ isActive, isExactActive }"
      >
        <div
          @click="navigate(item)"
          class="flex p-3 cursor-pointer"
          :class="[isExactActive && activeLink, !isExactActive && notActiveLink]"
        >
          <v-icon
            class="mr-3"
            :style="{color: isExactActive ? '#4ee44e' : 'black'}"
          >{{item.icon}}</v-icon>
          <div class="flex">
            <p class="font-bold flex-1">{{item.title}}</p>
            <div
              v-if="isExactActive"
              class="flex items-center shrink"
            >
              <span class="rounded-full bg-[#4ee44e] w-2 h-2"></span>
            </div>

          </div>
        </div>

      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLink: 'text-[#4ee44e]',
      notActiveLink: 'text-black',
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          name: 'dashboard',
          path: '/',
          disabled: false
        },
        {
          title: 'Crypto',
          icon: 'mdi-help-box',
          name: 'cryptocurrencies',
          path: '/cryptocurrencies',
          disabled: true
        },
        { title: 'News', icon: 'mdi-image', name: 'news', path: '/news', disabled: true },
        {
          title: 'Exchange',
          icon: 'mdi-help-box',
          name: 'exchange',
          path: '/exchange',
          disabled: true
        }
      ],
      right: null
    }
  },
  methods: {
    navigate(item) {
      this.$router.push({ name: item.name })
    }
  }
}
</script>

<style>
</style>