<template>
  <div class="product-container">
    <div class="">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-lg-5 mt-5">
          <b-form-input
            size="sm"
            class="mb-5 w-50 search-product"
            placeholder="Поиск"
            @submit.prevent
            v-model="searchQuery"
          ></b-form-input>
          <div
            v-if="searchProducts.length"
            class="
              row
              gx-4 gx-lg-5
              row-cols-1 row-cols-md-3 row-cols-xl-4
              justify-content-center
            "
          >
            <div
              class="col mb-5"
              v-for="product in searchProducts"
              :key="product.id"
            >
              <NuxtLink :to="`/products/${product.id}/`">
                <ProductCard :product="product" />
              </NuxtLink>
            </div>
          </div>
          <div v-else>Ничего не найдено...</div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.search-product:hover {
  box-shadow: 10px 5px 0px 0px #aaaaaa;
  transition: 1s;
}

.product-container {
  /* background-color: rgb(97, 97, 97); */
  min-height: 40rem;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions({
      fetchProducts: 'product/fetchProducts'
    }),

  },
  computed: {
    ...mapGetters({
      getAllProducts: 'product/getAllProducts'
    }),
    searchProducts() {
      return this.getAllProducts.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  head() {
    return {
      title: "Продукты",
    };
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
