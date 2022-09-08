<template>
  <div>
    <button @click="getUser">GetUser</button>
    User:
    <pre>{{ user.username }}</pre>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
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
      user: '',
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
        window.localStorage.setItem("token", this.$auth.token);
      } catch (err) {
        console.log(err);
      }
    },
    async getUser() {
      try {
        console.log("login");
        this.$axios.setHeader('Authorization', `Token ${window.localStorage.token}`)

        const user = await this.$axios.$get(`http://localhost:8000/api/v1/auth/users/me/`);
        this.user = user;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
