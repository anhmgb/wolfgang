<template>
  <v-card
    :v-if="data.isCreating"
    class="wrapper"
    elevation="5"
  >
    <div class="d-flex card-action">
      <h3>
        {{ data.objective }}
      </h3>
      <div>
        <v-btn
          icon
          color="primary"
        >
          <v-icon>{{ 'mdi-playlist-edit' }}</v-icon>
        </v-btn>
        <v-btn
          icon
          color="error"
          @click="onRemoveOKR(data.id)"
        >
          <v-icon>{{ 'mdi-delete' }}</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="isExpand = !isExpand"
        >
          <v-icon>{{ isExpand ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </div>
    </div>
    <v-expand-transition>
      <div v-show="isExpand" class="card-content">
        <hr class="divider">
        <div v-for="keyResult in data.keyResults" :key="keyResult.id">
          {{ keyResult.title }}
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true,
      default: () => ({}),
    },
    onRemoveOKR: {
      type: Function,
      require: true,
      default: () => {},
    },
  },
  data: () => ({
    isExpand: true,
  }),
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 780px;
    padding: 4px 16px;
    margin-bottom: 32px;
  }

  .card-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .divider {
    width: 100%;
    color: black
  }

  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

</style>
