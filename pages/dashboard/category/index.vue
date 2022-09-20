<template>
  <div class="container">
    <dashboard-category-form :category="category" :buttonName="edit"/>
    <dashboard-category-view :categories="getAllCategories" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      category: {
        isActive: true
      },
      edit: "Создать"
    };
  },
  created() {
    this.$nuxt.$on("removeCategory", (id, name) =>
      this.removeCategory(id, name)
    );
    this.$nuxt.$on("editActiveCategory", (id, name, isActive) =>
      this.editActiveCategory(id, name, isActive)
    );
    this.$nuxt.$on("editCategory", (id, name, isActive) =>
      this.editCategory(id, name, isActive)
    );
    this.$nuxt.$on("changeActive", (id, name, isActive) =>
      this.changeActive(id, name, isActive)
    );
    this.$nuxt.$on("addCategory", (category) => this.addCategory(category));
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),
    removeCategory(id, name) {
      this.$izitoast.error({
        title: `Категория - ${name}`,
        message: "Удалить?",
        position: "center",
        buttons: [
          [
            "<button>Да</button>",
            async () => {
              await this.$axios.$delete(`category/${id}/`);
              this.$izitoast.destroy();
              this.fetchCategories();
              this.$izitoast.success({
                title: `Категория - ${name}`,
                message: `Удалена!`,
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
    },
    editCategory(id, name, isActive) {
      console.log(id, name, isActive);
      let category = new Object();
      category.id = id;
      category.name = name;
      category.isActive = isActive;
      this.category = category;
    },
    changeActive(id, name, isActive) {
      this.$izitoast.info({
        title: `Категория - ${name}`,
        message: "Изменить активность?",
        position: "center",
        buttons: [
          [
            "<button>Да</button>",
            async () => {
              await this.$axios.$put(`category/${id}/`, {
                isActive: !isActive,
              });
              this.$izitoast.destroy();
              this.fetchCategories();
              this.$izitoast.success({
                title: `Активность - ${name}`,
                message: `Изменена!`,
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
    },
    addCategory(category) {
      if (category.name !== "") {
        try {
          this.$axios.$post("category/", category).then((res) => {
            if (res) {
              this.$notify.success({
                title: `Категория - ${res.name}`,
                message: "успешно создана!",
              });
              this.fetchCategories();
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
    editActiveCategory(category) {
      if (category.name !== "") {
        try {
          this.$axios.$put(`category/${category.id}/`, category).then((res) => {
            if (res) {
              this.$notify.success({
                title: `Категория - ${res.name}`,
                message: "успешно изменена",
              });
              this.fetchCategories();
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
    }),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>