<template>
  <div class="container">
    <dashboard-product-form
      :product="product"
      :categories="getAllCategories"
      :buttonName="'Изменить'"
      :formName="`Изменить продукт - ${product.name}`"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboard",
  created() {
    // this.$nuxt.$on("sendProduct", ($event) => this.sendProduct($event));
    this.$nuxt.$on("selectFile", ($event) => this.updateFile($event));
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
    updateFile(e) {
      console.log(e)
    },
    // sendProduct(e) {
    //   console.log(e);
    // },
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

