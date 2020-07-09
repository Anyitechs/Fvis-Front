export const state = () => ({
    toggle: ''
})

export const mutations = {
    SET_MENU_TOGGLE(state) {
        state.toggle = 'active'
    },
    RESET_MENU_TOGGLE(state) {
        state.toggle = ''
    }

}