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
      class="btn-sm btn-warning me-3"
      @click="$router.push({ path: '/dashboard/category' })"
    >
      Добавить категорию
    </button>
    <button
      class="btn-sm btn-success me-3"
      @click="$router.push({ path: '/dashboard/product/add' })"
    >
      Добавить продукт
    </button>
    <button
      class="btn-sm btn-primary me-3"
      @click="$router.push({ path: '/' })"
    >
      На главную
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboard",
  created() {
    this.$nuxt.$on("deleteProduct", ($event) => this.deleteProduct($event));
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions({
      fetchProducts: "product/fetchProducts",
    }),
    deleteProduct(id) {
      this.$izitoast.error({
        title: `Внимание`,
        message: "Желаете удалить продукт?",
        position: "center",
        buttons: [
          [
            "<button>Да</button>",
            async () => {
              await this.$axios.$delete(`product/${id}/`);
              this.$izitoast.destroy();
              await this.fetchProducts();
              this.$izitoast.success({
                title: `Внимание`,
                message: `Продукт успешно удален`,
              });
            },
            true,
          ],
          [
            "<button>Нет</button>",
            () => {
              this.$izitoast.destroy();
            },
          ],
        ],
      });
    }
  },
  computed: {
    ...mapGetters({
      getProducts: "product/getProducts",
    }),
    searchProducts() {
      return this.getProducts.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  head() {
    return {
      title: `Dashboard`,
    };
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped></style>
