export default {
    async fetchProducts({ commit }) {
      // make request
      const products = await this.$axios.$get('product/')
      // .catch(e => console.log(e));
      commit('updateProducts', products);
    },
    async fetchProduct({ commit }, product_id) {
      // make request
      const product = await this.$axios.$get(`product/${product_id}/`)
      console.log(product);
      // .catch(e => console.log(e));
      commit('updateProduct', product);
    },
  }