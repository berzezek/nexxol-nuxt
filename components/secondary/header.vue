<template>
  <div>
    <b-navbar toggleable="md" class="header">
      <div class="container">
        <NuxtLink to="/"
          ><b-navbar-brand
            ><img
              src="@/static/assets/img/logo.png"
              alt="NEXXOL"
              width="150px" /></b-navbar-brand
        ></NuxtLink>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

          <!-- Right aligned nav items -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Поиск"
              @submit.prevent
              v-model="searchQuery"
              @change="searchProduct"
            ></b-form-input> -->
            <!-- <button @click="searchProduct">nice</button> -->
            <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            > -->
            <b-navbar-nav>
              <b-nav-item v-for="nav in navLink" :key="nav.to"
                ><NuxtLink :to="nav.to" class="fw-bolder">{{
                  nav.title
                }}</NuxtLink></b-nav-item
              >
              <!-- <b-nav-item
                ><NuxtLink to="#contacts">Контакты</NuxtLink></b-nav-item
              >
              <b-nav-item
                ><NuxtLink to="/products">Продукты</NuxtLink></b-nav-item
              > -->
            </b-navbar-nav>
            <b-nav-form v-if="$route.path === '/dashboard'">
            <b-nav-item-dropdown right v-if="$auth.user">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Админ</em>
              </template>
              <b-dropdown-item>{{ $auth.user.username }}</b-dropdown-item>
              <b-dropdown-item @click="signOut">Выйти</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },

  props: {
    navLink: Array,
  },
  methods: {
    async signOut() {
      this.$auth.logout();
      this.$notify.success({
        title: `Досвидания`,
        message: "Вы успешно вышли",
      });
      this.$router.push("/");
    },
    // searchProduct() {
    //   $nuxt.$emit('searchProduct', this.searchQuery)
    // }
  },
};
</script>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header:hover {
  background-color: rgb(255, 255, 255);
  transition: 1s;
}

a {
  text-decoration: none;
}
</style>
