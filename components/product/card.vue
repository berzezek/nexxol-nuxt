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
      v-if="!product.image"
      class="card-img-top"
      :src="product.get_thumbnail"
      :alt="product.name"
    />
    <img v-else class="card-img-top" :src="product.image" :alt="product.name" />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder">{{ product.name }}</h5>
        <!-- Product price-->
        <div v-if="product.discount > 0">
          <span
            class="text-muted text-decoration-line-through fw-normal show-discount"
            >{{ beautyPrice(product.price) }}</span
          ><span> {{ beautyPrice(product.discount_price) }} сум</span>
        </div>
        <div v-else>
          <span>{{ beautyPrice(product.price) }} сум</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDiscount: false,
    };
  },
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
.card:hover {
  box-shadow: 10px 5px 0px 0px #aaaaaa;
  transition: 1s;
}
img {
  min-height: 65%;
  max-height: 65%;
}

.card:hover .show-discount {
  display: none;
  transition: 1s;
}
</style>
