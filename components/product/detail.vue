<template>
  <section class="py-5 container">
    <div class="px-lg-5 my-5 rounded p-3 product-card bg-light">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img
            v-if="!product.image"
            class="card-img-top mb-5 mb-md-0"
            :src="product.get_thumbnail"
            :alt="product.name"
          />
          <img
            v-else
            class="card-img-top mb-5 mb-md-0"
            :src="product.image"
            :alt="product.name"
          />
        </div>
        <div class="col-md-6">
          <div class="small mb-1">{{ product.category.name }}</div>
          <h1 class="display-5 fw-bolder">
            {{ product.name }}
          </h1>
          <p class="lead">
            {{ product.description }}
          </p>
          <div class="text-primary mb-3" v-if="product.discount">
            На данную продукция действует акция:
            <span class="fw-bolder">-{{ product.discount }}%</span>
          </div>
          <div class="small mb-1">
            Объём: <span class="fw-bolder">{{ product.get_unit }}</span>
          </div>
          <div class="small mb-3">
            Марка: <span class="fw-bolder">{{ product.product_mark }}</span>
          </div>

          <div class="d-flex">
            <div class="fs-5 mb-5" v-if="product.discount > 0">
              <span
                class="text-decoration-line-through fw-normal text-primary"
                >{{ beautyPrice(product.price) }}</span
              >
              <span>{{ beautyPrice(product.discount_price) }} сум</span>
            </div>
            <div class="fs-5 mb-5" v-else>
              <span>{{ beautyPrice(product.price) }} сум</span>
            </div>
          </div>
          <button
            class="btn btn-outline-dark flex-shrink-0 mt-5 justify-content-end d-flex"
            type="button"
            @click="$router.push({ name: 'products' })"
          >
            <i class="bi-cart-fill me-1"></i>
            Вернуться
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    beautyPrice(price) {
      return Math.floor(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
};
</script>

<style scoped>

.product-card {
  opacity: 0.9;
}

.product-card:hover {
  opacity: 1;
  transition: 1s;
}



</style>
