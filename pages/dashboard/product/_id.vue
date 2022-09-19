<template>
  <div class="container">
    <h3 class="text-center mt-5">Изменить продукт {{ product.name }}</h3>
    <dashboard-product-form
      :product="product"
      :categories="getAllCategories"
      :buttonName="'Изменить'"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboard",
  created() {
    this.$nuxt.$on("sendProduct", ($event) => this.sendProduct($event));
  },

  async asyncData({ $axios, params }) {
    const product = await $axios.$get(`product/${params.id}/`);
    return { product };
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),

    async editProduct() {
      console.log(this.$route.params.id);
    },

    sendProduct(e) {
      console.log(e);
    },
  },
  computed: {
    ...mapGetters({
      getAllCategories: "category/getAllCategories",
    }),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

