<template>
  <div class="key-result-wrapper">
    {{ keyResult.title }}
    <div class="progress-wrapper">
      <v-btn
        color="primary"
        icon
        text
        class="action-button"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <span class="statistic">
        {{ keyResult.done }}/{{ keyResult.target }}
      </span>
      <v-btn
        color="primary"
        icon
        text
        class="action-button"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-progress-linear
        :value="progress(keyResult)"
        class="progress-linear"
        color="amber"
        height="16"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyResult: {
      type: Object,
      require: true,
      default: () => ({}),
    }
  },

  computed: {
    progress() {
      return keyResult => keyResult.done / keyResult.target * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
  .key-result-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 4px;
  }

  .progress-wrapper {
    display: flex;
    align-items: center;
  }

  .progress-linear {
    width: 155px;
    border-radius: 4px;
  }

  .action-button {
    margin: 0 4px;
  }

  .statistic {
    min-width: 48px;
    text-align: center;
  }
</style>
