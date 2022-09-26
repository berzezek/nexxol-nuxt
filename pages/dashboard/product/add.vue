<template>
  <div class="container">
    <dashboard-product-form
      :categories="getAllCategories"
      :buttonName="'Добавить'"
      :formName="'Добавить продукт'"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormData from 'form-data';
export default {
  layout: "dashboard",
  name: "product-add",
  data() {
    return {
      formData: new FormData(),
    };
  },
  created() {
    this.$nuxt.$on("sendProduct", ($event) => this.sendProduct($event));
    this.$nuxt.$on("selectFile", ($event) => this.selectFile($event));
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),
    async sendProduct(e) {
      const keys = Object.keys(e);
      const values = Object.values(e);
      for (let i = 0; i < keys.length; i++) {
        this.formData.append(keys[i], values[i]);
      };
   
      await this.$axios.$post("product/", this.formdata);
      // await this.$axios.$post("product/", {
      //   "category": 1,
      //   "name": "Exam",
      //   "price": 100
      // });
      this.$notify.success({
        title: "OK",
      });
    },
    selectFile(e) {
      this.formData.append("image", e, e.name);
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