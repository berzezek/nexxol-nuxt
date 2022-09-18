export default {
    updateProducts(state, val) {
      // get active products
      state.products = val.filter(p => p.isActive !== false);
      state.allProducts = val;
    },
    updateProduct(state, val) {
      state.product = val;
    }
  }