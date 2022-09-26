<template>
  <div>
    <span>Добавить изображение</span>
    <input
      type="file"
      accept=".jpeg,.jpg,.png,image/jpeg,image/png"
      aria-label="upload image button"
      @change="selectFile"
    />
  </div>
</template>

<script>
export default {
  methods: {
    selectFile(e) {
      const file = e.target.files[0];
      if (file.size > 5_242_880) {
        this.$izitoast.error({
          title: 'Ошибочка',
          message: 'Файл не может быть более 5мб'
        })
      } else {
        this.$nuxt.$emit('selectFile', file)
      }
    }
  }  
}
</script>
