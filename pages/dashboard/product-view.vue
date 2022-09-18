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
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Наименование</th>
          <th scope="col">Изображение</th>
          <th scope="col">Активно</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in searchProduct"
          :key="product.id"
          @click="
            $router.push({ path: `/dashboard/product-edit/${product.id}` })
          "
        >
          <td>
            {{ product.name }} - {{ product.product_mark }} / {{ product.unit }}
          </td>
          <td>
            <img
              v-if="!product.image_1"
              :src="product.get_thumbnail"
              :alt="product.name"
              class="img-fluid table-img"
            />
            <img
              v-else
              :src="product.image_1"
              :alt="product.name"
              class="img-fluid table-img"
            />
          </td>
          <td>
            <i class="fa-solid fa-check" v-if="product.isActive"></i>
            <i class="fa-solid fa-xmark" v-else></i>
          </td>
          <td>
            <span v-if="product.discount > 0" class="text-primary"
              >{{ product.discount_price }} (-{{ product.discount }}%)</span
            >
            <span v-else>{{ product.price }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      class="btn btn-success me-3"
      @click="$router.push({ name: 'product-add' })"
    >
      Добавить продукт
    </button>
    <button class="btn btn-info" @click="$router.push('/products')">
      Вернуться к продуктам
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
    searchProduct() {
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

<style scoped>
.table-img {
  width: 50px;
}
</style>