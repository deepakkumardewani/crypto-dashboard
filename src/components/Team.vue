<template>

  <div class="p-4 flex flex-col h-full">
    <p class="text-xl">Team</p>

    <div class="my-3">
      <div class="bg-purple-100 rounded-lg p-2 my-3 flex items-center ">
        <div class="rounded-lg bg-purple-500 w-8 h-8 mx-3 flex shrink justify-center">
          <v-icon
            small
            style="color: white"
          >mdi mdi-crown</v-icon>
        </div>
        <div>
          <p>Total Admin</p>
          <p class="text-xs">6</p>
        </div>
      </div>
      <div class="bg-green-100 rounded-lg p-2 my-3 flex items-center">
        <div class="rounded-lg bg-green-500 w-8 h-8 mx-3 flex shrink justify-center">
          <v-icon
            small
            style="color: white"
          >mdi mdi-account-group</v-icon>
        </div>
        <div>
          <p>Total Member</p>
          <p class="text-xs">12</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {}
</script>

<style>
</style>