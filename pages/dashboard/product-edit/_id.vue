<template>
  <div class="container">
    <h3 class="text-center mt-5">Изменить продукт {{ product.name }}</h3>
    <form
      @submit.prevent
      enctype="multipart/form-data"
      class="border rounded p-5 my-3"
    >
      <!-- <div class="mb-3">
        <label class="form-label">Категория</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="product.category"
        >
          <option selected disabled>Категория</option>
          <option
            v-for="category in allCategories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
        <div class="form-text">
          Выберите или добавьте
          <span
            @click="$router.push({ name: 'category-add' })"
            class="text-primary"
            >новую</span
          >
        </div>
      </div> -->

      <div class="mb-3">
        <label for="exampleInputName" class="form-label"
          >Название продукта</label
        >
        <input
          type="text"
          maxlength="255"
          class="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          v-model="product.name"
        />
        <div class="form-text">
          Название должно быть уникальным, максимальная длинна 64 символа
        </div>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Описание продукта</label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          v-model="product.description"
        />
        <div class="form-text">Введите описание продукта</div>
      </div>
      <div>
        <label class="form-label">По умолчанию</label>

        <img :src="product.get_thumbnail" class="img-fluid img-default mb-2" />
      </div>

      <div class="mb-3">
        <div v-if="product.image_1">
          <label class="form-label">Главное изображение</label>

          <img :src="product.image_1" class="img-fluid img-default" />
        </div>
        <input
          class="form-control"
          type="file"
          accept="image/png, image/jpeg"
          id="image1"
        />
      </div>
      <div class="mb-3">
        <div v-if="product.image_2">
          <label class="form-label">Дополнительное изображение</label>

          <img :src="product.image_2" class="img-fluid img-default" />
        </div>

        <input
          class="form-control"
          type="file"
          accept="image/png, image/jpeg"
          id="image2"
        />
      </div>
      <div class="mb-3">
        <div v-if="product.image_3">
          <label class="form-label">Дополнительное изображение</label>

          <img :src="product.image_3" class="img-fluid img-default" />
        </div>
        <input
          class="form-control"
          type="file"
          accept="image/png, image/jpeg"
          id="image3"
        />
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Цена за единицу</label>
        <input
          type="numer"
          class="form-control"
          id="price"
          aria-describedby="price"
          v-model="product.price"
        />
        <div class="form-text">Цена в UZS</div>
      </div>

      <div class="mb-3">
        <label for="discount" class="form-label">Скидка</label>
        <input
          type="numer"
          class="form-control"
          id="discount"
          aria-describedby="discountHelp"
          v-model="product.discount"
        />
        <div class="form-text">Цена - Цена * скидку - 100 (~ X XXX 900)</div>
      </div>

      <div class="mb-3">
        <label class="form-label">Объём</label>
        <input
          type="text"
          class="form-control"
          id="unit"
          aria-describedby="unitHelp"
          v-model="product.unit"
        />
        <div class="form-text">Объем упаковки</div>
      </div>

      <div class="mb-3">
        <label for="product_mark" class="form-label">Артикул</label>
        <input
          type="text"
          class="form-control"
          id="product_mark"
          aria-describedby="product_markHelp"
          v-model="product.product_mark"
        />
        <div class="form-text">Необязательное поле</div>
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="isActive"
          v-model="product.isActive"
        />
        <label class="form-check-label" for="showInCatalog"
          >Показать на сайте</label
        >
      </div>

      <button class="btn btn-primary me-3" @click="editProduct">
        Сохранить
      </button>

      <button class="btn btn-primary" @click="$router.go(-1)">Назад</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {},
  async asyncData({ $axios, params, $config: { baseUrl } }) {
    const product = await $axios.$get(`${baseUrl}product/${params.id}/`);
    return { product };
  },
  methods: {
    async editProduct() {
      console.log(this.$route.params.id)

      // await $axios.put(`${baseUrl}product/${this.$route.params.id}`)
    }
  }
};
</script>

<style scoped>
.img-default {
  width: 10%;
}

.dashboard {
  min-width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
