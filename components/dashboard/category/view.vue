<template>
  <div>
    <div class="mt-5">
      <h3 class="text-center">Существующие категории</h3>
      <table class="table table-striped table-hover">
        <thead class="text-center">
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Активно</th>
            <th scope="col">Опции</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td class="">{{ category.name }}</td>
            <td
              class="text-center"
              @click="changeActive(category.id, category.name, category.isActive)"
            >
              <i :class="category.isActive ? 'fa-solid fa-check': 'fa-solid fa-xmark'"></i>
            </td>
            <td class="text-center">
              <div class="d-flex justify-content-around">
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  class="text-danger"
                  @click="removeCategory(category.id, category.name)"
                />
                <font-awesome-icon
                  icon="fa-solid fa-pen"
                  class="text-dark"
                  @click="editCategory(category.id, category.name, category.isActive)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    categories: Array,
  },
  methods: {
    removeCategory(id, name) {
      this.$nuxt.$emit("removeCategory", id, name);
    },
    changeActive(id, name, isActive) {
      this.$nuxt.$emit("changeActive", id, name, isActive);
    },
    editCategory(id, name, isActive) {
      this.$nuxt.$emit("editCategory", id, name, isActive);
    },
  },
};
</script>

<style scoped></style>
