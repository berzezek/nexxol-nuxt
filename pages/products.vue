<template>
  <div class="product-container">
    
    <div class="product-list">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div
            class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5" v-for="product in products" :key="product.id">
              <NuxtLink :to="product.id.toString()">
                <ProductCard :product="product" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  height: 50rem;
  position: relative;
}
.product-list {
  margin-top: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  async asyncData({ $axios, $config: { baseUrl } }) {
    const products = await $axios.$get(`${baseUrl}product/`);
    return { products };
  },
};
</script>
