// import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
// import "vue-awesome-paginate/dist/style.css";

// Register the package
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(VueAwesomePaginate);
// });
// import Vue from 'vue';
import VueAwesomePaginate  from 'vue-awesome-paginate';
import "vue-awesome-paginate/dist/style.css";

export default defineNuxtPlugin ((nuxtApp) => {
  // Daftarkan komponen Pagination ke aplikasi Nuxt.js
  nuxtApp.vueApp.use(VueAwesomePaginate);
})