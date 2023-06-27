<script>
export default {}
</script>



<template>

  <div class="flex flex-row font-poppins">

    <div class='sidebar hidden sm:block'>
      <Sidebar />
    </div>
    <div class="w-full p-5">
      <router-view />
      <!-- <div class="app-bar block md:hidden">
        <v-app-bar
          class="hidden"
          elevation="4"
        ></v-app-bar>
      </div> -->
      <!-- <div class="dashboard p-5">
        <Dashboard />
      </div> -->
    </div>
  </div>

</template>

<style scoped>
</style>
