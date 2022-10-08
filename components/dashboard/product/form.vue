<template>
  <div>
    <h2 class="text-center">{{ formName }}</h2>
    <form
      @submit.prevent="sendProduct"
      enctype="multipart/form-data"
      class="border rounded p-5 my-3"
    >
      <div class="mb-3">
        <label class="form-label">Категория</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="newProduct.category"
        >
          <option
            v-for="category in getCategories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
        <div class="form-text">
          Выберите или добавьте
          <span
            @click="$router.push('/dashboard/category/add')"
            class="text-primary"
            style="cursor: pointer"
          >новую</span
          >
        </div>
      </div>

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
          v-model="newProduct.name"
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
          v-model="newProduct.description"
        />
        <div class="form-text">Введите описание продукта</div>
      </div>
      <div v-if="buttonName !== 'Изменить'">
        <img
          :src="newProduct.image"
          :alt="newProduct.name"
          class="img-fluid img-default mb-2"
          v-if="newProduct.image"
        />
        <img
          :src="newProduct.get_thumbnail"
          :alt="newProduct.name"
          class="img-fluid img-default mb-2"
          v-else
        />
        <label class="form-label">По умолчанию</label>
      </div>

      <div class="mb-3">
        <div v-if="newProduct.image">
          <label class="form-label">Главное изображение</label>

          <img :src="newProduct.image" class="img-fluid img-default" :alt="newProduct.name"/>
        </div>
        <dashboard-product-image/>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Цена за единицу</label>
        <input
          type="number"
          class="form-control"
          id="price"
          aria-describedby="price"
          v-model="newProduct.price"
        />
        <div class="form-text">Цена в UZS</div>
      </div>

      <div class="mb-3">
        <label for="discount" class="form-label">Скидка</label>
        <input
          type="number"
          class="form-control"
          id="discount"
          aria-describedby="discountHelp"
          v-model="newProduct.discount"
        />
        <div class="form-text">Цена - Цена * скидку - 100 (~ X XXX 900)</div>
      </div>


      <div class="mb-3">
        <label class="form-label">Упаковка</label>
        <select class="form-select" aria-label="Default select example" v-model="newProduct.tara">
          <option value="other" selected>Другое</option>
          <option value="kanister">Канистра</option>
          <option value="barrel">Бочка</option>
        </select>
        <div class="form-text">Бочка 200, Канистра 20... Изображение - автоматически</div>
      </div>

      <div class="mb-3" v-if="newProduct.tara === 'other'">
        <label class="form-label">Объём</label>
        <input
          type="text"
          class="form-control"
          id="unit"
          aria-describedby="unitHelp"
          v-model="newProduct.unit"
        />
        <div class="form-text">Объем упаковки</div>
      </div>

      <div class="mb-3">
        <label for="newProduct_mark" class="form-label">Артикул</label>
        <input
          type="text"
          class="form-control"
          id="newProduct_mark"
          aria-describedby="newProduct_markHelp"
          v-model="newProduct.product_mark"
        />
        <div class="form-text">Необязательное поле</div>
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="isActive"
          v-model="newProduct.isActive"
        />
        <label class="form-check-label" for="showInCatalog"
        >Показать на сайте</label
        >
      </div>

      <button class="btn-sm btn-primary me-3" type="submit">
        {{ buttonName }}
      </button>

      <button class="btn-sm btn-info" @click="$router.push({ path: '/dashboard/product' })">Назад</button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {

  data() {
    return {
      newProduct: {
        name: '',
        description: '',
        image: null,
        price: 0,
        discount: '',
        tara: 'other',
        unit: '',
        product_mark: '',
        isActive: true,
        category: 1,
      },
    };
  },
  props: {
    buttonName: {
      type: String,
    },
    formName: {
      type: String,
    },
  },
  methods: {
    ...mapActions({
      fetchProductPost: "product/fetchProductPost",
      fetchCategories: "category/fetchCategories",
    }),
    sendProduct() {
      this.$nuxt.$emit("sendProduct", this.newProduct);
    }
  },
  computed: {
    ...mapGetters({
      getProductPost: "product/getProductPost",
      getCategories: "category/getCategories"
    }),

  },
  async mounted() {
    await this.fetchCategories();
    if (this.formName === "Изменить продукт") {
      await this.fetchProductPost(this.$route.params.id);
      this.newProduct = {...this.getProductPost};
    }
  }
};
</script>

<style scoped>
  .img-default {
    width: 20%;
  }
</style>
