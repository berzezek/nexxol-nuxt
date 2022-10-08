<template>
  <div class="demo-wrap">
    <div class="demo-content">

      <product-detail :product="product"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  // async asyncData({ $axios, params }) {
  //   const product = await $axios.$get(`product/${params.id}/`);
  //   return { product };
  // },
  methods: {
    ...mapActions({
      fetchProduct: "product/fetchProduct",
    }),
  },
  computed: {
    ...mapGetters({
      product: "product/getProduct",
    }),
  },
  mounted() {
    this.fetchProduct(this.$route.params.id);
  },
  head() {
    return {
      title: `${this.product.name} - ${this.product.product_mark}`,
    };
  },
};
</script>

<style scoped>
.demo-wrap {
  position: relative;
}

.demo-wrap:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100%;
  height: 100%;
  opacity: 0.8;
  background-image: url('/assets/img/secondary-bg.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.demo-content {
  position: relative;
}

</style>
