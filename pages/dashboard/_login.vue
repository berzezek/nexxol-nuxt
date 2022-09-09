<template>
  <div>
    <div v-if="$auth.user" class="text-center" >
      <h3>Добро пожаловать {{ $auth.user.username }}</h3>
      <p>Перейти в <span><NuxtLink :to="('/dashboard/product-view')">панель управления</NuxtLink></span> или <span @click="$auth.logout()" class="text-info">выйти</span>?</p>
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
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          
        />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
          console.log(response)
          if (response.status === 200) {
            this.$notify.success({
            title: `${this.$auth.user.username}`,
            message: "Вы успешно авторизовались"
            });
          }
  
        } catch (error) {
          this.$izitoast.error({
            title: "Ошибочка",
            message: "Что то пошло не так..."
            });
        }
      } else {
          this.$izitoast.error({
            title: "Ошибочка",
            message: "Логин и пароль должны быть заполнены"
            });
      }
    },
  },
};
</script>
