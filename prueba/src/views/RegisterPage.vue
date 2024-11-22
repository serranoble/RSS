<template>
  <div class="container mt-5">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleRegister() {
      // Verifica si los campos están vacíos
      if (!this.username || !this.password) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password })
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Registro exitoso:', data);
          alert('Registro exitoso');
          this.$router.push('/login');
        } else {
          console.error('Error en el registro:', data.message);
          alert(data.message || 'Error desconocido');
        }
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
        alert('Error al conectar con el servidor');
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
