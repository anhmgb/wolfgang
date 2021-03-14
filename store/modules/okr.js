import { make } from 'vuex-pathify';
import { SET_PROGRESS_TYPE_ENUM } from '~/constants/okr';

const state = {
  doing: [
    {
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
    },
  ],
  done: [],
  pending: [],
  cancel: [],
};

const mutations = make.mutations(state);

const actions = {
  setKeyResultProgress({ commit }, { okrId, keyResultId, type }) {
    const category = 'doing';
    const currentCategory = state[category];
    const currentOKR = currentCategory.find(okr => okr.id === okrId);
    const currentKeyResult = currentOKR.keyResults.find(keyResult => keyResult.id === keyResultId);

    if (type === SET_PROGRESS_TYPE_ENUM.PLUS) {
      const isReachThreshHole = currentKeyResult.done / currentKeyResult.target === 1;
      if (!isReachThreshHole) currentKeyResult.done += 1;
    } else {
      const isReachThreshHole = currentKeyResult.done / currentKeyResult.target === 0;
      if (!isReachThreshHole) currentKeyResult.done -= 1;
    }
  },

  setNewOKR({ commit }, okr) {
    const category = 'doing';
    const newDoingOKR = [...state[category], okr];
    commit('SET_DOING', newDoingOKR);
  },
};

const getters = {
  totalProgress: state => (okrId) => {
    const category = 'doing';
    const currentOKR = state[category].find(okr => okr.id === okrId);
    const statistic = currentOKR.keyResults.reduce((acc, keyResult) => {
      return {
        done: acc.done + keyResult.done,
        target: acc.target + keyResult.target,
      };
    }, { done: 0, target: 0 });
    return Math.round(statistic.done / statistic.target * 100);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
