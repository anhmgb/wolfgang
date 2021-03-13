<template>
  <v-card
    class="app-bar"
    elevation="5"
  >
    <div class="d-flex align-center">
      <v-avatar size="48">
        <img src="~assets/images/wolf-logo.png" alt="wolf-logo">
      </v-avatar>
      <NuxtLink class="link header-title" to="/">
        Wolfgang
      </NuxtLink>
    </div>
    <div class="d-flex align-center">
      <NuxtLink class="link feature" to="/okr">
        OKR
      </NuxtLink>
      <NuxtLink class="link feature" to="/todos">
        Todos
      </NuxtLink>
      <NuxtLink class="link feature" to="/quizlet">
        Quizlet
      </NuxtLink>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
  .app-bar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    padding: 6px 48px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(253,252,251,1) 100%);
    z-index: 1;
  }

  .header-title {
    margin-left: 8px;
    font-size: 24px;
    font-weight: bold;
  }

  .link {
    color: #000;
    text-decoration: none;
  }

  .feature {
    padding: 8px 16px;
    margin-left: 24px;
    border-radius: 5px;

    &:hover {
      background-color: $primary-color;
    }
  }
</style>
