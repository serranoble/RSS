<template>
    <div class="container mt-5">
      <h2>Perfil del Usuario</h2>
      <div class="card" style="width: 18rem;">
        <img v-if="userProfile.photo" :src="userProfile.photo" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">{{ userProfile.username }}</h5>
          <p class="card-text">{{ userProfile.email }}</p>
          <p class="card-text">{{ userProfile.description }}</p>
          <p><strong>Fecha de Registro:</strong> {{ userProfile.registrationDate }}</p>
          <p><strong>Noticias favoritas:</strong> {{ userProfile.favoriteNews }}</p>
        </div>
      </div>
      <button class="btn btn-primary mt-3" @click="editProfile">Editar Perfil</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userProfile: {
          username: "Usuario de Ejemplo",
          email: "usuario@ejemplo.com",
          description: "Esta es una breve descripción sobre mí.",
          photo: "https://via.placeholder.com/150",
          registrationDate: "01/01/2024",
          favoriteNews: 10,
        }
      };
    },
    methods: {
      editProfile() {
        this.$router.push('/edit-profile'); // Redirige a la página de edición de perfil al futuro
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: auto;
  }
  </style>
  