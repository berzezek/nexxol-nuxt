<template>
  <div>
    <h3 class="text-center">Создать категорию</h3>
    <div>
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
      <button @click="addCategory" class="btn-sm btn-primary">Создать</button>
      <button @click="editActiveCategory" class="btn-sm btn-primary">Изменить</button>
      <button @click="$router.go(-1)" class="btn-sm btn-primary">Назад</button>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    category: {
      type: Object,
      required: false
    },
  },
  methods: {
    async addCategory() {
      this.$nuxt.$emit('addCategory', this.category)
    },
    editActiveCategory() {
      this.$nuxt.$emit('editActiveCategory', this.category)
    }
  },
}
</script>
