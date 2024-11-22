<template>
  <div class="container mt-5">
    <h1>Revisa las noticias mas recientes de hoy</h1>
    <div v-if="isLoggedIn">
      <div class="row">
        <div class="col-12 col-md-4 mb-4" v-for="(news, index) in newsArticles" :key="index">
          <div class="card">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="noticia">
            <div class="card-body">
              <h5 class="card-title">{{ news.title }}</h5>
              <p class="card-text">{{ news.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Debes iniciar sesión para ver las noticias.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      newsArticles: [
        { title: "Noticia 1", description: "Descripción de la noticia 1" },
        { title: "Noticia 2", description: "Descripción de la noticia 2" },
        { title: "Noticia 3", description: "Descripción de la noticia 3" },
        { title: "Noticia 4", description: "Descripción de la noticia 4" },
        { title: "Noticia 5", description: "Descripción de la noticia 5" },
      ],
    };
  },
  created() {
    if (localStorage.getItem('authToken')) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.card {
  width: 100%;
}
</style>
