<template>
  <div class="container">
    <FixedButton @click.native="onAddOKR" />
    <transition-group name="list">
      <template v-for="item in okr">
        <OKRCard
          :key="item.id"
          :data="item"
          :onRemoveOKR="onRemoveOKR"
        />
      </template>
    </transition-group>
  </div>
</template>

<script>
import FixedButton from '~/components/commons/FixedButton';
import OKRCard from '~/components/commons/OKRCard';

const objective = {
  id: 1,
  objective: 'This is objective',
  progress: 0,
  startTime: Date.now(),
  endTime: Date.now(),
  isCreating: true,
  keyResults: [
    {
      id: 1,
      title: 'This is key result',
      done: 0,
      target: 0
    },
    {
      id: 2,
      title: 'This is key result',
      done: 0,
      target: 0
    },
    {
      id: 3,
      title: 'This is key result',
      done: 0,
      target: 0
    },
    {
      id: 4,
      title: 'This is key result',
      done: 0,
      target: 0
    },
  ],
};

export default {
  components: { FixedButton, OKRCard },
  data: () => ({
    okr: [objective]
  }),

  methods: {
    onAddOKR() {
      this.okr = [...this.okr, { ...objective, id: 2 }];
    },

    onRemoveOKR(id) {
      this.okr = this.okr.filter(item => item.id !== id);
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
