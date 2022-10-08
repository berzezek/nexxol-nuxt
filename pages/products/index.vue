<template>
  <div class="demo-wrap">
    <div class="demo-content">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-lg-5 mt-5">
          <div class="d-flex mb-5">
            <b-form-input
              class="search-product mr-3"
              placeholder="Поиск"
              @submit.prevent
              v-model="searchQuery"
            ></b-form-input>
            <select
              class="form-select ml-3"
              aria-label="Выбрать категорию"
              v-model="category"
            >
              <option v-for="category in getCategories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>

            </select>
          </div>

          <div
            v-if="searchProducts.length"
            class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <div
              class="col mb-5"
              v-for="product in searchProducts"
              :key="product.id"
            >
              <NuxtLink :to="`/products/${product.id}/`">
                <ProductCard :product="product"/>
              </NuxtLink>
            </div>
          </div>
          <div
            v-else-if="searchQuery !== '' && !searchProducts.length"
            class="nothing-found"
          >
            <p class="display-3">Упс... Ничего не найдено...</p>
          </div>
          <p v-if="searchProducts.length !== 0">Всего продуктов: {{ searchProducts.length }}</p>
        </div>
      </section>
      <!--    <main-pagination class="my-5" />-->
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  auth: false,
  name: "products",
  data() {
    return {
      searchQuery: "",
      category: "",
    };
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
      fetchProducts: "product/fetchProducts",
    }),

  },
  computed: {
    ...mapGetters({
      getCategories: "category/getCategories",
      getAllProducts: "product/getAllProducts",
    }),
    searchByCategory() {
      if (this.category === "") {
        return this.getAllProducts;
      }
      return this.getAllProducts.filter((product) => {
        return product.category.id === this.category;
      });
    },
    searchProducts() {
      return this.searchByCategory.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  head() {
    return {
      title: "Продукты",
    };
  },
  async mounted() {
    await this.fetchProducts();
    await this.fetchCategories();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.search-product:hover {
  box-shadow: 10px 5px 0px 0px #aaaaaa;
  transition: 1s;
}

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
  background-image: url('/assets/img/second-bg.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.demo-content {
  position: relative;
}

.nothing-found {
  min-height: 20rem;
  position: relative;
  display: flex;
}
</style>
