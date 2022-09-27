<template>
  <div class="container">
    <dashboard-product-form
      :buttonName="'Добавить'"
      :formName="'Добавить продукт'"
    />
  </div>
</template>

<script>
import addOrEditProduct from "@/mixins.js/addOrEditProduct";

export default {
  layout: "dashboard",
  name: "product-add",
  mixins: [addOrEditProduct],
  created() {
    this.$nuxt.$on("sendProduct", ($event) => this.addOrEditProduct($event));
    this.$nuxt.$on("selectFile", ($event) => this.selectFile($event));
  },
  methods: {
    selectFile(file) {
      this.formData.append("image", file, file.name);
    },
  },
};
</script>
