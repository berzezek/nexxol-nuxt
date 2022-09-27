<template>
  <div class="container">
    <dashboard-product-form
      :buttonName="'Изменить'"
      :formName="`Изменить продукт`"
    />
  </div>
</template>

<script>
import addOrEditProduct from "@/mixins.js/addOrEditProduct";
export default {
  layout: "dashboard",
  mixins: [addOrEditProduct],
  created() {
    this.$nuxt.$on("sendProduct", ($event) => this.addOrEditProduct($event));
    this.$nuxt.$on("selectFile", ($event) => this.updateFile($event));
  }
};
</script>

