export const state = () => ({
  error: null,
  task: null,
  previousTasks: [],
});

export const actions = {
  async upload({ commit }, csv) {
    try {
      const { data } = await this.$axios.post('/upload-file', csv);
      commit('SET_TASK', data);
    } catch (e) {
      commit('SET_ERROR', e.message);
    }
  },

  async loadTaskProgress({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/batch/${id}`);
      commit('SET_TASK', data);
    } catch (e) {
      commit('SET_ERROR', e.message);
    }
  },

  async loadPendingTask({ commit }) {
    try {
      const { data } = await this.$axios.get(`/batch/pending`);
      commit('SET_TASK', data);
    } catch (e) {
      commit('SET_ERROR', e.message);
    }
  },

  clearTask({ commit }) {
    commit('SET_TASK', null);
  },

  async loadHistory({ commit }) {
    const { data } = await this.$axios.get('/batches');
    commit('SET_PREVIOUS_TASK', data);
  },
};

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },

  SET_TASK(state, task) {
    state.task = task;
  },

  SET_PREVIOUS_TASK(state, tasks) {
    state.previousTasks = tasks;
  },
};
