import FormData from "form-data";

export default {
  data() {
    return {
      formData: new FormData(),
    }
  },
  methods: {
    async addOrEditProduct(e) {
      const keys = Object.keys(e);
      const values = Object.values(e);
      for (let i = 0; i < keys.length; i++) {
        this.formData.append(keys[i], values[i]);
      }
      let notify_message = "";
      if (this.getProduct.id) {
        await this.$axios.$post(`product/${this.getProduct.id}/`, this.formData);
        notify_message = "изменен";
      } else {
        await this.$axios.$post("product/", this.formData);
        notify_message = "добавлен";
      }

      this.$notify.success({
        title: "Все в порядке",
        message: `Продукт успешно ${notify_message}`,
      });
      this.formData = new FormData();
    },
    updateFile(file) {
      this.formData.append("image", file, file.name);
    },
  }
}
