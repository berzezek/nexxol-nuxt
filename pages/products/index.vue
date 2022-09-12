<template>
  <div class="product-container">
    <div class="product-list">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-lg-5 mt-5">
          <div
            class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5" v-for="product in products" :key="product.id">
              <NuxtLink :to="`/products/${product.id}/`">
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
  min-height: 100%;
}
</style>

<script>
export default {
  props: {
    search: String,
  },
  data() {
    return {
      searchQuery: "",
    };
  },

  async asyncData({ $axios, $config: { baseUrl } }) {
    const products = await $axios.$get(`${baseUrl}product/`);
    return { products };
  },
  methods: {
    // searchedProducts() {
    //   return this.products.filter((p) =>
    //     p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    //   );
    // },
  },
  mounted() {
    console.log(this.$props.search);
  },
  // watch: {
  //   search() {
  //     console.log(this.search)
  //   }
  // },
};
</script>
