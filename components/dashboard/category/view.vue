<template>
  <div>
    <div class="mt-5">
      <h3 class="text-center">Существующие категории</h3>
      <table class="table table-striped table-hover">
        <thead class="text-center">
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Активно</th>
            <th scope="col">Удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in getAllCategories" :key="category.id">
            <td class="">{{ category.name }}</td>
            <td class="text-center">
              <i class="fa-solid fa-check" v-if="category.isActive"></i>
              <i class="fa-solid fa-xmark" v-else></i>
            </td>
            <td class="text-center">
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="text-danger"
                @click="removeCategory(category.id, category.name)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),
    removeCategory(category_id, category_name) {
      this.$izitoast.info({
        title: `Категория - ${category_name}`,
        message: "Удаляется!",
        onClosed: function () {
          console.log(`un${category_id}`);
        },
        onClosing: function () {
          console.log(`delete${category_id}`);
        },
      });
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

<style scoped></style>
