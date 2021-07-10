export const state = () => ({
  error: null,
  tasks: [],
  completedTasks: [],
  previousTasks: [],
  fileRows: [],
  fileName: null,
});

export const actions = {
  async upload({ commit }, csv) {
    try {
      const { data } = await this.$axios.post('/upload-file', csv);
      commit('ADD_TASK', data);
    } catch (e) {
      commit('SET_ERROR', e.message);
    }
  },

  async loadTaskProgress({ commit }, ids) {
    try {
      const { data } = await this.$axios.post(`/batch/progress`, { ids });
      commit('SET_TASKS_PROGRESS', data);
    } catch (e) {
      commit('SET_ERROR', e.message);
    }
  },

  async loadPendingTask({ commit }) {
    try {
      const { data } = await this.$axios.get(`/batch/pending`);
      commit('SET_TASKS', data);
    } catch (e) {
      commit('SET_ERROR', e.message);
    }
  },

  clearCompletedTask({ commit }, id) {
    commit('REMOVE_TASK', id);
  },

  async loadHistory({ commit }) {
    const { data } = await this.$axios.get('/batches');
    commit('SET_PREVIOUS_TASK', data);
  },

  async loadFile({ commit }, batchId) {
    const { data } = await this.$axios.get(`/file/${batchId}`);

    commit('SET_FILE_DETAIL', data);
  },
};

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },

  ADD_TASK(state, task) {
    state.tasks.push(task);
  },

  SET_TASKS(state, task) {
    state.tasks = task;
  },

  SET_PREVIOUS_TASK(state, tasks) {
    state.previousTasks = tasks;
  },

  REMOVE_TASK(state, id) {
    state.completedTasks = state.completedTasks.filter((t) => t.id !== id);
  },

  SET_TASKS_PROGRESS(state, tasks) {
    state.tasks = tasks.filter((t) => t.progress < 100);

    const completedTasks = tasks.filter((t) => t.progress >= 100);
    state.completedTasks.push(...completedTasks);
  },

  SET_FILE_DETAIL(state, data) {
    state.fileRows = data.rows;
    state.fileName = data.file_name;
  },
};
