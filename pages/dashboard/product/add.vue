<template>
  <div class="container">
    <h1 class="text-center">Добавить продукт</h1>
    <dashboard-product-form
      :categories="getAllCategories"
      :buttonName="'Добавить'"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboard",
  name: 'product-add',
  created() {
    this.$nuxt.$on("sendProduct", ($event) => this.sendProduct($event));
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),
    sendProduct(e) {
      console.log(e)
      // this.$axios.$post('product/', e)
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