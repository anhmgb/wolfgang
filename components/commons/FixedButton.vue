<template>
  <v-btn
    class="plus-button mx-2"
    fab
    dark
    color="primary"
  >
    <v-icon class="plus-icon">
      mdi-plus
    </v-icon>
  </v-btn>
</template>

<style lang="scss" scoped>
  .plus-button {
    position: fixed;
    z-index: 1;
    bottom: 5%;
    right: 5%;
  }

  .plus-icon {
    color: black;
  }
</style>
