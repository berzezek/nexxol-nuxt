<template>
  <div class="product-detail">
    <!-- Product section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img
              class="card-img-top mb-5 mb-md-0"
              :src="product.get_thumbnail"
              :alt="product.name"
            />
          </div>
          <div class="col-md-6">
            <div class="small mb-1">{{ product.category.name }}</div>
            <h1 class="display-5 fw-bolder">{{ product.name }} - {{ product.product_mark }}</h1>
            <div class="small">Объём: <span class="fw-bolder">{{ product.unit }}</span></div>
            <div class="small mb-5">Марка: <span class="fw-bolder">{{ product.product_mark }}</span></div>
            <div class="fs-5 mb-5" v-if="product.disount_price">
              <span class="text-decoration-line-through">{{ beautyPrice(product.price) }}</span>
              <span>{{ beautyPrice(product.disount_price) }} сум</span>
            </div>
            <div class="fs-5 mb-5" v-else>
              <span class="display-6">{{ beautyPrice(product.price) }} сум</span>
            </div>
            <p class="lead">
              {{ product.description }}
            </p>
            <div class="d-flex">
              <input
                class="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value="1"
                style="max-width: 3rem"
              />
              <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
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
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const product = await $axios.$get(`http://localhost:8000/api/v1/product/${params.productDetail}/`);
    return { product };
  },
  methods: {
    beautyPrice(price) {
      return Math.floor(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }

};
</script>

<style>
  .product-detail {
    margin-top: 15rem;
  }
</style>