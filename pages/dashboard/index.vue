<template>
  <div class="dashboard">
    <div v-if="$auth.user" class="text-center">
      <h3>Добро пожаловать {{ $auth.user.username }}</h3>
      <p>
        Перейти в
        <span
          ><NuxtLink :to="'/dashboard/product/view'"
            >панель управления</NuxtLink
          ></span
        >
        или <span @click="userLogout" class="text-info">выйти</span>?
      </p>
    </div>
    <form @submit.prevent="userLogin" v-else>
      <div class="mb-3">
        <label for="exampleInputLogin" class="form-label">Логин</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputLogin"
          aria-describedby="loginHelp"
          v-model="login.username"
        />
        <div id="loginHelp" class="form-text">
          Обратитесь к системному администратору
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Пароль</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="login.password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      if (this.login.username && this.login.password) {
        try {
          let response = await this.$auth.loginWith("local", {
            data: this.login,
          });
          if (response.status === 200) {
            this.$notify.success({
              title: `${this.$auth.user.username}`,
              message: "Вы успешно авторизовались",
            });
            this.$router.push("/dashboard/product/view");
          }
        } catch (error) {
          this.$izitoast.error({
            title: "Ошибочка",
            message: "Что то пошло не так...",
          });
        }
      } else {
        this.$izitoast.error({
          title: "Ошибочка",
          message: "Логин и пароль должны быть заполнены",
        });
      }
    },
    async userLogout() {
      this.$auth.logout();
      console.log("logout");
      this.$router.push("/");
    },
  },
  head() {
    return {
      title: `Dashboard`,
    };
  },
};
</script>

<style>
.dashboard {
  min-width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
