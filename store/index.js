export const state = () => ({
  lang: 'ko',
})

export const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang;
  },
}

export const getters = {
  language(state) {
    return state.lang;
  },
}
