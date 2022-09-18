export default {
    updateCategories(state, val) {
      // get active categories
      state.categories = val.filter(p => p.isActive !== false);
    }
  }