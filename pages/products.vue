<template>
  <div class="product-list">
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="
            row
            gx-4 gx-lg-5
            row-cols-1 row-cols-md-3 row-cols-xl-4
            justify-content-center
          "
        >
          <div class="col mb-5" v-for="product in products" :key="product.id">
            <NuxtLink :to="product.id.toString()">
              <ProductCard :product="product"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>
.product-list {
  margin-bottom: 10rem;
  height: 60rem;
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    const products = await $axios.$get("http://localhost:8000/api/v1/product/");
    return { products };
  },

};
</script>
