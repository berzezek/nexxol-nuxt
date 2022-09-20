<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr class="text-center">
        <th scope="col">Наименование</th>
        <th scope="col">Изображение</th>
        <th scope="col">Категория</th>
        <th scope="col">Активно</th>
        <th scope="col">Цена</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr
        v-for="product in products"
        :key="product.id"
        @click="$router.push({ path: `/dashboard/product/${product.id}` })"
      >
        <td class="text-start">
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
          {{ product.category.name }}
        </td>
        <td>
          <i class="fa-solid fa-check" v-if="product.isActive"></i>
          <i class="fa-solid fa-xmark" v-else></i>
        </td>
        <td class="text-end">
          <span v-if="product.discount > 0"
            ><span class="text-primary">-{{ product.discount }}%</span>
            {{ product.discount_price }}
          </span>
          <span v-else>{{ product.price }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<style scoped>
.table-img {
  width: 50px;
}
</style>
