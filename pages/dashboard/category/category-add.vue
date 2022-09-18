<template>
  <div>
    <h3 class="text-center">Создать категорию</h3>
    <form @submit.prevent="addCategory">
      <div class="mb-3">
        <label for="exampleInputLogin" class="form-label">Наименование</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputLogin"
          aria-describedby="loginHelp"
          v-model="category.name"
        />
        <div id="loginHelp" class="form-text">
          * Имя категории должно быть уникальным
        </div>
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="category.isActive"
        />
        <label class="form-check-label" for="exampleCheck1">Активно</label>
      </div>
      <button type="submit" class="btn btn-primary">Создать</button>
    </form>
    <div class="mt-5">
      <h3 class="text-center">Существующие категории</h3>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Активно</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in getAllCategories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>
              <i class="fa-solid fa-check" v-if="category.isActive"></i>
              <i class="fa-solid fa-xmark" v-else></i>
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
  layout: "dashboard",
  data() {
    return {
      category: {
        name: "",
        isActive: true,
      },
    };
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",

    }),
    async addCategory() {
      if (this.category.name !== "") {
        try {
          this.$axios.$post("category/", this.category).then((res) => {
            if (res) {
              this.$notify.success({
                title: `Категория - ${res.name}`,
                message: "успешно создана!",
              });
              this.$router.push("/dashboard/product-view");
            }
          });
        } catch (error) {
          this.$izitoast.error({
            title: "Ошибочка",
            message: "Что то пошло не так...",
          });
        }
      } else {
        this.$izitoast.error({
          title: "Ошибочка",
          message: "Укажите название категории",
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      getAllCategories: "category/getAllCategories",
      getAllProducts: "product/getAllProducts",
    }),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>