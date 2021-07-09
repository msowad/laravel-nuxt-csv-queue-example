export const state = () => ({
  error: null,
  tasks: [],
  completedTasks: [],
  previousTasks: [],
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
};

// {
//   cancelledAt: null,
//   createdAt: '2021-07-09T08:23:44.000000Z',
//   failedJobs: 0,
//   finishedAt: '2021-07-09T08:23:47.000000Z',
//   id: '93de0c8b-6638-42c3-b9d4-ed963adfa2b1',
//   name: 'csv 10 records',
//   options: [],
//   pendingJobs: 0,
//   processedJobs: 1,
//   progress: 100,
//   totalJobs: 1,
// },
// {
//   cancelledAt: null,
//   createdAt: '2021-07-09T08:23:44.000000Z',
//   failedJobs: 0,
//   finishedAt: '2021-07-09T08:23:47.000000Z',
//   id: '912121sdsd3de0c8b-6638-42c3-b9d4-ed963adfa2b1',
//   name: 'csv 10 records',
//   options: [],
//   pendingJobs: 0,
//   processedJobs: 1,
//   progress: 100,
//   totalJobs: 1,
// },
