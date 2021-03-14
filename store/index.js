import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import okr from './modules/okr';

const createStore = () => {
  return new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
      okr,
    },
  });
};

export default createStore;
