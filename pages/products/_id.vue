<template>
  <div class="product-container">
    <div class="product-detail">
      <!-- Product section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                v-if="!product.image_1"
                class="card-img-top mb-5 mb-md-0"
                :src="product.get_thumbnail"
                :alt="product.name"
              />
              <img
                v-else
                class="card-img-top mb-5 mb-md-0"
                :src="product.image_1"
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
                Объём: <span class="fw-bolder">{{ product.unit }}</span>
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
                <!-- <input
                  class="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                  style="max-width: 3rem"
                /> -->
              </div>
              <button
                class="btn btn-outline-dark flex-shrink-0 mt-5 justify-content-end d-flex"
                type="button"
                @click="$router.go(-1)"
              >
                <i class="bi-cart-fill me-1"></i>
                Вернуться
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Related items section-->
      <!-- <section class="py-5 bg-light">
      <div class="container px-4 px-lg-5 mt-5">
        <h2 class="fw-bolder mb-4">Related products</h2>
        <div
          class="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-4
            justify-content-center
          "
        >
          <div class="col mb-5">
            <ProductCard :product="product"/>
          </div>
        </div>
      </div>
    </section> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, $config: { baseUrl } }) {
    const product = await $axios.$get(`${baseUrl}product/${params.id}/`);
    return { product };
  },
  methods: {
    beautyPrice(price) {
      return Math.floor(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  head() {
    return {
      title: `${this.product.name} - ${this.product.product_mark}`,
    };
  },
};
</script>

<style scoped>
.old-price {
  font-weight: 400;
}
</style>
