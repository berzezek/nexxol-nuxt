export default {
  updateProducts(state, val) {
    // get active products
    state.products = val.filter(p => p.isActive !== false);
    state.allProducts = val;
  },
  updatePageCount(state, val) {
    state.pageCount = val;
  },
  updateCount(state, val) {
    state.count = val;
  },
  updateProduct(state, val) {
    state.product = val;
  },
  updateProductPost(state, val) {
    state.productPost = val;
  },
}
