export default {
    async fetchCategories({ commit }) {
      // make request
      const categories = await this.$axios.$get('category/')
      .catch(e => console.log(e));
      commit('updateCategories', categories);
    }
  }