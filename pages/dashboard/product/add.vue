<template>
<div class="container">
  <h1 class="text-center">Добавить продукт</h1>
  <dashboard-product-form :categories="getAllCategories" />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  layout: "dashboard",
  name: 'product-add',
  methods: {
    ...mapActions({
      fetchCategories: 'category/fetchCategories'
    })
  },
  computed: {
    ...mapGetters({
      getAllCategories: 'category/getAllCategories'
    })
  },
  mounted() {
    this.fetchCategories();
  }
}
</script>