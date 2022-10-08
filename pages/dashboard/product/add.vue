<template>
  <div class="container">
    <dashboard-product-form
      :buttonName="'Добавить'"
      :formName="'Добавить продукт'"
    />
  </div>
</template>

<script>
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
    async sendProduct(e) {
      const keys = Object.keys(e);
      const values = Object.values(e);
      for (let i = 0; i < keys.length; i++) {
        if (values[i]) {
          this.formData.append(keys[i], values[i]);
        }
      };
      await this.$axios.$post("product/", this.formData);

      this.$notify.success({
        title: "Все в порядке",
        message: "Продукт успешно добавлен",
      });
      this.formData = new FormData();
    },
    selectFile(file) {
      this.formData.append("image", file, file.name);
    },
  },
};
</script>
