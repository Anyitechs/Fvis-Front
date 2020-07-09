export const state = () => ({
    html: '',
    bodyClass: '',
    menuActive: ''
})

export const mutations = {
    SET_MENU_TOGGLE(state) {
        state.html = ' overflow',
            state.bodyClass = ' menu-open',
            state.menuActive = ' active'
    },
    RESET_MENU_TOGGLE(state) {
        state.html = '',
        state.bodyClass = '',
        state.menuActive = ''
    }
}
