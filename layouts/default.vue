<template>
  <v-app light>
    <v-main class="app">
      <Header />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/commons/Header.vue';
export default {
  components: { Header },
};
</script>
