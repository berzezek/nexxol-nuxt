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
    <dashboard-category-view />
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "category-add",
  data() {
    return {
      category: {
        name: "",
        isActive: true,
      },
    };
  },
  methods: {
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
};
</script>
