<template>
  <div class="container">
    <product-detail :product="product" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const product = await $axios.$get(`product/${params.id}/`);
    return { product };
  },
  methods: {

  },
  head() {
    return {
      title: `${this.product.name} - ${this.product.product_mark}`,
    };
  },
};
</script>

<style scoped>

</style>
