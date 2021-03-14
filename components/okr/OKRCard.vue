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
      <div class="d-flex align-center">
        <div class="day-left">
          {{ daysLeft }} days left
        </div>
        <v-progress-circular
          :rotate="360"
          :size="40"
          :width="5"
          :value="totalProgress(data.id)"
          color="amber"
          class="mr-2"
        >
          <span class="total-progress">{{ totalProgress(data.id) }}</span>
        </v-progress-circular>
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
        <Divider :height="'2px'" />
        <div
          v-for="(keyResult, index) in data.keyResults"
          :key="keyResult.id"
        >
          <Divider v-if="index" :backgroundColor="'#fffafa'" />
          <KeyResult :okrId="data.id" :keyResult="keyResult" />
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import KeyResult from './KeyResult';
import Divider from '~/components/commons/Divider';
import { diffDays } from '~/utils/moment.js';
export default {
  components: { Divider, KeyResult },

  props: {
    data: {
      type: Object,
      require: true,
      default: () => ({}),
    },
  },

  data: () => ({
    isExpand: true,
    date: null,
  }),

  computed: {
    daysLeft() {
      const { timeStart, timeEnd } = this.data;
      return diffDays(timeStart, timeEnd);
    },
    totalProgress() {
      return okrId => this.$store.getters['okr/totalProgress'](okrId);
    },
  },

  methods: {
    onRemoveOKR(id) {
      console.log(`removed ${id}`);
    }
  }
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
    padding: 8px 4px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .total-progress {
    font-size: 14px;
  }

  .day-left {
    margin-right: 4px;
    min-width: 110px;
  }

</style>
