<template>
  <div class="container">
    <dashboard-product-form
      :buttonName="'Изменить'"
      :formName="`Изменить продукт`"
    />
  </div>
</template>

<script>
import FormData from 'form-data';

export default {
  data() {
    return {
      formData: new FormData(),
    };
  },
  layout: "dashboard",
  mixins: [addOrEditProduct],
  created() {
    this.$nuxt.$on("sendProduct", ($event) => this.editProduct($event));
    this.$nuxt.$on("selectFile", ($event) => this.updateFile($event));
  },
  methods: {
    async editProduct(e) {
      const keys = Object.keys(e);
      const values = Object.values(e);
      for (let i = 0; i < keys.length; i++) {
        if (values[i]) {
          this.formData.append(keys[i], values[i]);
        }
      };
      await this.$axios.put(`product/${this.$route.params.id}/`, this.formData);
      this.$notify.success({
        title: "Все в порядке",
        message: "Продукт успешно изменен",
      });
      this.formData = new FormData();
    },
    updateFile(file) {
      if (file) {
        this.formData.append("image", file, file.name);
      }
    },

  }
};
</script>

