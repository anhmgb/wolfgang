<template>
  <div class="key-result-wrapper">
    {{ keyResult.title }}
    <div class="progress-wrapper">
      <v-btn
        color="primary"
        icon
        text
        class="action-button"
        @click="onSetKeyResultProgress(okrId, keyResult.id, minus)"
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
        @click="onSetKeyResultProgress(okrId, keyResult.id, plus)"
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
import { SET_PROGRESS_TYPE_ENUM } from '~/constants/okr';
export default {
  props: {
    keyResult: {
      type: Object,
      require: true,
      default: () => ({}),
    },

    okrId: {
      type: Number,
      require: true,
      default: 0,
    }
  },

  data: () => ({
    minus: SET_PROGRESS_TYPE_ENUM.MINUS,
    plus: SET_PROGRESS_TYPE_ENUM.PLUS,
  }),

  computed: {
    progress() {
      return keyResult => keyResult.done / keyResult.target * 100;
    }
  },

  methods: {
    onSetKeyResultProgress(okrId, keyResultId, type) {
      this.$store.set('okr/keyResultProgress', { okrId, keyResultId, type });
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
