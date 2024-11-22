<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pagina de Noticias</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-if="isLoggedIn" class="nav-item">
            <router-link class="nav-link" to="/profile">{{ userName || 'User' }}</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <button @click="logout" class="btn btn-danger">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // Variable que indica si el usuario está logeado
      isLoggedIn: !!localStorage.getItem('authToken'),
      userName: localStorage.getItem('userName') || ''
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  },
  watch: {
    '$route'() {
      this.isLoggedIn = !!localStorage.getItem('authToken');
      this.userName = localStorage.getItem('userName') || '';
    }
  }
};
</script>

<style scoped>
</style>
