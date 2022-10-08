export default {
    async fetchProducts({ commit }) {
      const products = await this.$axios.$get('product/')
      commit('updateProducts', products.result);
      commit('updateCount', products.count);
      commit('updatePageCount', products.page_count);
    },
    async fetchProduct({ commit }, product_id) {
      const product = await this.$axios.$get(`product/${product_id}/`)
      commit('updateProduct', product);
    },
    async fetchProductPost({ commit }, product_id) {
      const productPost = await this.$axios.$get(`product-post/${product_id}/`)
      commit('updateProductPost', productPost);
    },
  }
