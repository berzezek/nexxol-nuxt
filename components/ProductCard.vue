<template>
  <div class="card h-100">
    <!-- Sale badge-->
    <div
      class="badge bg-dark text-white position-absolute"
      style="top: 0.5rem; right: 0.5rem"
      v-if="product.discount > 0"
    >
      -{{ product.discount }}%
    </div>
    <!-- Product image-->
    <img
      class="card-img-top"
      :src="product.get_thumbnail"
      :alt="product.name"
    />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder">Special Item</h5>
        <!-- Product price-->
        <span class="text-muted text-decoration-line-through">$20.00</span>
        {{ product.price }}
      </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center">
        <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>