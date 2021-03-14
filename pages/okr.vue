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
import OKRCard from '~/components/okr/OKRCard';

const objective = {
  id: 1,
  objective: 'This is objective',
  progress: 0,
  timeStart: 1615687877027,
  timeEnd: Date.now(),
  isCreating: true,
  keyResults: [
    {
      id: 1,
      title: 'This is long text of key result',
      done: 5,
      target: 10
    },
    {
      id: 2,
      title: 'This is long text of key result',
      done: 4,
      target: 6
    },
    {
      id: 3,
      title: 'This is long text of key result',
      done: 2,
      target: 7
    },
    {
      id: 4,
      title: 'This is long text of key result',
      done: 8,
      target: 8
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
