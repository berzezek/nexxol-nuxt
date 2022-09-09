<template>
  <div>
    <MainHeader />

    <div class="dashboard" >
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
