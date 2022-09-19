<template>
  <div class="container mt-5">
    <h3 class="text-center">Удалить категорию {{ category_name }}?</h3>
    <!-- <button class="btn btn-danger" @click="removeCategory">Удалить</button> -->
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  props: {
    category_name: String,
  },
};
</script>
