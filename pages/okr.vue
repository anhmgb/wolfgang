<template>
  <div class="container">
    <FixedButton @click.native="onAddOKR" />
    <transition-group name="list">
      <template v-for="item in doingOKR">
        <OKRCard
          :key="item.id"
          :data="item"
        />
      </template>
    </transition-group>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import FixedButton from '~/components/commons/FixedButton';
import OKRCard from '~/components/okr/OKRCard';

const okr = {
  id: 2,
  objective: 'This is objective 2',
  progress: 0,
  timeStart: 1615687877027,
  timeEnd: Date.now(),
  isCreating: true,
  keyResults: [
    {
      id: 1,
      title: 'This is long text of key result',
      done: 5,
      target: 6
    },
    {
      id: 2,
      title: 'This is long text of key result',
      done: 4,
      target: 12
    },
    {
      id: 3,
      title: 'This is long text of key result',
      done: 2,
      target: 5
    },
    {
      id: 4,
      title: 'This is long text of key result',
      done: 2,
      target: 8
    },
  ],
};

export default {
  components: { FixedButton, OKRCard },
  data: () => ({

  }),

  computed: {
    doingOKR: sync('okr/doing'),
  },

  methods: {
    onAddOKR() {
      this.$store.set('okr/newOKR', okr);
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
