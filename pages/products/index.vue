<template>
  <div class="product-container">
    
    <div class="">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-lg-5 mt-5">
        <b-form-input
          size="sm"
          class="mb-5 w-50"
          placeholder="Поиск"
          @submit.prevent
          v-model="searchQuery"
          @change="searchProduct"
        ></b-form-input>
          <div
            class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5" v-for="product in searchProducts" :key="product.id">
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

</style>

<script>
export default {

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
    searchProduct() {
      return this.products.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  // mounted() {
  //   console.log(this.$props.search);
  // },
  computed: {
    searchProducts() {
      return this.products.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>
