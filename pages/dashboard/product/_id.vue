<template>
<div class="container">
  <h3 class="text-center mt-5">Изменить продукт {{ product.name }}</h3>
  <dashboard-product-form :product="product" :categories="getAllCategories" />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  layout: "dashboard",

  async asyncData({ $axios, params }) {
    const product = await $axios.$get(`product/${params.id}/`);
    return { product };
  },
  methods: {
    ...mapActions({
      fetchCategories: 'category/fetchCategories'
    }),

    async editProduct() {
      console.log(this.$route.params.id);
    },
  },
  computed: {
    ...mapGetters({
      getAllCategories: 'category/getAllCategories'
    })
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

