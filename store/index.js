export const state = () => ({
  menu: [],
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $api }) {
    const { data: menu } = await $api.menu()
    commit('SET_MENU', menu)
  },
}
