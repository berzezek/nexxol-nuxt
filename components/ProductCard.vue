<template>
  <div class="card h-100">
    <!-- Sale badge-->
    <div
      class="badge bg-primary text-white position-absolute"
      style="top: 0.5rem; right: 0.5rem"
      v-if="product.discount > 0"
    >
      -{{ product.discount }}%
    </div>
    <!-- Product image-->
    <img
      v-if="!product.image_1"
      class="card-img-top"
      :src="product.get_thumbnail"
      :alt="product.name"
    />
    <img
      v-else
      class="card-img-top"
      :src="product.image_1"
      :alt="product.name"
    />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder text-decoration-none">{{ product.name }}</h5>
        <!-- Product price-->
        <div v-if="product.discount > 0">
          <span class="text-muted text-decoration-line-through sm">{{
            beautyPrice(product.price)
          }}</span
          ><span> {{ beautyPrice(product.discount_price) }} сум</span>
        </div>
        <div v-else>{{ beautyPrice(product.price) }} сум</div>
      </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <!-- <div class="text-center">
        <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {},
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
.card:hover {
  box-shadow: 10px 5px 0px 0px #aaaaaa;
  transition: 1s;
}
img {
  min-height: 60%;
  max-height: 60%;
}


</style>
