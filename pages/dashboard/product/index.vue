<template>
  <div class="container">
    <h3 class="text-center my-5">Панель управления</h3>
    <b-form-input
      size="sm"
      class="mb-5 w-50 search-product"
      placeholder="Поиск"
      @submit.prevent
      v-model="searchQuery"
    ></b-form-input>
    <dashboard-product-view :products="searchProducts" />
    <button
      class="btn btn-success me-3"
      @click="$router.push({ path: '/dashboard/product/add' })"
    >
      Добавить продукт
    </button>
    <button
      class="btn btn-success me-3"
      @click="$router.push({ path: '/dashboard/category' })"
    >
      Добавить категорию
    </button>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      searchQuery: "",
    };
  },
  async asyncData({ $axios }) {
    const allProducts = await $axios.$get(`product/`);
    return { allProducts };
  },
  computed: {
    searchProducts() {
      return this.allProducts.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  head() {
    return {
      title: `Dashboard`,
    };
  },
};
</script>

<style scoped></style>
